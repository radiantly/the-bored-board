import Tile from "./Tile.js";
import { URLS } from "../utils/urls.js";
import styles from "../styles/tiled.module.css";

const TiledBg = (props) => {
  return (
    <div className={styles.tiled}>
      {URLS.map((url) => (
        <Tile key={url} url={url} />
      ))}
    </div>
  );
};

export default TiledBg;
