import toast from "react-hot-toast";

export function showSuccessToast(title: string, message: string) {
    toast.custom(
        <div className="bg-white w-[470px] p-4 rounded-sm shadow-lg border border-l-8 border-green-700 flex flex-row items-start gap-2">
            <span className="bg-green-400 w-[24px] h-[24px] rounded-full inline-flex items-center justify-center">
                <span className="bg-green-900 w-2 h-2 rounded-full"></span>
            </span>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">{title}</p>
                <p className="text-sm text-wrap">{message}</p>
            </div>
        </div>
    )
}

export function showErrorToast(title: string, message: string) {
    toast.custom(
        <div className="bg-white p-4 rounded-sm shadow-lg border border-l-8 border-red-700 flex flex-row items-center gap-2">
            <span className="bg-red-400 w-5 h-5 rounded-full flex items-center justify-center">
                <span className="bg-red-900 w-2 h-2 rounded-full"></span>
            </span>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">{title}</p>
                <p className="text-sm text-wrap">{message}</p>
            </div>
        </div>
    )
}
