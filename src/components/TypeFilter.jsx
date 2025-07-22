import { useState } from "react"
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io"
import FilterModal from "./ui/FilterModal"

function TypeFilter({ typeFilter, setTypeFilter }) {
    const [isModalVisible, setIsModalVisible] = useState(false)

    function showModal() {
        setIsModalVisible(prev => !prev)
    }

    return (
        <div className="relative">
            <div className="flex items-center gap-1">
                <button
                    className={`filter-btn primary-paragraph ${typeFilter ? '!bg-blue-200 !border-0' : ''}`}
                    onClick={showModal}
                >
                    <span >{typeFilter || "Type"}</span>
                    <span className="ml-2"><IoMdArrowDropdown /></span>
                </button>
                {typeFilter &&
                    <button
                        className="bg-active rounded-r-full py-1 px-2"
                        onClick={() => setTypeFilter('')}
                    >
                        <IoMdClose size={"20px"} />
                    </button>
                }
            </div>
            {isModalVisible &&
                <FilterModal setTypeFilter={setTypeFilter} setIsModalVisible={setIsModalVisible} />
            }
        </div>
    )
}

export default TypeFilter
