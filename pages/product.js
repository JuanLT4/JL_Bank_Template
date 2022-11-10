import React from "react";
import { Testimonials, CardDeal, Navbar, Billing, Footer } from "../components";
import styles from "../styles/style";

const product = () => {
  return (
    <div className="bg-primary w-full overflow-hidden text-white h-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
  
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CardDeal />
          <Testimonials />
          <Billing />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default product;
