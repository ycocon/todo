import React from "react";
import Items from "../components/Items";
import Form from "../components/Form";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-0">
      <Items />
      <Form />
    </div>
  );
};

export default Home;
