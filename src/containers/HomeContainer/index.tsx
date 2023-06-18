import React from "react";
import BaseLayout from "@/layouts/BaseLayout";

const HomeContainer: React.FC = () => {
  return (
    <BaseLayout
      title="Create Next App"
      description="The most important thing is how the snippet looks."
      image="/favicon.ico"
    >
      <h1>Main</h1>
    </BaseLayout>
  );
};

export default HomeContainer;
