import { Map } from "immutable";
import React, { Component } from 'react';
import './App.css';
import CartEntry from "./CartEntry";
import CartTtl from "./CartTtl.jsx";
import Btn from "./Btn.jsx";

class CartBox extends Component {
   constructor( props ){
      super( props );
      this.state = {
         items : Map({
            mountaindew : Map({
                  item : "Mountain Dew",
                  quantity : 2,
                  price : 1.80
            }),
            desperados : Map({
               item: "Desperados",
               quantity: 6,
               price: 2
            }),
            jackdaniels : Map({
               item: "Jack Daniels",
               quantity: 4,
               price: 3.20
            })
      })};
      this.evChangeQuantity = this.evChangeQuantity.bind( this );
      this.evDeleteItem = this.evDeleteItem.bind( this );
      this.evClearTrans = this.evClearTrans.bind( this );
   }
   evChangeQuantity( value, key ){
      console.log( "u", this.state.items.size );
      if( this.state.items.size > 1 ){
         let updatedEntry = this.state.items.get(key).set("quantity", value);
         let newState = { items: this.state.items.set(key, updatedEntry) };
         console.log("newState is..", newState);
         this.setState(newState);
      }
   }
   evDeleteItem( key ){
      let newState = { items : this.state.items.delete( key )};
      console.log( newState );
      this.setState( newState );
   }
   evClearTrans(){
      let newState = { items : Map({})};
      console.log( newState );
      this.setState( newState );
   }
   render(){
      console.log( "In render...", "1-", this.state, "---", "2-" );
      let cartItems = this.state.items.size > 1 ? 
         this.state.items.valueSeq().map((entry, i) => {
         return (
            <CartEntry item={entry.get("item")}
               quantity={entry.get("quantity")}
               price={entry.get("price")}
               evChangeQuantity={this.evChangeQuantity}
               evDeleteItem={this.evDeleteItem}
               key={`entry${i}`} />
         )
      }) : false;
      return(
         <div className = "cartBoxContainer">
            <div className = "transContainer">
               { cartItems }
            </div>
            <div className = "cartFooter">
               <CartTtl trans = { this.state.items }/>
               <Btn classToAdd = "btn btn_clear"
                    value = "clear"
                    evOnClick = { this.evClearTrans }/>
            </div>
         </div>
      );
   }
  
}

export default CartBox;