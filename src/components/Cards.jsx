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
          <p className="font-bold text-2xl px-2 pt-4">Appetizer </p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1606755456206-b25206cde27e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFwcGV0aXplcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className=" rounded-xl relative ">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Main dish </p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1572448910681-3341d74893d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFpbiUyMGRpc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className=" rounded-xl relative ">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Dessert</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className=" rounded-xl relative ">
        {/**overlay */}
        <div className="absolute w-full h-full bg-black/30 rounded xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Drinks </p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cards;
