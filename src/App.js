import React, { useState } from "react";
import "./styles/global.scss";
import { useFetching } from "@hooks/useFetching";
import PostService from "@api/PostService";
import SearchForm from "@components/SearchForm/SearchForm ";
import Loader from "@components/UI/Loader/Loader";
import PlayerCard from "@components/PlayerCard/PlayerCard";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [player, setPlayer] = useState(null);
  const [fetchUserStats, isLoading, error] = useFetching(async (nickname) => {
    const response = await PostService.getUserStatsByNickname(nickname);
    setUserData(response.data);
    const gameData = response.data.games["cs2"];
    setPlayer({
      nickname: response.data.nickname,
      avatar: response.data.avatar,
      country: response.data.country,
      skillLevel: gameData.skill_level,
      faceitElo: gameData.faceit_elo,
      gamePlayerName: gameData.game_player_name,
      verified: response.data.verified,
      activatedAt: response.data.activated_at,
    });
  });

  return (
    <>
      <SearchForm onSubmit={fetchUserStats} />
      {isLoading && <Loader size={100} />}
      {error ? (
        <p>Error: {error}</p>
      ) : (
        userData && <PlayerCard playerProp={player} />
      )}
    </>
  );
};

export default App;
