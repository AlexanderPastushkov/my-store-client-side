import { Field, Form, Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { CATALOG_ROUTE, LOGIN_ROUTE } from "../../Utils/consts";
import { registration } from "../../api/userAPI";
import s from "./Auth.module.css";
import {
  loginFormValidateEmail,
  loginFormValidatePassword,
} from "../../Utils/commonFunctions";
import { Button } from "../StyledComponents/Button";

export const Registration = ({ setUserData, isLogin }) => {
  const navigateToRoute = useNavigate();

  const registrationClick = async (values, { setSubmitting }) => {
    try {
      const data = await registration(values.email, values.password);
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
        onSubmit={registrationClick}
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
            <h2>Registration</h2>
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
              Register
            </Button>
            <div>
              have account? <NavLink to={LOGIN_ROUTE}>login</NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
