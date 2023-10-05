import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import s from "./CommentsForm.module.css";
import { createComment } from "../../../../api/commentsAPI";
import { LOGIN_ROUTE } from "../../../../Utils/consts";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoginBollean } from "../../../../redux/auth-selectors";
import { useNavigate } from "react-router-dom";
import { Comments } from "./Comments";
import EmojiPicker from "emoji-picker-react";
import { takeComments } from "../../../../toolkitRedux/commentsSliceSelectors";
import { setComments } from "../../../../toolkitRedux/commentsSlice";
import { Rating } from "../../../Common/Rating/Rating";
import { RatingContainer } from "../../../Common/Rating/RatingContainer";

const commentsFormValidate = (values) => {
  const errors = {};
  return errors;
};

export const CommentsForm = ({ id }) => {
  const [inputStr, setInputStr] = useState("");
  const [titleStr, setTitleStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const refreshComments = () => {
    const fetchData = async (id) => {
      const response = await fetch(`/api/reviews/${id}`);
      const json = await response.json();

      dispatch(setComments(json));
    };
    fetchData(id);
  };

  const onEmojiClick = (emojiData, event) => {
    setInputStr((prevInput) => prevInput + emojiData.emoji);

    setShowPicker(false);
  };
  const dispatch = useDispatch();
  const navigateToRoute = useNavigate();
  const isLogin = useSelector(getIsLoginBollean);
  const submit = async (values, { setSubmitting }) => {
    if (isLogin) {
      await createComment(titleStr, inputStr, id);

      setSubmitting(false);
      refreshComments();
      setInputStr("");
      setTitleStr("");
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
              <Field
                className={s.nameField}
                type="text"
                name="title"
                value={titleStr}
                onChange={(e) => setTitleStr(e.target.value)}
              />
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
                alt="img"
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
      <RatingContainer id={id} />
      <Comments id={id} />
    </div>
  );
};
