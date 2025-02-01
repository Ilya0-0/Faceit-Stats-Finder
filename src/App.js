import React, { useState } from "react";
import "./styles/global.scss";
import Select from "@components/UI/Select/Select";

const App = () => {
  const games = ["CS:GO", "CS2"];
  const [selectedGame, setSelectedGame] = useState(games[0]);

  const handleSelectChange = (game) => {
    setSelectedGame(game);
  };

  return (
    <Select
      label="Выбрать игру:"
      options={games}
      defaultValue={selectedGame}
      onChange={handleSelectChange}
    />
  );
};

export default App;
