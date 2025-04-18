import CampoFormulario from "./molecules/CampoFormulario";
import Input from "./atoms/Input";

function SuscripcionControles({ formData, handleChange }) {
  return (
    <CampoFormulario legend={"Suscripción y Controles"}>
      <Input
        label="Suscribirme al boletín informativo"
        type="checkbox"
        name="boletin"
        checked={formData.boletin}
        onChange={handleChange}
      />

      <Input
        label="Recibir ofertas especiales"
        type="checkbox"
        name="ofertas"
        checked={formData.ofertas}
        onChange={handleChange}
      />

      <Input
        label="Acepto los términos y condiciones"
        type="checkbox"
        name="aceptarTerminos"
        checked={formData.aceptarTerminos}
        onChange={handleChange}
      />
    </CampoFormulario>
  );
}

export default SuscripcionControles;
