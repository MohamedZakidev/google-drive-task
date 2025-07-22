import { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { CiGrid41 } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import DataView from "./DataView";
import TypeFilter from "./TypeFilter";
import FileDetails from "./fileDetails";

function DriveView() {
    const [viewStyle, setViewStyle] = useState("list")
    const [typeFilter, setTypeFilter] = useState('')
    const [showDetails, setShowDetails] = useState(false)
    const [detailsData, setdetailsData] = useState('')

    return (
        <div className="flex gap-4">

            <div className="bg-white p-5 w-full h-full rounded-2xl flex flex-col gap-4">
                {/* first row */}
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl">My Drive</h2>

                    <div className="flex items-center gap-4">
                        <div className="flex">
                            <button
                                className={`w-full flex justify-center border px-4 py-2 rounded-l-full ${viewStyle === 'list' ? 'bg-active' : ''}`}
                                onClick={() => setViewStyle('list')}
                            >
                                <IoIosMenu size={"20px"} />
                            </button>
                            <button
                                className={`w-full h-full flex justify-center px-4 py-2 rounded-r-full border ${viewStyle === 'grid' ? 'bg-active' : ''}`}
                                onClick={() => setViewStyle('grid')}
                            >
                                <CiGrid41 size={"20px"} />
                            </button>
                        </div>
                        <button
                            onClick={() => setShowDetails(prev => !prev)}
                        >
                            <AiOutlineExclamationCircle size={"25px"} />
                        </button>
                    </div>

                </div>
                {/*  */}

                {/* second row */}
                <TypeFilter typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
                <DataView
                    viewStyle={viewStyle}
                    typeFilter={typeFilter}
                    detailsData={detailsData}
                    setdetailsData={setdetailsData}
                />
            </div>
            {
                showDetails && (
                    <FileDetails detailsData={detailsData} />
                )
            }
        </div>
    )
}

export default DriveView
