import React from "react";
import PropTypes from "prop-types";

const FooterSection = () => {
  return (
    <div id="footer-wrapper" className="bg-gray-800">
      <footer className="bg-gray-800 lg:container mx-auto text-white py-5">
        <h2 className="text-xl">Copyright. XYZ Clothing</h2>
        <p>This is a dummy project</p>
      </footer>
    </div>
  );
};

FooterSection.propTypes = {};

export default FooterSection;
