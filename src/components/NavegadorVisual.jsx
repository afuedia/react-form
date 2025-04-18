import React from "react";

function NavegadorVisual({ step, setStep, stepCompleto }) {
  // Crear un arreglo de 4 pasos
  const pasos = [1, 2, 3, 4];

  return (
    <div style={styles.navegadorContainer}>
      {pasos.map((paso) => (
        <div
          key={paso}
          onClick={() => stepCompleto[paso - 1] && setStep(paso)} // Solo se puede hacer clic si el paso anterior está completo
          style={{
            ...styles.punto,
            backgroundColor: step === paso ? "#4caf50" : "#ccc", // Verde si es el paso actual
            cursor: paso <= step ? "pointer" : "not-allowed", // Solo clickeable si el paso es igual o menor al actual
            opacity: paso <= step ? 1 : 0.3, // Hacemos que los puntos inactivos se vean más apagados
          }}
        />
      ))}
    </div>
  );
}

const styles = {
  navegadorContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  punto: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    transition: "background-color 0.3s, opacity 0.3s",
  },
};

export default NavegadorVisual;
