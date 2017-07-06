import React from "react";

var listenForGetResult = function() {
  console.log("hash changed", location.hash);
};
// add the listener
window.addEventListener("hashchange", listenForGetResult, false);

const Line = () => {
  return (
    <div
      style={{
        borderBottomColor: "#DEDEDE",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid"
      }}
    />
  );
};

export default ({ children, data }) => {
  return (
    <div className="post">
      <div className="post-inner">
        <h1>
          {data.title}
        </h1>
        <Line />
        <div
          style={{ paddingTop: "10px" }}
          dangerouslySetInnerHTML={{ __html: data.body }}
        />
      </div>
    </div>
  );
};
