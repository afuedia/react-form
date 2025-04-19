import Input from "./atoms/Input";
import Select from "./atoms/Select";
import CampoFormulario from "./molecules/CampoFormulario";
import { validarTarjeta } from "../utils/validaciones";

function DatosPago({ formData, handleChange }) {
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
