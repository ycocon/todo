import React from "react";

const Form = () => {
  return (
    <div className="bg-blue-400 col-span-1 min-[320px]:max-md:col-span-3 h-screen">
      <div className="bg-slate-400 flex flex-col">
        <p className="">Add Todo</p>

        <div>
          <label htmlFor="todo">Todo name</label>
          <input
            type="text"
            className="block border-solid border border-black"
          />
        </div>
        <div>
          <label htmlFor="deadline">Todo deadline</label>
          <input
            type="date"
            className="block border-solid border border-black"
          />
        </div>

        <button className="text-center bg-red-100 w-2/6">Add task</button>
      </div>
    </div>
  );
};

export default Form;
