import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { ProgressBar } from "../components/ProgressBar";

const Home: NextPage = () => {
  return (
    <Layout hasHeader>
      <div><ProgressBar page={'material'}/></div>
      <br />
      /new
      <br />
    </Layout>
  );
};

export default Home;
