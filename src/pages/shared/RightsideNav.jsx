import { NavLink } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineGoogle,
} from "react-icons/ai";
import { useContext } from "react";
import { authContext } from "../../Context_Provider/Provider";
const RightsideNav = () => {
  const { googleLogin } = useContext(authContext);

  const signGoogle = () => {
    googleLogin()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className=" ">
      {/* Login with section */}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-4">Login With</h1>
        <NavLink>
          <button
            onClick={signGoogle}
            className="btn btn-md btn-block mb-2 btn-outline hover:outline-blue-500 hover:outline hover:bg-white hover:text-blue-500"
          >
            <AiOutlineGoogle className="text-lg"></AiOutlineGoogle>Login With
            Google
          </button>
        </NavLink>
        <NavLink>
          <button className="btn btn-md btn-block btn-outline hover:outline-blue-500 hover:outline hover:bg-white hover:text-blue-500">
            <AiFillGithub className="text-lg"></AiFillGithub>
            Login With Github
          </button>
        </NavLink>
      </div>
      {/* Find Us section */}
      <div className="mb-5">
        <h1 className="text-xl font-bold mb-4">Find Us On</h1>
        <div className="flex items-center gap-2 p-4 border border-black rounded-t-lg">
          <AiFillFacebook></AiFillFacebook>
          <a href="">Facebook</a>
        </div>
        <div className="flex items-center gap-2 p-4 border-x border-black">
          <AiFillTwitterCircle></AiFillTwitterCircle>
          <a href="">Twitter</a>
        </div>
        <div className="flex items-center gap-2 p-4 border border-black rounded-b-lg">
          <AiFillInstagram></AiFillInstagram>
          <a href="">Instagram</a>
        </div>
      </div>
      {/* Q-zone */}
      <div className="bg-[#F3F3F3] p-4 rounded-md">
        <h1 className="text-xl font-bold mb-4 ">Q-Zone</h1>
        <img src="./src/assets/qZone1.png" alt="" />
        <img src="./src/assets/qZone2.png" alt="" />
        <img src="./src/assets/qZone3.png" alt="" />
      </div>
    </div>
  );
};

export default RightsideNav;
