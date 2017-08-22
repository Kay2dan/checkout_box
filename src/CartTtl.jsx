import React from "react";

const CartTtl = ({ trans }) => {
   let ttlPrice = 0;
      trans.forEach(( entry ) => {
         ttlPrice += ( entry.get("quantity") * entry.get("price"))
   });
   return(
      <div className = "cartTtl">{ ttlPrice }</div>
   );
};

export default CartTtl;