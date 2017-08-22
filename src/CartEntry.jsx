import React from "react";

const CartEntry = ({ item,
                     quantity,
                     evChangeQuantity,
                     price,
                     evDeleteItem }) => {
   let stateObjKey = item.toLowerCase()
                         .replace(/\s+/g, "");
   return(
      <div className = "">
         <span className = "">{ item }</span>
         <input className = ""
                type = "text"
                value = { quantity }
                onChange = {(e) => { evChangeQuantity( e.target.value, stateObjKey )}}/>
         <span className = "ttlItemPrice">{ quantity * price }</span>
         <span className = "btnDelete"
               onClick = {() => evDeleteItem( stateObjKey )}>
            x
         </span>
      </div>
   );
};

export default CartEntry;