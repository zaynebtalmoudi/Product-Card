import React from "react";

const Image = (props) => {
  const { image } = props.p;

  return (
   <div class='bg-image hover-zoom'>
     <img className="rounded-top img-fluid" style={{ maxHeight: "22rem", width: '25rem'}} src={image} alt = "dermo"/>
   </div>
     
    
  );
};

export default Image;