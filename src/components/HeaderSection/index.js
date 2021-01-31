import React from "react";
import PropTypes from "prop-types";

const HeaderSection = () => {
  return (
    <div id="header-wrapper" className="bg-purple-500">
      <header className="bg-purple-500 lg:container mx-auto text-white py-5">
        <h2 className="text-xl">XYZ Clothing</h2>
      </header>
    </div>
  );
};

HeaderSection.propTypes = {};

export default HeaderSection;
