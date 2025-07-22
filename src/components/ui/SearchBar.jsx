import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { filesData } from "../../constants";

function SearchBar() {
    const [query, setQuery] = useState('')
    const [showResults, setShowResults] = useState(false);
    const containerRef = useRef(null);

    const filtered = filesData.filter(file =>
        file.name.toLowerCase().includes(query.toLowerCase())
    );

    // Hide modal on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    // 

    return (
        <div
            className="relative z-50 w-full max-w-[700px] bg-white rounded-3xl shadow-lg"
            ref={containerRef}
        >

            <div className="relative">
                <IoSearchOutline size={"18px"} className="absolute top-0 bottom-0 my-auto left-4" />
                <input
                    type="text"
                    placeholder="Search in drive"
                    name="search"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        setShowResults(e.target.value.length > 0)
                    }
                    }
                    className={`bg-[#E9EEF6] py-3 px-8 w-full rounded-3xl indent-4 focus:bg-white focus:outline-0 
                                ${showResults ? 'shadow-none bg-white' : 'shadow-md'}
                `}
                />
            </div>

            {showResults && filtered.length > 0 && (
                <div className="bg-white rounded-b-3xl border-t border-gray-300 py-3">
                    {filtered.map((file, index) => (
                        <div
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                alert(`You selected: ${file.name}`);
                                setQuery(file.name);
                                setShowResults(false);
                            }}
                        >
                            {file.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBar