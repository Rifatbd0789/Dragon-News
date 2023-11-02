import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-4">
      <button className="btn-sm btn-secondary font-bold">Latest</button>
      <Marquee speed={100} pauseOnHover={true}>
        <p className="font-bold">
          Match Highlights: Brazil vs Argentina — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
        <p className="font-bold">
          Match Highlights: Brazil vs Germany — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
};

export default Slider;
