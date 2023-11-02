import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import Header from "./shared/Header";
import LeftsideNav from "./shared/LeftsideNav";
import Navbar from "./shared/Navbar";
import RightsideNav from "./shared/RightsideNav";
import Details from "./Details";

const Home = () => {
  const datas = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-5">
        <LeftsideNav></LeftsideNav>
        <div className="col-span-2">
          {datas.map((data) => (
            <Details key={data._id} data={data}></Details>
          ))}
        </div>
        <RightsideNav></RightsideNav>
      </div>
    </div>
  );
};

export default Home;
