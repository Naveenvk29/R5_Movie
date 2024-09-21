import notFound from "../assets/NotFound.gif";

const NotFound = () => {
  return (
    <div className="w-full h-full relative">
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
