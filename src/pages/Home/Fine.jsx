function Fine() {
  return (
    <div
      className="relative flex flex-col justify-center items-center gap-8 bg-gray-900 border border-gray-700 rounded-lg py-10 px-6 sm:px-10 w-9/10 sm:w-1/3 drop-shadow-[0_0_10px_rgba(0,0,255,0.9)] transition-shadow duration-300 hover:drop-shadow-[0_0_20px_rgba(0,0,255,1)]"
      style={{ height: "calc(100vh - 150px)" }}
    >
      <h2 className="text-red-500 font-bold text-center text-3xl">
        Over or Under-Estimation Penalty
      </h2>
      <p className="font-dosis leading-relaxed sm:leading-relaxed text-justify sm:text-center text-white text-lg sm:text-2xl">
        If the state government overestimates or underestimates the electricity
        demand forecast by <span className="text-red-500">1%</span>, they are required to pay a fine of <span className="text-red-500">₹12.56 lakhs </span> 
        per hour to the central government.
      </p>
    </div>
  );
}

export default Fine;
