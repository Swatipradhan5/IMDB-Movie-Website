export default function Pagination({pageNo, handlePrev, handleNext}){

    return(
        <div className="flex justify-center items-center m-5 p-4 gap-5 font-bold text-xl">
            <div onClick={handlePrev} className="hover:cursor-pointer"><i class="fa-solid fa-chevron-left"></i></div>
            <div className=" border border-cyan-300 rounded px-4 py-3 text-cyan-600">{pageNo}</div>
            <div onClick={handleNext} className="hover:cursor-pointer"><i class="fa-solid fa-chevron-right"></i></div>
        </div>
    )

}