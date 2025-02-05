import React, { useState } from "react";
import "./styles/global.scss";
import styles from "./app.module.scss";
import Header from "@components/Header/Header";
import BackgroundSection from "@components/UI/BackgroundSection/BackgroundSection";
import BackgroundSectionImg from "@assets/grey-geometrical-shapes-background.jpg";
import StatBox from "@components/UI/StatBox/StatBox";
import { useFetching } from "@hooks/useFetching";
import PostService from "@api/PostService";
import SearchForm from "@components/SearchForm/SearchForm ";
import Loader from "@components/UI/Loader/Loader";
import PlayerCard from "@components/PlayerCard/PlayerCard";
import StatsContainer from "@components/UI/StatsContainer/StatsContainer";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [player, setPlayer] = useState(null);
  const [fetchUserStats, isLoading, error] = useFetching(async (nickname) => {
    const response = await PostService.getUserStatsByNickname(nickname);
    setUserData(response.data);
    const gameData = response.data.games["csgo"];
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
      <Header />
      <BackgroundSection
        image={BackgroundSectionImg}
        className={styles.introduce_backgroundSection}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="d-flex flex-column justify-content-center">
              <div className="col-12 col-lg-8 mb-5">
                <p className={styles.introduce_text}>
                  Быстрая статистика игроков киберспортивной платформы Faceit
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="col-12 col-lg-4">
                  <SearchForm onSubmit={fetchUserStats} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundSection>
      <div className="container h-100">
        <div className="row h-100">
          <StatBox>
            {isLoading && <Loader size={100} />}
            {error ? (
              <p>Error: {error}</p>
            ) : (
              userData && <PlayerCard playerProp={player} />
            )}
          </StatBox>
        </div>
      </div>
    </>
  );
};

export default App;
