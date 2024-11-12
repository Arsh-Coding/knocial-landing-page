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
        <button className={styles.button} onClick={handleApplyClick}>
          Apply Now
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsBenefits;
