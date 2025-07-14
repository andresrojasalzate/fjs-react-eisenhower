
export default function Matrix() {

    return (
        <>
            <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_1fr_1fr] gap-4">
                <div></div>
                <p className="text-center">Urgent</p>
                <p className="text-center">Not urgent</p>
                <p className="rotate-50">Important</p>
                <div className="min-w-[220px] min-h-[220px] bg-green-500 rounded-xl"></div>
                <div className="min-w-[220px] min-h-[220px] bg-sky-500/100"></div>
                <p>Not important</p>
                <div className="min-w-[220px] min-h-[220px] bg-red-500 rounded-xl"></div>
                <div className="min-w-[220px] min-h-[220px] bg-gray-500 rounded-xl"></div>
            </div>
        </>
    )
}