import React from "react";
import MasterLayout from "../src/components/MasterLayout";

const IndexPage = () => {
  return (
    <MasterLayout>
      <div className="content-wrapper">
        <div className="lg:container mx-auto py-20">
          <h1>Welcome to XYZ Shopping</h1>
        </div>
      </div>
    </MasterLayout>
  );
};

export default IndexPage;
