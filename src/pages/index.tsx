import { FC } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import HomeContainer from "@/containers/HomeContainer";
import { BaseApi } from "@/plugins/api/BaseApi";

export const getServerSideProps: GetServerSideProps<{ name: string }> = async () => {
  const baseApi = new BaseApi();
  const response = await baseApi.get("/hello");
  const data = await response.json();

  return {
    props: {
      name: data.name,
    },
  };
};

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ name }) => {
  return <HomeContainer name={name} />;
};

export default Home;
