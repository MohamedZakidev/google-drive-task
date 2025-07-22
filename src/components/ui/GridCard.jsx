
function GridCard({ item, detailsData, setdetailsData }) {
    return (
        <div
            className={`py-3 px-2 max-w-[400px] flex flex-col gap-2 bg-[#E9EEF6] rounded-lg min-h-[220px]
            ${detailsData.name === item.name ? 'bg-active' : ''}
            `}
            onClick={() => setdetailsData(item)}
        >
            <div className="flex items-center gap-1 line-clamp-1">
                <span>{item.icon}</span>
                <p>{item.name}</p>
            </div>
            <img
                src="/image.png"
                alt="preview"
                className="cursor-pointer rounded-lg w-full h-full object-cover"
            />
        </div>
    )
}

export default GridCard
