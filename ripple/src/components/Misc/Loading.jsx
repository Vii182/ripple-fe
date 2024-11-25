const Loading = () => {
    return (
        <div className="absolute-top-10 mt-10 bg-transparent flex justify-center items-center h-full w-full">
            <div className="relative flex items-center justify-center">
                <div className="w-52 h-52 border-4 border-white-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="absolute text-white-500 font-bold text-xl animate-pulse">
                    Loading...
                </span>
            </div>
        </div>
    );
};

export default Loading;
