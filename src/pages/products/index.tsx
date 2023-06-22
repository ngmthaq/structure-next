import AnchorLink from "@/components/AnchorLink";
import React from "react";

const Products: React.FC = () => {
  return (
    <div>
      <h1>Products</h1>
      <AnchorLink path="/" loading>
        Homepage
      </AnchorLink>
    </div>
  );
};

export default Products;
