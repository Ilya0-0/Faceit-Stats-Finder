import React from "react";
import styles from "./playerAvatar.module.scss";

const PlayerAvatar = ({ avatar, className = " ", alt = "Player avatar" }) => {
  return avatar ? (
    <img
      className={`${styles.player_avatar} ${className}`}
      src={avatar}
      alt={alt}
    />
  ) : (
    <div
      className={`${styles.player_avatar} ${styles.defaultAvatar} ${className}`}
    >
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        aria-label="avatar"
      >
        <path
          d="M13.333 66.667h53.334V60c0-7.364-5.97-13.333-13.334-13.333H26.667c-7.364 0-13.334 5.97-13.334 13.333v6.667zm13.334-53.334h26.666V30c0 5.523-4.477 10-10 10h-6.666c-5.523 0-10-4.477-10-10V13.333z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default PlayerAvatar;
