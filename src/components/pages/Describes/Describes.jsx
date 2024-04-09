import { useState, useEffect } from "react";
import Progress from "../../Shared/Progress";
import { Link } from "react-router-dom";

const Describes = () => {

    const [select1, setSelect1] = useState(true);
    const [select2, setSelect2] = useState(true);
    const [select3, setSelect3] = useState(true);
    const [select4, setSelect4] = useState(true);
    const [select5, setSelect5] = useState(true);
    const [select6, setSelect6] = useState(true);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        // Enable the button if any of the select options are false
        if (!select1 || !select2 || !select3 || !select4 || !select5 || !select6) {
            setIsButtonDisabled(false);
        }
        else {
            setIsButtonDisabled(true);
        }
    }, [select1, select2, select3, select4, select5, select6, isButtonDisabled]);

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
    const handleSelect6 = () => {
        setSelect6(!select6);
    };

    return (
        <div>
            {/* section header option */}
            <div className="w-[80%] mx-auto mt-5">
                <Progress value={15} />
            </div>
            {/* headline */}
            <div className="mt-5">
                <h2 className="text-3xl font-bold text-black text-center mb-2">Which describes you best</h2>
                <p className="text-center text-sm">This will help us personalize your experience</p>
                {/* describes selector section */}
                <div className=" flex flex-col items-center">
                    <div className={select1 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect1}>
                        <h1 className="text-center text-gray-500"> <span className=" text-black">Student</span> or son to be enrolled</h1>
                    </div>
                    <div className={select2 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect2}>
                        <h1 className="text-center text-gray-500"><span className=" text-black">Processional </span>pursing a career</h1>
                    </div>
                    <div className={select3 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect3}>
                        <h1 className="text-center text-gray-500"><span className=" text-black">Parent </span>of a school-age child</h1>
                    </div>
                    <div className={select4 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect4}>
                        <h1 className="text-center text-black">Life long lerner</h1>
                    </div>
                    <div className={select5 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect5}>
                        <h1 className="text-center text-black">Teacher</h1>
                    </div>
                    <div className={select6 ? `w-[460px] text-black bg-white btn mx-auto border cursor-pointer h-12 mt-3` : `w-[460px] text-black bg-white btn mx-auto border border-yellow-500 btn-warning cursor-pointer h-12 mt-3`} onClick={handleSelect6}>
                        <h1 className="text-center text-black">Other</h1>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <button className="bg-black text-white font-serif rounded-md font-bold btn px-7 py-2" disabled={isButtonDisabled}>
                        <Link to={'/interested'}>
                            Continue
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Describes;
