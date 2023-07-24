import {
  BsPlaystation,
  BsWindows,
  BsXbox,
  BsNintendoSwitch,
  BsApple,
  BsAndroid2,
} from "react-icons/bs";
import { FaLinux, FaMobileAlt } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import classes from "./GameCard.module.css";

function GameCard({ game }) {
  return (
    <div className={classes.gamecard}>
      <div className={classes.gamecard__image}>
        <img src={game.background_image} alt="..." />
      </div>
      <div className={classes.gamecard__body}>
        <div className={classes.gamecard__platforms}>
          {game.parent_platforms.map((p) =>
            (() => {
              switch (p.platform.slug) {
                case "pc":
                  return <BsWindows size={12} key={p.platform.slug} />;
                case "mac":
                  return <BsApple size={12} key={p.platform.slug} />;
                case "playstation":
                  return <BsPlaystation size={14} key={p.platform.slug} />;
                case "xbox":
                  return <BsXbox size={12} key={p.platform.slug} />;
                case "linux":
                  return <FaLinux size={12} key={p.platform.slug} />;
                case "nintendo":
                  return <BsNintendoSwitch size={12} key={p.platform.slug} />;
                case "ios":
                  return <FaMobileAlt size={12} key={p.platform.slug} />;
                case "android":
                  return <BsAndroid2 size={12} key={p.platform.slug} />;
                case "web":
                  return <TbWorldWww size={14} key={p.platform.slug} />;
                default:
                  return;
              }
            })()
          )}
        </div>
        <h2>{game.name}</h2>
      </div>
    </div>
  );
}

export default GameCard;
