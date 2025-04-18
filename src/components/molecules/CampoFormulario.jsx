import styles from "./CampoFormulario.module.css";

function CampoFormulario({ legend, children }) {
  return (
    <fieldset className={styles.contenedor}>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
}

export default CampoFormulario;
