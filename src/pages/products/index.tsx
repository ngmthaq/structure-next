import { FC } from "react";
import AnchorLink from "@/components/AnchorLink";

const Products: FC = () => {
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
