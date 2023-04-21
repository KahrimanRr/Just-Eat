import React from "react";

const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-4 gap-6">
      {" "}
      {/** one column 3 rows for devices */}
      {/*/ Cards*/}
      <div className=" rounded-xl relative ">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">sun is out </p>
          <p className="px-2">through</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
      </div>
      <div className=" rounded-xl relative ">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">sun is out </p>
          <p className="px-2">through</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
      </div>
      <div className=" rounded-xl relative ">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">sun is out </p>
          <p className="px-2">through</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
      </div>
      <div className=" rounded-xl relative ">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">sun is out </p>
          <p className="px-2">through</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cards;
