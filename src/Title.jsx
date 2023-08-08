import React from "react";

const Title = (props) => {
  const { title } = props;
  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
