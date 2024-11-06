import React from "react";
import styles from "../Styles/ServerRentalModel.module.css";

const ServerRentalModel = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Server Rental Revenue Model</h1>
      <div className={styles.grid}>
        <div className={styles.section}>
          <h2>CLIENTS</h2>
          <ul>
            <li>
              Server Rental Income from Clients i.e. Freelancers, B2B, Mid Cap
              Companies, Small Enterprises & Enterprises.
            </li>
            <li>Approx. 4500-18000 INR (Per Unit Per Client)</li>
          </ul>
        </div>
        <div className={styles.kocial}>
          <h2>KNOCIAL</h2>
          <ul>
            <li>On Going Assets</li>
            <li>Building Assets (As per Client Requirements)</li>
            <li>Utilization Ratio 60:20:20</li>
            <li>
              Knocial : Distribution Network : End User (Rental Sharing Model)
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2>PARTNERS</h2>
          <ul>
            <li>One Time Asset Purchase</li>
            <li>Lease & Transfer Deed for 84 Months</li>
            <li>100 % Secure</li>
            <li>100 & Transparency</li>
            <li>Trust of Public Company</li>
            <li>AWS Driven Software</li>
            <li>KYC & Super Secure Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServerRentalModel;
