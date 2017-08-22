import React from "react";

const Btn = ({ classToAdd,
              value,
              evOnClick }) => {
   return <button className = { classToAdd }
                  onClick = {evOnClick}>{ value }</button>;
};

export default Btn;