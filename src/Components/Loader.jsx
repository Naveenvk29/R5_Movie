import loader from "../assets/loader.gif";
const Loader = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[#161519]">
      <img className="w-[48%] " src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
