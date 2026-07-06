const SearchField= ({
    icon,
    title,
    children
})=>{
    return(
        <div className=" flex items-center gap-4 bg-[#12203a]/80 rounded-2xl px-5 py-4 hover:border-violet-500 border border-transparent transition-all duration-300">
            <div className=" text-violet-500 text-xl">
                {icon}
            </div>
            <div className=" flex flex-1 flex-col">
                <span className=" text-xs uppercase tracking-wide text-gray-400">{title}</span>
                {children}
            </div>
        </div>
    )
}

export default SearchField;