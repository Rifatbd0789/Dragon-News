import moment from "moment";
import img1 from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="text-center space-y-2">
      <img className="mx-auto" src={img1} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <div>{moment().format("dddd, MMMM D, YYYY")}</div>
    </div>
  );
};

export default Header;
