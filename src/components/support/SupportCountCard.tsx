const SupportCountCard = ({title, count}: {title: string, count: number}) => {
    return ( 
        <div className="w-[252px] flex flex-col rounded-xl border border-gray-300 p-0">
            <div className="bg-gray-100 h-[42px] rounded-t-xl flex items-center p-4">
                <h1 className="text-sm text-gray-900 font-semibold">{title}</h1>
            </div>
            <div className="border h-[88px] border-gray-300 rounded-xl flex items-center p-4 bg-white">
            <p className="text-4xl text-gray-900 font-bold">{count}</p>
            </div>
        </div>
     );
}
 
export default SupportCountCard;