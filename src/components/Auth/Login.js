import { CATALOG_ROUTE, REGISTRATION_ROUTE } from "../../Utils/consts";
import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../api/userAPI";
import s from "./Auth.module.css";
import {
  loginFormValidateEmail,
  loginFormValidatePassword,
} from "../../Utils/commonFunctions";
import { Button } from "../StyledComponents/Button";

export const Login = ({ setUserData }) => {
  const navigateToRoute = useNavigate();

  const loginClick = async (values, { setSubmitting }) => {
    try {
      const data = await login(values.email, values.password);
      setUserData(values.email, values.password, true);
      setSubmitting(false);
      navigateToRoute(CATALOG_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className={s.loginForm}>
      <Formik
        className={s.form}
        initialValues={{
          email: "",
          password: "",
        }}
        validate={loginFormValidateEmail}
        onSubmit={loginClick}
      >
        {({
          errors,
          touched,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className={s.formBlock}>
            <h2>Login</h2>
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
            <Button
              loginStyle
              backgroundColor="#025cd3"
              backgroundColorHover="#63c2fc"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </Button>
            <div>
              no account? <NavLink to={REGISTRATION_ROUTE}>register</NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
