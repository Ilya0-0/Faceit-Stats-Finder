import React from "react";
import levelData from "@utils/levelData.js";
import PlayerAvatar from "@components/UI/PlayerAvatar/PlayerAvatar";
import styles from "./playerCard.module.scss";

const PlayerCard = ({ playerProp }) => {
  const currLevelData = levelData[playerProp.skillLevel];
  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <div className={styles.player_card__wrapper}>
            <div className={styles.player_card__container}>
              <PlayerAvatar
                className={styles.player_avatar}
                avatar={playerProp.avatar}
              />
              <div className={styles.player_info}>
                <div className={styles.nickname_container}>
                  <p className={styles.player_nickname}>
                    {playerProp.nickname}
                  </p>
                  <span className={styles.nickname_badges}>
                    {playerProp.verified && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 5H9L12 2L15 5H19V9L22 12L19 15V19H15L12 22L9 19H5V15L2 12L5 9V5ZM11.098 16.737L5.684 11.053L11.098 12.947L18.316 7.263L11.098 16.737Z"
                          fill="white"
                        />
                      </svg>
                    )}
                    <span className={styles.nickname_badges__country}>
                      {playerProp.country}
                    </span>
                  </span>
                </div>

                <div className={styles.player_level__container}>
                  <img src={currLevelData.icon} alt="level" />
                  <p>
                    {playerProp.faceitElo}/{currLevelData.maxElo}
                  </p>
                </div>
                <p className={styles.player_activatedAt}>
                  Профиль зарегистрирован с
                  {` ${new Date(playerProp.activatedAt).toLocaleDateString()}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerCard;
