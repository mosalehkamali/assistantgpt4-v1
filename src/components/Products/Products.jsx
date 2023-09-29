import React, { useEffect, useState } from "react";
import "./Products.css";
import PricingPlanCart from "./PricingPlanCart/PricingPlanCart";
import { Link } from "react-router-dom";

function Products() {
  const token = JSON.parse(localStorage.getItem("A-gpt4Token"));
  const [path, setPath] = useState();

  useEffect(() => {
    if (token !== null) {
      fetch("http://assistantgpt4.com/jwt/verify/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token.token }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.code === "token_not_valid") {
            window.location = "/Registration";
          } else {
            setPath("/ChatExtra");
          }
        });
    } else {
      setPath("/Registration");
    }
  }, []);

  return (
    <div className="Products">
      <div className="extraGpt">
        <div className="extaClip">
          <h4 className="extra-title">Extra GPT</h4>
          <span className="extraPlan">
            دسترسی راحت و رایگان به Chat GPT4 ،با درک دو زبانه فارسی و اینگلیسی،
            بدون نیاز به شماره تلفن.
          </span>
        </div>
        <Link to={path} className="extraBtn">
          <p>استفاده رایگان</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </Link>
      </div>
      <div className="pricingPlans">
        <PricingPlanCart
          path="/"
          color="#00D4FF"
          planTitle="Super GPT"
          price="290,000 T"
          attributes={[
            "دسترسی به چت جی پی تی",
            "دسترسی به چت جی پی تی",
            "دسترسی به چت جی پی تی",
            "دسترسی به چت جی پی تی",
          ]}
        ></PricingPlanCart>
        <PricingPlanCart
          path="/"
          color="#252384"
          planTitle="Hyper GPT"
          price="500,000 T"
          attributes={[
            "دسترسی به چت جی پی تی",
            "دسترسی به چت جی پی تی",
            "دسترسی به چت جی پی تی",
            "دسترسی به چت جی پی تی",
          ]}
        ></PricingPlanCart>
        <PricingPlanCart
          path="/"
          color="#FFA600"
          planTitle="Assistant GPT"
          price="890,000 T"
          attributes={[
            "دسترسی به چت جی پی تی",
            "دسترسی به چت جی پی تی",
            "دسترسی به چت جی پی تی",
            "دسترسی به چت جی پی تی",
          ]}
        ></PricingPlanCart>
      </div>
    </div>
  );
}

export default Products;
