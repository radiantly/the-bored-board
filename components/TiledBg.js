import Tile from "./Tile.js";
import { URLS } from "../sites/urls.js";
import { shuffleArray } from "../utils/utils";
import styles from "../styles/tiled.module.css";

const TiledBg = () => {
  return (
    <div className={styles.tiled}>
      {shuffleArray(URLS).map((url) => (
        <Tile key={url} url={url} />
      ))}
    </div>
  );
};

export default TiledBg;
