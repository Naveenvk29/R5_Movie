import { Link, useNavigate } from "react-router-dom";
import notFound from "../assets/NotFound.gif";

const NotFound = () => {
  const { navigate } = useNavigate();
  return (
    <div className="w-full h-full relative">
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-[2vw] right-[7vw] text-3xl hover:text-[#6556cd] mr-5 ri-close-line"
      ></Link>
      <img
        className="w-[100vw] h-[100vh] object-cover"
        style={{ backgroundColor: "#161519" }}
        src={notFound}
        alt=""
      />
    </div>
  );
};

export default NotFound;
