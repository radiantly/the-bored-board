import styles from "../styles/tiled.module.css";

const Tile = (props) => {
  return (
    <div className={styles.tile}>
      <a href={props.url} target="_blank">
        <img src={`screenshots/${btoa(props.url)}.png`} />
      </a>
    </div>
  );
};
export default Tile;
