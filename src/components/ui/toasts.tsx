import toast from "react-hot-toast";

export function showSuccessToast(message: string) {
    toast.custom(
        <div className="bg-white p-4 rounded-sm shadow-lg border border-l-8 border-green-700 flex flex-row items-center gap-2">
            <span className="bg-green-400 w-5 h-5 rounded-full flex items-center justify-center">
                <span className="bg-green-900 w-2 h-2 rounded-full"></span>
            </span>
            <p className="text-sm">{message}</p>
        </div>
    )
}

export function showErrorToast(message: string) {
    toast.custom(
        <div className="bg-white p-4 rounded-sm shadow-lg border border-l-8 border-red-700 flex flex-row items-center gap-2">
            <span className="bg-red-400 w-5 h-5 rounded-full flex items-center justify-center">
                <span className="bg-red-900 w-2 h-2 rounded-full"></span>
            </span>
            <p className="text-sm">{message}</p>
        </div>
    )
}
