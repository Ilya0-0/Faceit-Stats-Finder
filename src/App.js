import React from "react";
import "./styles/global.scss";
import Input from "@components/UI/Input/Input";

const App = () => {
  const handleInputChange = (value) => {
    console.log(value);
  };

  return (
    <Input
      label="Enter nickname or Steam-link"
      id="nickname"
      onChange={handleInputChange}
    />
  );
};

export default App;
