import { filesData } from "../constants"
import GridView from "./GridView"
import ListView from "./ListView"

function DataView({ viewStyle, typeFilter, detailsData, setdetailsData }) {

    const filteredFilesData = typeFilter ?
        filesData.filter(item => item.extension === typeFilter) :
        filesData

    return (
        filteredFilesData.length > 0 ? (
            <div className="overflow-y-auto h-[74vh]">
                {viewStyle === 'list' && (
                    <ListView
                        detailsData={detailsData}
                        setdetailsData={setdetailsData}
                        filteredFilesData={filteredFilesData}
                    />
                )}
                {viewStyle === 'grid' && (
                    <GridView
                        detailsData={detailsData}
                        setdetailsData={setdetailsData}
                        filteredFilesData={filteredFilesData}
                    />
                )}
            </div>
        ) :
            (
                <div className="flex justify-center items-center h-full">
                    <h3 className="text-gray-700 text-2xl">Add Files to your drive !</h3>
                </div>
            )
    )
}

export default DataView
