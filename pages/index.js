import React from "react";
import MasterLayout from "../src/components/MasterLayout";
import { useRouter } from "next/router";

const IndexPage = () => {
  const router = useRouter();
  return (
    <MasterLayout>
      <div className="content-wrapper">
        <div className="lg:container mx-auto py-20">
          <h1>Welcome to XYZ Shopping</h1>
          <button
            className="p-2 rounded mt-5 bg-purple-700  text-white"
            onClick={() => router.push("/products")}
          >
            View Products
          </button>
        </div>
      </div>
    </MasterLayout>
  );
};

export default IndexPage;
