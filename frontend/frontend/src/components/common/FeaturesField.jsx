const FeaturesField= ({
    icon,
    title,
    children
})=>{
    return(
        <div className=" flex bg-[#12203a]/80  px-5 py-4 my-8 hover:border-violet-500 border border-transparent transition-all duration-300">
            <div className="  text-violet-500 text-xl">
                {icon}
            </div>
            <div className=" flex flex-1 flex-col justify-center">
                <span className=" text-lg font-semibold tracking-wide text-gray-400">{title}</span>
                <span className=" text-sm font-normal py-2"> {children}</span>
            </div>
        </div>
    )
}

export default FeaturesField;