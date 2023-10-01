import React, { useEffect } from "react";
import { getComments } from "../../../../api/commentsAPI";
import { takeComments } from "../../../../toolkitRedux/commentsSliceSelectors";
import { setComments } from "../../../../toolkitRedux/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../../../redux/auth-selectors";
import s from "./CommentsForm.module.css";

export const Comments = function Comments({ id }) {
  useEffect(() => {
    refreshComments();
  }, [id]);

  const refreshComments = () => {
    const fetchData = async (id) => {
      const response = await fetch(`/api/reviews/${id}`);
      const json = await response.json();

      dispatch(setComments(json));
    };
    fetchData(id);
  };
  const dispatch = useDispatch();
  const name = useSelector(getUserEmail);
  const comments = useSelector(takeComments);
  return (
    <div className={s.commentsList}>
      {comments.map((c, index) => (
        <div key={c.id}>
          <div className={s.commentItems}>
            <p>{name}</p>

            <p>
              comment#{index + 1}
              <span className={s.commentTitle}> {c.title}</span>
            </p>
          </div>
          <p className={s.comment}>{c.description}</p>
        </div>
      ))}
    </div>
  );
};
