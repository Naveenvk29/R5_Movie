import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useParams,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { asyncloadperson } from "../../redux/actions/personAction";
import { removePerson } from "../../redux/features/PersonSlice";
import Loader from "../../Components/Loader";
import HorizontalCards from "../Home/HorizontalCards";
const PersonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // console.log(info.images.length);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => dispatch(removePerson());
  }, [id]);
  return info ? (
    <div className=" relative px-[5%] w-screen overflow-y-auto">
      <nav className=" w-full text-zinc-200 flex gap-10 text-2xl my-5 ">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556cd] mr-5 ri-arrow-left-line"
        ></Link>
      </nav>
      <div className="w-full flex ">
        {/*  */}
        <div className="w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[50vh] object-cover rounded-xl"
            src={`https://image.tmdb.org/t/p/original${info.detail.profile_path}`}
            alt=""
          />
          {/* <h1 className="text-2xl  font-bold mt-3 ">
            {info.title ||
              info.name ||
              info.original_name ||
              info.original_title}
          </h1> */}
          <hr className="mt-10 mb-3  border border-zinc-600" />
          <div className="text-xl flex gap-x-10">
            <a
              href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
              target="_blank"
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
              target="_blank"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
              target="_blank"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href={`https://en.wikipedia.org/wiki/${info.externalid.wikidata_id}`}
              target="_blank"
            >
              <i className="ri-twitter-x-line"></i>
            </a>
          </div>
          <div>
            <h1 className="text-xl font-semibold underline my-5">
              Personal Info
            </h1>
            <p className="text-gray-500 my-2 text-lg font-semibold">
              Gender: {info.detail.gender === 2 ? "Male" : "Female"}
            </p>
            <p className="text-gray-500 my-2 text-lg font-semibold">
              Birthday: {info.detail.birthday}
            </p>
            <p className="text-gray-500 my-2 text-lg font-semibold">
              Place of Birth: {info.detail.place_of_birth}
            </p>
            <p className="text-gray-500 my-2 text-lg font-semibold">
              Known For: {info.detail.known_for_department}
            </p>
            <p className="text-gray-500 my-2 text-lg font-semibold">
              Death Day:{" "}
              {info.detail.deathday === null
                ? "Still Alive"
                : info.detail.deathday}
            </p>
            <p className="text-gray-500 my-5 text-lg font-semibold">
              Known as:
              {info.detail.also_known_as.join(",")}
            </p>
          </div>
        </div>
        <div className="w-[70%] ml-[5%] text-zinc-400 ">
          <h1 className="text-6xl font-black my-1 ">{info.detail.name}</h1>
          <h1 className="text-xl font-black my-1 underline ">Biography:</h1>
          <p className="text-lg font-medium text">{info.detail.biography}</p>
          <h1 className="text-xl font-black my-1 underline ">Credits</h1>

          <HorizontalCards data={info.movieCredits} />
          <HorizontalCards data={info.tvCredits || []} />
        </div>
      </div>
      {info.images.length > 0 && (
        <div className="w-full flex gap-5 mt-10 overflow-x-auto">
          {info.images.map((img) => (
            <img
              key={img.file_path}
              className="w-[20%] h-[20%] object-cover rounded-xl"
              src={`https://image.tmdb.org/t/p/original${img.file_path}`}
              alt=""
            />
          ))}
        </div>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default PersonDetail;
