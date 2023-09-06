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

export const CommentsFormWithoutFormik = ({ id }) => {
  const [title, setTitle] = useState("");
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onEmojiClick = (emojiData, event) => {
    setInputStr((prevInput) => prevInput + emojiData.emoji);
    console.log(inputStr);
    setShowPicker(false);
  };
  const comments = useSelector(takeComments);
  const navigateToRoute = useNavigate();
  const isLogin = useSelector(getIsLoginBollean);
  const submit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log(title, inputStr, id);
      createComment(title, inputStr, id);
    } else {
      navigateToRoute(LOGIN_ROUTE);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <label>description</label>
        <textarea
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
          type="text"
          name="description"
        />
        <button type="submit">add comment</button>
      </form>
    </div>
  );
};
