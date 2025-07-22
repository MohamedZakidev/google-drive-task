
function FileDetails({ detailsData }) {
    return (
        <div className="w-80 rounded-2xl bg-white">
            {detailsData ? (
                <>
                    <div className="border-b border-gray-300">
                        <div className="p-5 flex items-center justify-center gap-3">
                            <span>{detailsData.icon}</span>
                            <h4 className="line-clamp-1 font-semibold">{detailsData.name}</h4>
                        </div>
                    </div>

                    <div className="p-5">
                        <h5>{detailsData.details}</h5>
                    </div>
                </>
            ) : (
                <div className="text-center p-5">
                    <p>Select an item to see the details</p>
                </div>
            )
            }

        </div>

    )
}

export default FileDetails
