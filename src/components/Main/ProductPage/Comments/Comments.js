import React, { useEffect } from "react";
import { getComments } from "../../../../api/commentsAPI";
import { takeComments } from "../../../../toolkitRedux/commentsSliceSelectors";
import { setComments } from "../../../../toolkitRedux/commentsSlice";
import { useDispatch, useSelector } from "react-redux";

export const Comments = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getComments().then((data) => dispatch(setComments(data)));
  }, []);
  const comments = useSelector(takeComments);

  return (
    <div>
      {comments.map((c) => (
        <p key={c.id}>{c.title}</p>
      ))}
    </div>
  );
};
