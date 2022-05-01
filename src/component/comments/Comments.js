import { useState, useEffect, useCallback } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  const quoteId = 1; // hard cord quoteId instead of using params

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered my-5">Chưa ai bình luận gì cả</p>;
  }

  return (
    <section className={classes.comments}>
      <h2 className="text-xl font-semibold">Bình luận về bài viết này</h2>
      {comments}
      <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />
    </section>
  );
};

export default Comments;
