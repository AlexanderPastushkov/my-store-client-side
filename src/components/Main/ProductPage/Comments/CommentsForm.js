import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import s from "./CommentsForm.module.css";

const usersSearchFormValidate = (values) => {
  const errors = {};
  return errors;
};

export const CommentsForm = () => {
  const submit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={s.findForm}>
      <Formik
        initialValues={{ title: "" }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div>
              <Field
                className={s.nameField}
                type="text"
                as="textarea"
                name="title"
              />
            </div>

            <button
              className={s.submitButton}
              type="submit"
              disabled={isSubmitting}
            >
              Add comment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
