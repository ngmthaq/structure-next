import React from "react";
import HomeContainer from "@/containers/HomeContainer";
import { BaseApi } from "@/plugins/api/BaseApi";

const Home: React.FC = () => {
  return <HomeContainer />;
};

export default Home;

export const getServerSideProps = async () => {
  const baseApi = new BaseApi();
  const response = await baseApi.get("/hello");
  console.log(response);
  return { props: { name: "Thang" } };
};
