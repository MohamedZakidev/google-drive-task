
function ListView({ filteredFilesData, detailsData, setdetailsData }) {
    return (
        <ul className="flex flex-col">
            <li className="grid grid-cols-5 list-item-view">
                <p className="col-span-2 primary-paragraph">Name</p>
                <p className="primary-paragraph">Owner</p>
                <p className="primary-paragraph">Data modified</p>
                <p className="primary-paragraph">File size</p>
            </li>
            {filteredFilesData.map(item => (
                <li key={item.name}
                    className={`cursor-pointer hover:bg-gray-300 grid grid-cols-5 list-item-view
                                    ${detailsData.name === item.name ? 'bg-active' : ''}
                                `}
                    onClick={() => setdetailsData(item)}
                >
                    <p className="col-span-2 primary-paragraph flex items-center gap-2"><span>{item.icon}</span>{item.name}</p>
                    <p className="primary-paragraph">{item.owner}</p>
                    <p className="primary-paragraph">{item.dateModified}</p>
                    <p className="primary-paragraph">{item.size}</p>
                </li>
            ))}
        </ul>
    )
}

export default ListView
