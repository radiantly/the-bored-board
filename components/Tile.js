import styles from "../styles/tiled.module.css";

const Tile = (props) => {
  return (
    <div className={styles.tile}>
      <a href={props.url} target="_blank">
        <img
          src={`screenshots/${Buffer.from(props.url).toString("base64")}.png`}
        />
      </a>
    </div>
  );
};
export default Tile;
