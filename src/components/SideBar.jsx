import { GoPlus } from "react-icons/go";
import { sidebarItems } from "../constants";

function SideBar() {
    const isActive = "My Drive"
    return (
        <aside className="p-4 flex flex-col gap-5 h-screen area-sidebar">
            <div className="flex items-center gap-2">
                <img src="logo.png" className="w-9" />
                <h1 className="text-2xl">Drive</h1>
            </div>
            <button className="bg-white hover:bg-[#EDF1FA] transition-colors duration-200 flex items-center p-4 self-start rounded-2xl btn-shadow gap-2">
                <GoPlus size={"25px"} />
                <span className="text-sm font-semibold">New</span>
            </button>

            <div>
                <ul className="flex flex-col gap-2">
                    {sidebarItems.map(item => (
                        <li key={item.name}
                            className={`cursor-pointer flex items-center gap-4 px-3 py-2 rounded-2xl text-sm hover:bg-gray-300 ${isActive === item.name && "bg-active"}`}
                        >
                            <span>{item.icon}</span>
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default SideBar
