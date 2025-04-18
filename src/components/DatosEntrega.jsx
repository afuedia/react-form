import Input from "./atoms/Input";
import CampoFormulario from "./molecules/CampoFormulario";
import Select from "./atoms/Select";

function DatosEntrega({ formData, handleChange }) {
  // Funciones de validación
  const validarTelefono = (telefono) => {
    if (!telefono) return "El teléfono es obligatorio";
    const limpio = telefono.replace(/\s+/g, "");
    const regex = /^\d{9}$/;
    return regex.test(limpio)
      ? ""
      : "El teléfono debe tener 9 cifras numéricas";
  };
  const validarCodigoPostal = (cp) => {
    if (!cp) return "El código postal es obligatorio";
    const regex = /^\d{5}$/;
    if (!regex.test(cp))
      return "El código postal debe tener 5 cifras numéricas";
    const numero = parseInt(cp, 10);
    if (numero < 1000 || numero > 52999)
      return "Código postal no válido en España";
    return "";
  };

  return (
    <>
      <CampoFormulario legend={"Dirección de envío"}>
        <Input
          id="calle"
          type="text"
          label="Calle"
          name="calle"
          value={formData.calle}
          onChange={handleChange}
          required
        />

        <Input
          id="municipio"
          type="text"
          label="Municipio"
          name="municipio"
          value={formData.municipio}
          onChange={handleChange}
          required
        />

        <Input
          label="Provincia"
          type="text"
          id="provincia"
          name="provincia"
          value={formData.provincia}
          onChange={handleChange}
          required
        />
        <Input
          label="Codigo Postal"
          type="number"
          id="codigoPostal"
          name="codigoPostal"
          value={formData.codigoPostal}
          onChange={handleChange}
          required
          validator={validarCodigoPostal}
        />

        <Input
          label="Número de teléfono"
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
          validator={validarTelefono}
        />

        <Select
          id="pais"
          label="País"
          name="pais"
          value={formData.pais}
          onChange={handleChange}
          required
          options={["Canarias", "Francia", "Portugal", "Reino Unido"]}
        />
      </CampoFormulario>
      <CampoFormulario legend={"Horario preferido de entrega"}>
        <Input
          label="Mañana"
          type="radio"
          id="mañana"
          name="horario"
          value="mañana"
          checked={formData.horario === "mañana"}
          onChange={handleChange}
        />
        <Input
          label="Tarde"
          type="radio"
          id="tarde"
          name="horario"
          value="tarde"
          checked={formData.horario === "tarde"}
          onChange={handleChange}
        />
      </CampoFormulario>
    </>
  );
}

export default DatosEntrega;
