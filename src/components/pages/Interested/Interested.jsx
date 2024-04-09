import { useState, useEffect } from "react";
import Progress from "../../Shared/Progress";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";


const Interested = () => {
    const [select1, setSelect1] = useState(true);
    const [select2, setSelect2] = useState(true);
    const [select3, setSelect3] = useState(true);
    const [select4, setSelect4] = useState(true);
    const [select5, setSelect5] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        // Enable the button if any of the select options are false
        if (!select1 || !select2 || !select3 || !select4 || !select5) {
            setIsButtonDisabled(false);
        }
        else {
            setIsButtonDisabled(true);
        }
    }, [select1, select2, select3, select4, select5, isButtonDisabled]);

    const handleSelect1 = () => {
        setSelect1(!select1);
    };
    const handleSelect2 = () => {
        setSelect2(!select2);
    };
    const handleSelect3 = () => {
        setSelect3(!select3);
    };
    const handleSelect4 = () => {
        setSelect4(!select4);
    };
    const handleSelect5 = () => {
        setSelect5(!select5);
    };


    return (
        <div>
            {/* section header option */}
            <div className="w-[80%] mx-auto flex items-center space-x-4 mt-5">
                <Link to={'/'}>
                    <div className="">
                        <IoIosArrowBack className=" text-xl font-bold" />
                    </div>
                </Link>
                <div className="flex-1">
                    <Progress value={30} />
                </div>
            </div>
            {/* headline */}
            <div className="mt-5">
                <h2 className="text-3xl font-bold text-black text-center mb-2">Which describes you best</h2>
                <p className="text-center text-sm">This will help us personalize your experience</p>
                {/* describes selector section */}
                <div className=" flex flex-col items-center mt-5">
                    {/* skill 1 */}
                    <div className={select1 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect1}>
                        <h1 className="text-center text-black">learning specific skills to advance my career</h1>
                    </div>
                    {/* skill 2 */}
                    <div className={select2 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect2}>
                        <h1 className="text-center text-black">Exploring new topics I am interested in</h1>
                    </div>
                    {/* skill 3 */}
                    <div className={select3 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect3}>
                        <h1 className="text-center text-black">Refreshing my math Foundation</h1>
                    </div>
                    {/* skill 4 */}
                    <div className={select4 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect4}>
                        <h1 className="text-center text-black">Exercising to my brain stay sharp</h1>
                    </div>
                    {/* skill 5 */}
                    <div className={select5 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect5}>
                        <h1 className="text-center text-black">Something else</h1>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <button className="bg-black text-white font-serif rounded-md font-bold btn px-7 py-2" disabled={isButtonDisabled}>
                        <Link to={'/place'}>Continue</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Interested;