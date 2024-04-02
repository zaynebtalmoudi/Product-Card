import React from "react";

const Price = (props) => {
  const {price } = props.p;

  return (
    
      <div>
      <span class="fw-normal text-decoration-line-through text-danger" style={{fontSize:'15px'}} >{price}</span>
      <span class='p-2  fs-5' >25.00 $</span>
      </div>
   
  );
};

export default Price;