import React from "react";

const style = {
  outsideBox: {
    width: "768px",
    margin: "0 auto"
  },
  insideBox: {
    width: "98%",
    paddingTop: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "10px",
    position: "relative"
  }
};

export default ({ children }) => {
  return (
    <div style={style.outsideBox}>
      <div style={style.insideBox}>
        {children}
      </div>
    </div>
  );
};
