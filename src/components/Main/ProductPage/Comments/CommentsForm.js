import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import s from "./CommentsForm.module.css";
import {
  createComment,
  getCommentsForProduct,
} from "../../../../api/commentsAPI";
import { LOGIN_ROUTE } from "../../../../Utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoginBollean } from "../../../../redux/auth-selectors";
import { useNavigate } from "react-router-dom";
import { Comments } from "./Comments";
import EmojiPicker from "emoji-picker-react";
import { takeComments } from "../../../../toolkitRedux/commentsSliceSelectors";

const commentsFormValidate = (values) => {
  const errors = {};
  return errors;
};

export const CommentsForm = ({ id }) => {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiData, event) => {
    setInputStr((prevInput) => prevInput + emojiData.emoji);

    setShowPicker(false);
  };

  const navigateToRoute = useNavigate();
  const isLogin = useSelector(getIsLoginBollean);
  const submit = (values, { setSubmitting }) => {
    if (isLogin) {
      createComment(values.title, inputStr, id);

      setSubmitting(false);
    } else {
      navigateToRoute(LOGIN_ROUTE);
    }
  };

  return (
    <div className={s.findForm}>
      <Formik
        initialValues={{ title: "", description: "" }}
        validate={commentsFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div>
              <span>Title</span>
              <Field className={s.nameField} type="text" name="title" />
            </div>
            <div className={s.pickerContainer}>
              <span>Comment</span>
              <Field
                className={s.nameField}
                as="textarea"
                name="description"
                value={inputStr}
                onChange={(e) => setInputStr(e.target.value)}
              />
              <img
                className={s.emojiIcon}
                src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                onClick={() => setShowPicker((val) => !val)}
              />
              {showPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
            </div>

            <div>
              <button
                className={s.submitButton}
                type="submit"
                disabled={isSubmitting}
              >
                Add comment
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Comments id={id} />
    </div>
  );
};
