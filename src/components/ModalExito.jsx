import styles from "./ModalExito.module.css";

function ModalExito({ onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>¡Formulario enviado con éxito! 🎉</h2>
        <p>Gracias por completar el registro.</p>
        <button onClick={onClose} style={styles.botonCerrar}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default ModalExito;
