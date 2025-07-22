import GridCard from "./ui/GridCard"

function GridView({ detailsData, setdetailsData, filteredFilesData }) {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(310px,100%),_1fr))] gap-4">
            {filteredFilesData.map(item => (
                <GridCard
                    key={item.name}
                    item={item}
                    detailsData={detailsData}
                    setdetailsData={setdetailsData}
                />
            ))}
        </div>
    )
}

export default GridView
