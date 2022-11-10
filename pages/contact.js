import React from "react";
import { Navbar, Billing, Footer, Contact } from "../components";
import styles from "../styles/style";

const contact = () => {
  return (
    <div className="bg-primary w-full overflow-hidden text-white h-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} relative z-[10]`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Contact />
          <Billing />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default contact;
