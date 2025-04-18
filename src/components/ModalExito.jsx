// components/ModalExito.jsx
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

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "400px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  botonCerrar: {
    marginTop: "1.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
};

export default ModalExito;
