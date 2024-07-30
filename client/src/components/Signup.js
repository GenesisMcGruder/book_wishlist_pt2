import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

function Signup({setUser, setIsLoggedIn, fetchBooks, fetchWishlist}) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: ""
    },
    onSubmit: (values) => {
      fetch("signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.ok) {
            console.log(values);
            setUser(values)
            setIsLoggedIn(true)
            fetchBooks()
            fetchWishlist()
            navigate("/Books");
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required").email("Invalid email"),
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required")
    }),
  });

  return (
    <div className="form-case">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h1>Signup</h1>
        <label>Email:</label>
        <input
          className="form-input"
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>
        <br />
        <label>Username:</label>
        <input
          className="form-input"
          name="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.errors.username && formik.touched.username && (
            <div className="error">{formik.errors.username}</div>
          )}
        </div>
        <br />
        <label>Password:</label>
        <input
          className="form-input"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="error">
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <br />
        <button className="signup-btn" type="submit">
          Submit
        </button>
      </form>
      <Link to="/Login" className="signup-to-login">
        Already have an account? Login here.
      </Link>
    </div>
  );
}

export default Signup;