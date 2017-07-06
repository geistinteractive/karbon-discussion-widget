import React from "react";
require("normalize.css");
require("./static/main.css");
import Layout from "./components/layout";
import Post from "./components/Post";
import CommentThread from "./components/CommentThread";
import "./initialData";
import FM from "./utils/fm";

const editCommentScript = initialData.editCommentScript
  ? initialData.editCommentScript
  : "test";

const handleEditClicked = CommentID => {
  FM.runScript(editCommentScript, CommentID);
};

export default () => {
  return (
    <Layout>
      <Post data={initialData.post} />
      <CommentThread
        data={initialData.comments}
        onEditClicked={handleEditClicked}
      />
    </Layout>
  );
};
