import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Progressbar } from "../components/Progressbar";

const Home: NextPage = () => {
  return (
    <Layout hasHeader>
      <div><Progressbar page={'naming'}/></div>
      <br />
      /new
      <br />
    </Layout>
  );
};

export default Home;
