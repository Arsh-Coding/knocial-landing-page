// ProductsBenefits.js
import React from "react";
import styles from "../Styles/ProductsBenefits.module.css";

const ProductsBenefits = () => {
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
          </div>
        ))}
      </div>
      <footer className={styles.footer}>
        <p>KNOICIAL</p>
      </footer>
    </div>
  );
};

export default ProductsBenefits;
