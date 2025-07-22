import { typeFilterItems } from "../../constants"

function FilterModal({ setTypeFilter, setIsModalVisible }) {

    function handleTypeFilter(item) {
        setTypeFilter(item.value)
        setIsModalVisible(false)
    }

    return (
        <div className="w-50 rounded-xl btn-shadow z-50 absolute bg-white">
            <ul className="flex flex-col gap-2 py-3 w-full">
                {typeFilterItems.map(item => (
                    <li key={item.name}
                        className="cursor-pointer px-4 py-2 flex items-center gap-4 w-full hover:bg-gray-300"
                        onClick={() => handleTypeFilter(item)}
                    >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterModal
