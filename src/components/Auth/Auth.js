import React, { useState } from "react";
import { useLocation } from "react-router";
import { CATALOG_ROUTE, LOGIN_ROUTE } from "../../Utils/consts";
import { login, registration } from "../../api/userAPI";
import s from "./Auth.module.css";
import { Field, Form, Formik } from "formik";
import { Navigate } from "react-router-dom";

export const Auth = () => {
  const click = async (values, { setSubmitting }) => {
    const response = await registration(values.email, values.password);
    setSubmitting(false);
    console.log(response);
  };

  const loginFormValidateEmail = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  const loginFormValidatePassword = (values) => {
    if (!values) return "Required";
  };

  // if (isLogin) {
  //   return <Navigate to={CATALOG_ROUTE} />;
  // }

  return (
    <div className={s.loginForm}>
      <Formik
        className={s.form}
        initialValues={{
          email: "",
          password: "",
        }}
        validate={loginFormValidateEmail}
        onSubmit={click}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className={s.formBlock}>
            <div className={s.emailBlock}>
              <label className={s.loginLabel}>Email</label>
              <Field className={s.field} type="email" name="email" />
              <p className={s.error}>
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div>
              <label className={s.loginLabel}>Password</label>
              <Field
                className={s.field}
                type="password"
                name="password"
                validate={loginFormValidatePassword}
              />
              <p className={s.error}>
                {errors.password && touched.password && errors.password}
              </p>
            </div>
            {/* <label className={s.loginLabel}>Remember me</label>
            <Field type="checkbox" name="rememberMe" /> */}

            <button className={s.button} type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
