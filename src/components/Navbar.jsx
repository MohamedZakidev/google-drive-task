import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import SearchBar from "./ui/searchBar";

function Navbar() {
    return (
        <nav className="area-navbar ">
            <div className="flex items-center justify-between gap-4 py-2 pr-4">
                <SearchBar />
                <div className="flex items-center gap-4">
                    <GoQuestion size={"25px"} />
                    <IoSettingsOutline size={"25px"} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
