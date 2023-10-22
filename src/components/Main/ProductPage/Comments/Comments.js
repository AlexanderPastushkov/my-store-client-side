import { useEffect, useState } from "react";
import s from "./CommentsForm.module.css";

export const Comments = function Comments({ data, loading }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!loading) {
      setComments(data.getComment);
    }
  }, [data]);

  return (
    <div className={s.commentsList}>
      {comments.map((c, index) => (
        <div key={c.id}>
          <div className={s.commentItems}>
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
