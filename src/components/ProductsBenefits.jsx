// ProductsBenefits.js
import React from "react";
import styles from "../Styles/ProductsBenefits.module.css";
import { useNavigate } from "react-router-dom";

const ProductsBenefits = () => {
  const navigate = useNavigate();
  const products = [
    {
      title: "BASIC",
      description: "512 GIGA BYTES",
      basePrice: "18,500 INR",
      taxInvoice: "21,830 INR",
      estimateRevenue: "0740.00 INR PM - PU",
    },
    {
      title: "STANDARD",
      description: "01 – 60 TERA BYTES",
      basePrice: "33,500 INR",
      taxInvoice: "39,530 INR",
      estimateRevenue: "1675.00 INR PM - PU",
    },
    {
      title: "PRO",
      description: "61 – 120 TERA BYTES",
      basePrice: "33,500 INR",
      taxInvoice: "39,530 INR",
      estimateRevenue: "1842.00 INR PM - PU",
    },
    {
      title: "ENTERPRISE",
      description: "120 + TERA BYTES",
      basePrice: "33,500 INR",
      taxInvoice: "39,530 INR",
      estimateRevenue: "2010.00 INR PM - PU",
    },
  ];
   const handleApplyClick = () => {
     navigate("/contact"); // Navigate to the contact page
   };
  return (
    <div className={styles.container}>
      <h1>Products & Benefits (Under P&A Model)</h1>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div>
              <strong>BASE PRICE | {product.basePrice}</strong>
            </div>
            <div className={styles.tax}>
              <span>TAX INVOICE | {product.taxInvoice}</span>
            </div>
            <div>
              <em>{product.estimateRevenue} (Estimate Revenue for 7 Years)</em>
            </div>
            <button class={styles.cssbuttonsiobutton} onClick={handleApplyClick}>
              Get started
              <div class={styles.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsBenefits;
