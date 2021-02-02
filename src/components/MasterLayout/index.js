import React from "react";
import PropTypes from "prop-types";
import Header from "../HeaderSection";
import Footer from "../FooterSection";

const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

MasterLayout.propTypes = {
  children: PropTypes.element,
};

export default MasterLayout;
