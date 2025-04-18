import styles from "./Boton.module.css";

function BotonPaso({ onClick, disabled, children }) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.boton}>
      {children}
    </button>
  );
}

export default BotonPaso;
