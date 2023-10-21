import { useMutation, useQuery } from "@apollo/client";
import EmojiPicker from "emoji-picker-react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../../../Utils/consts";
import {
  CREATE_COMMENT,
  GET_PRODUCT_COMMENTS,
} from "../../../../api/QueryGQL/comment";
import { getIsLoginBollean } from "../../../../redux/auth-selectors";
import { setComment } from "../../../../toolkitRedux/commentsSlice";
import { RatingContainer } from "../../../Common/Rating/RatingContainer";
import { Button } from "../../../StyledComponents/Button";
import { Comments } from "./Comments";
import s from "./CommentsForm.module.css";

const commentsFormValidate = (values) => {
  const errors = {};
  return errors;
};

export const CommentsForm = ({ id }) => {
  const [inputStr, setInputStr] = useState("");
  const [titleStr, setTitleStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const { data, loading, error, refetch } = useQuery(GET_PRODUCT_COMMENTS, {
    variables: {
      productID: Number(id),
    },
  });
  const [newComment] = useMutation(CREATE_COMMENT);
  const addComment = () => {
    newComment({
      variables: {
        input: {
          title: titleStr,
          description: inputStr,
          productID: Number(id),
        },
      },
    }).then((data) => dispatch(setComment(data)));
  };

  const onEmojiClick = (emojiData, event) => {
    setInputStr((prevInput) => prevInput + emojiData.emoji);

    setShowPicker(false);
  };
  const dispatch = useDispatch();
  const navigateToRoute = useNavigate();
  const isLogin = useSelector(getIsLoginBollean);

  const submit = (values, { setSubmitting }) => {
    if (isLogin) {
      addComment();
      setSubmitting(false);
      refetch();
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
              <Button
                backgroundcolor="rgb(13, 125, 217)"
                backgroundcolorhover="rgb(1, 100, 181)"
                type="submit"
                disabled={isSubmitting}
              >
                Add comment
              </Button>
            </div>
          </Form>
        )}
      </Formik>
      <RatingContainer id={id} />
      <Comments data={data} loading={loading} id={id} />
    </div>
  );
};
