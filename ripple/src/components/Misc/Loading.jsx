const Loading = () => {
  return (
    <div className="absolute-top-10 bg-transparent flex justify-center items-center h-full w-full">
      <div className="relative flex items-center justify-center">
        <div className="w-32 h-32 border-4 border-lime-500 border-t-transparent rounded-full animate-spin"></div>
        <span className="absolute text-lime-500 font-bold text-lg animate-pulse">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
