import React from "react";

const Description = (props) => {
  const {description } = props.p;

  return (
    
      <text style={{fontSize: 14}}>{description}</text>
   
  );
};

export default Description;