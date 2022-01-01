import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { registerr } from "../../action/auth";

const Register = () => {
  const history = useHistory();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const { isValid, errors } = formState;

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await registerr({
        address: data.address,
        age: data.age,
        carModel: data.carModel,
        phone: data.phone,
        careName: data.careName,
        drivingLicence: data.drivingLicence,
        email: data.email,
        name: data.name,
        namePalate: data.namePalate,
        nidPicture: data.nidPicture,
        password: data.password,
        profilePicture: data.profilePicture,
        vehiceType: data.vehiceType,
        role: "rider",
      });

      toast.success("register success");
      history.push("/login");
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
              <label className="form-label">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="form-control"
              />

              <p style={{ color: "red" }}>
                {errors.name && <span>This field is required</span>}
              </p>
            </div>

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
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                {...register("age", { required: true })}
                type="number"
                className="form-control"
              />
              <p style={{ color: "red" }}>
                {errors.age && <span>This field is required</span>}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                {...register("address", { required: true })}
                type="text"
                className="form-control"
              />
              <p style={{ color: "red" }}>
                {errors.address && <span>This field is required</span>}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                {...register("phone", { required: true })}
                type="number"
                className="form-control"
              />
              <p style={{ color: "red" }}>
                {errors.phone && <span>This field is required</span>}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Driving Licence</label>
              <input
                {...register("drivingLicence", { required: true })}
                type="text"
                className="form-control"
              />
              <p style={{ color: "red" }}>
                {errors.drivingLicence && <span>This field is required</span>}
              </p>
            </div>

            <div className="mb-3">
              <label className="form-label"> NID Picture</label>
              <input
                {...register("nidPicture")}
                type="file"
                className="form-control"
              />
              {/* <p style={{ color: "red" }}>
                {errors.nidPicture && <span>This field is required</span>}
              </p> */}
            </div>

            <div className="mb-3">
              <label className="form-label">Profile Picture</label>
              <input
                {...register("profilePicture")}
                type="file"
                className="form-control"
              />
              {/* <p style={{ color: "red" }}>
                {errors.profilePicture && <span>This field is required</span>}
              </p> */}
            </div>

            <div className="mb-3">
              <label className="form-label">Care Name</label>
              <input
                {...register("careName", { required: true })}
                type="text"
                className="form-control"
              />
              <p style={{ color: "red" }}>
                {errors.careName && <span>This field is required</span>}
              </p>
            </div>

            <div className="mb-3">
              <label className="form-label">Car Model</label>
              <input
                {...register("carModel", { required: true })}
                type="text"
                className="form-control"
              />
              <p style={{ color: "red" }}>
                {errors.carModel && <span>This field is required</span>}
              </p>
            </div>

            <div className="mb-3">
              <label className="form-label">Name Palate</label>
              <input
                {...register("namePalate", { required: true })}
                type="text"
                className="form-control"
              />
              <p style={{ color: "red" }}>
                {errors.namePalate && <span>This field is required</span>}
              </p>
            </div>

            <div className="mb-3">
              <label className="form-label">Vehice Type</label>
              <input
                {...register("vehiceType", { required: true })}
                type="text"
                className="form-control"
              />
              <p style={{ color: "red" }}>
                {errors.vehiceType && <span>This field is required</span>}
              </p>
            </div>
            <button type="submit">Register</button>
            {/* <input disabled={!isValid} type="submit" /> */}
          </form>

          <div className="mb-5">
            <h6 className="mt-4">OR</h6>
            <Link to="/login">
              <p> Already Have an Account ?</p>
              <button>Login</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
