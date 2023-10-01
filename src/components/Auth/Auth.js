import {
  CATALOG_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../Utils/consts";

import s from "./Auth.module.css";
import { Field, Form, Formik } from "formik";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../../api/userAPI";

export const Auth = ({ setUserData, isLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const isAuth = location.pathname === LOGIN_ROUTE;
  const click = async (values, { setSubmitting }) => {
    try {
      let data;
      if (isAuth) {
        data = await login(values.email, values.password);
      } else {
        data = await registration(values.email, values.password);
      }
      setUserData(values.email, values.password, true);
      setSubmitting(false);
      navigate(CATALOG_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
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

  // if (isAuth) {
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
            <h2>{isAuth ? "Login" : "Registration"}</h2>
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

            {isAuth ? (
              <button
                className={s.button}
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            ) : (
              <button
                className={s.button}
                type="submit"
                disabled={isSubmitting}
              >
                Register
              </button>
            )}
            {isAuth ? (
              <div>
                no account? <NavLink to={REGISTRATION_ROUTE}>register</NavLink>
              </div>
            ) : (
              <div>
                have account? <NavLink to={LOGIN_ROUTE}>login</NavLink>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
