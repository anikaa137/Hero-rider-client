import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../action/auth";
import { AppContext } from "../../App";

const Login = () => {
  const history = useHistory();
  const { loggedInUser, setLoggedInUser } = useContext(AppContext);
  console.log(loggedInUser, "app");
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const { isValid, errors } = formState;
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const onSubmit = async (data, e) => {
    try {
      let res = await login({
        email: data.email,
        password: data.password,
        role: data.role,
      });
      setLoggedInUser(res.data.user);
      if (res.data.user.role === "user") {
        history.replace(from);
        e.target.reset();
      }
      if (res.data.user.role === "rider") {
        history.push("/Seller");
      }
      if (res.data.user.role === "admin") {
        history.push("/admin");
      }

      // save user and token to local-storage
      window.localStorage.setItem("auth", JSON.stringify(res.data));
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6 offset-md-2 col-lg-6 col-xl-6 offset-lg-3 offset-xl-3 offset-md-3">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5 pt-5">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control"
              />
              <p style={{ color: "red" }}>
                {errors.email && <span>This field is required</span>}
              </p>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                {...register("password", { required: true })}
                type="password"
                className="form-control"
              />
              <p style={{ color: "red" }}>
                {errors.password && <span>This field is required</span>}
              </p>
            </div>
            <button type="submit"> Login </button>
            {/* <input disabled={!isValid} type="submit" placeholder="Log In" /> */}
          </form>
          <div>
            <h2>OR</h2>
            <Link to="/register">
              <p>Don't Have an Account ?</p>
              <button>Register</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
