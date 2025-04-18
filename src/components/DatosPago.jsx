import Input from "./atoms/Input";
import Select from "./atoms/Select";
import CampoFormulario from "./molecules/CampoFormulario";

function DatosPago({ formData, handleChange }) {
  // Funciones de validación
  const validarTarjeta = (numero) => {
    if (!numero) return "El número de tarjeta es obligatorio";
    const limpio = numero.replace(/\s+/g, "");
    if (!/^\d{13,19}$/.test(limpio)) {
      return "El número de tarjeta debe tener entre 13 y 19 dígitos";
    }
    let suma = 0;
    let alternar = false;
    for (let i = limpio.length - 1; i >= 0; i--) {
      let n = parseInt(limpio[i], 10);
      if (alternar) {
        n *= 2;
        if (n > 9) n -= 9;
      }
      suma += n;
      alternar = !alternar;
    }
    return suma % 10 === 0 ? "" : "Número de tarjeta no válido";
  };
  return (
    <CampoFormulario legend={"Método de pago"}>
      <Select
        id="metodoPago"
        label="Método de pago"
        name="metodoPago"
        value={formData.metodoPago}
        onChange={handleChange}
        required
        options={["Tarjeta de crédito", "PayPal", "Transferencia bancaria"]}
        placeholder="Selecciona un método"
      />

      {formData.metodoPago === "Tarjeta de crédito" && (
        <Input
          type="number"
          id="tarjeta"
          name="tarjeta"
          label="Número de tarjeta"
          value={formData.tarjeta}
          onChange={handleChange}
          placeholder="1234 5678 9012 3456"
          required
          validator={validarTarjeta}
        />
      )}

      <Input
        label="Gastos de envío"
        type="text"
        id="gastosEnvio"
        name="gastosEnvio"
        value="Gratis"
        readOnly
      />
    </CampoFormulario>
  );
}

export default DatosPago;
