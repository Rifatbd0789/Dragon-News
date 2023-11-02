import { useParams } from "react-router-dom";
import Header from "./shared/Header";
import Navbar from "./shared/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h1>this is news details</h1>
      <p>{id}</p>
    </div>
  );
};

export default News;
