export const Contact = () => {
  return (
    <div className="py-10 container">
      <div className="p-7 md:p-14 rounded-3xl flex gap-5 flex-col md:flex-row md:items-center bg-black">
        <h1 className="text-white text-balance text-3xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="block w-full">
          <input
            type="text"
            className="block w-full py-2 rounded-3xl px-4 bg-white border-none outline-none"
            required
            placeholder="Enter Your Email Address"
          />
          <button className="capitalize mt-5  block w-full py-2 rounded-3xl bg-white text-black">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};
