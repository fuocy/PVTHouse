import { useRef, useEffect, useState } from "react";

import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  const { onAddedComment } = props;

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredText = commentTextRef.current.value;

    // optional: Could validate here
    if (!enteredText) {
      alert("Phải gõ gì đó mới bình luận được");
      return;
    }

    sendRequest({ commentData: { text: enteredText }, quoteId: props.quoteId });
    commentTextRef.current.value = "";
  };

  return (
    // <form className={classes.form} onSubmit={submitFormHandler}>
    //   {status === 'pending' && (
    //     <div className='centered'>
    //       <LoadingSpinner />
    //     </div>
    //   )}
    //   <div className={classes.control} onSubmit={submitFormHandler}>
    //     <label htmlFor='comment'>Your Comment</label>
    //     <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
    //   </div>
    //   <div className={classes.actions}>
    //     <button className='btn'>Add Comment</button>
    //   </div>
    // </form>
    <form onSubmit={submitFormHandler}>
      {status === "pending" && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      <div className="flex sm:gap-10 gap-3 ">
        <textarea
          ref={commentTextRef}
          className="py-2 px-4 flex-1 outline-none rounded-sm bg-[#F6F5F3]"
          placeholder="Bạn bình luận gì đi"
        />
        <button className="py-1 px-3 text-sm sm:text-base sm:py-3 sm:px-5 bg-yellow-400 rounded-sm hover:bg-yellow-500 transition">
          Thêm bình luận
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
