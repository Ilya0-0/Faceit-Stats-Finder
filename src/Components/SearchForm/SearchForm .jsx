import React, { useState } from "react";
import Input from "@components/UI/Input/Input";

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue("");
    }
  };
  return (
    <Input
      label="enter nickname or steam-link"
      id="nickname"
      value={inputValue}
      onChange={(value) => {
        setInputValue(value);
      }}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchForm;
