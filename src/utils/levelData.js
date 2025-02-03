import Level1 from "@assets/levelsIcons/lvl1.svg";
import Level2 from "@assets/levelsIcons/lvl2.svg";
import Level3 from "@assets/levelsIcons/lvl3.svg";
import Level4 from "@assets/levelsIcons/lvl4.svg";
import Level5 from "@assets/levelsIcons/lvl5.svg";
import Level6 from "@assets/levelsIcons/lvl6.svg";
import Level7 from "@assets/levelsIcons/lvl7.svg";
import Level8 from "@assets/levelsIcons/lvl8.svg";
import Level9 from "@assets/levelsIcons/lvl9.svg";
import Level10 from "@assets/levelsIcons/lvl10.svg";

const levelData = {
  1: { icon: Level1, minElo: 100, maxElo: 500 },
  2: { icon: Level2, minElo: 501, maxElo: 750 },
  3: { icon: Level3, minElo: 751, maxElo: 900 },
  4: { icon: Level4, minElo: 901, maxElo: 1050 },
  5: { icon: Level5, minElo: 1051, maxElo: 1200 },
  6: { icon: Level6, minElo: 1201, maxElo: 1350 },
  7: { icon: Level7, minElo: 1351, maxElo: 1530 },
  8: { icon: Level8, minElo: 1531, maxElo: 1750 },
  9: { icon: Level9, minElo: 1751, maxElo: 2000 },
  10: { icon: Level10, minElo: 2001, maxElo: Infinity },
};

export default levelData;
