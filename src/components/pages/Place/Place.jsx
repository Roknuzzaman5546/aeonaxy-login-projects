/* eslint-disable react/no-unescaped-entities */
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Progress from "../../Shared/Progress";

const Place = () => {
    return (
        <div>
            {/* section header option */}
            <div className="w-[80%] mx-auto flex items-center space-x-4 mt-5">
                <Link to={'/interested'}>
                    <div className="">
                        <IoIosArrowBack className=" text-xl font-bold" />
                    </div>
                </Link>
                <div className="flex-1">
                    <Progress value={45} />
                </div>
            </div>
            {/* body section */}
            <div className=" flex items-center w-[80%] mx-auto mt-2 justify-center">
                <img src="asdoij" className=" w-1/2 h-[450px]" alt="" />
                <div className=" text-left w-1/2">
                    <h2 className=" text-2xl font-bold text-black">You are in the right place</h2>
                    <p className="text-black mt-2">Brilliant Gates you hands on to help improve your professional skills and knowledge you'll interest with concepts and solve UN problems in math science and computer science</p>
                </div>
            </div>
        </div>
    );
};

export default Place;