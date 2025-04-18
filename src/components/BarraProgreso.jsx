import styles from "./BarraProgreso.module.css";

function BarraProgreso({ progreso }) {
  return (
    <div className={styles.barraContenedor}>
      <div
        className={styles.barraRelleno}
        style={{ width: `${progreso}%` }}
      ></div>
    </div>
  );
}

export default BarraProgreso;
