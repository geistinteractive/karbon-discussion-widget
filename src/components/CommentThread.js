import React from "react";

const mapComments = (comments, onEditClicked) => {
  return comments.map((comment, key) => {
    const handleEditClick = e => {
      console.log(e.target.data);
      e.preventDefault();
      onEditClicked(comment.id ? comment.id : "no-id");
    };

    return (
      <div style={{ margin: "2em" }} key={key}>
        <div style={{ color: "darkGray" }}>
          <strong>
            {comment.person}
          </strong>
        </div>
        <div>
          {comment.body}
        </div>
        <a className="comment-edit-link" onClick={handleEditClick} href="">
          edit
        </a>
      </div>
    );
  });
};

export default ({ data, onEditClicked }) => {
  return (
    <div>
      {mapComments(data, onEditClicked)}
    </div>
  );
};
