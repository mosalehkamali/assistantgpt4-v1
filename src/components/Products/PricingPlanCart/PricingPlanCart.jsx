import React from "react";
import "./PricingPlanCart.css";
import { Link } from "react-router-dom";

function PricingPlanCart(props) {
  const clipColor = {
    backgroundColor: props.color,
  };
  const attributes = props.attributes
  return (
    <div className="PricingPlanCart">
      <div className="priceClip" style={clipColor}></div>
      <div className="priceCartHeader">
        <h4 className="plan-title">
          {props.planTitle}
        </h4>
        <span className="plan-price">
          {props.price}
        </span>
      </div>
      <div className="plan-attributes">
        {attributes.map((attribute)=>{
          return (<p>{attribute}</p>)
        })}
      </div>
      <Link className="buyingBtn" to={props.path}>خرید</Link>
    </div>
  );
}

export default PricingPlanCart;
