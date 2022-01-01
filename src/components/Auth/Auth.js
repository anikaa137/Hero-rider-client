import React from "react";
import "./Auth.css";
import { useForm } from "react-hook-form";

const Auth = () => {
  const signUPUser = true;
  //active
  const addActive = () => {
    const formBx = document.querySelector(".formBx");
    formBx.classList.add("active");
  };

  // remove
  const removeActive = () => {
    const formBx = document.querySelector(".formBx");
    formBx.classList.remove("active");
  };

  // hook-form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="authBody">
      <div className="container">
        <div className="blueBg">
          {/* signIn */}
          <div className="box signin">
            <h2>Already Have an Account ?</h2>
            <button className="signinBtn" onClick={() => removeActive()}>
              Sign In
            </button>
          </div>
          {/* signUP */}
          <div className="box signup">
            <h2> Don't Have an Account ?</h2>
            <button onClick={() => addActive()} className="signupBtn">
              Sign Up
            </button>
          </div>
        </div>

        {/* form */}

        <div className="formBx">
          {/* sign in form start*/}
          <div className="form signinForm">
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
              <h3>Sign In</h3>
              <input
                placeholder="Username"
                {...register("userName", { required: true })}
              />

              <input
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {signUPUser === true ? (
                <input
                  placeholder="new"
                  {...register("password", { required: true })}
                />
              ) : (
                ""
              )}

              {errors.password && <span>This field is required</span>}

              <input type="submit" />
            </form>
          </div>
          {/* sign in form  end*/}
        </div>
      </div>
    </div>
  );
};

export default Auth;
