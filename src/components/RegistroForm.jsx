import { useState, useRef } from "react";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import DatosPago from "./DatosPago";
import SuscripcionControles from "./Suscripcion";
import BarraProgreso from "./BarraProgreso";
import BotonPaso from "./atoms/Boton";
import ModalExito from "./ModalExito";
import NavegadorVisual from "./NavegadorVisual";
import ReCAPTCHA from "react-google-recaptcha";

function RegistroForm() {
  const [captchaValido, setCaptchaValido] = useState(false);
  const recaptchaRef = useRef(null);
  const [step, setStep] = useState(1);
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    contraseña: "",
    contraseña2: "",
    calle: "",
    municipio: "",
    provincia: "",
    codigoPostal: "",
    telefono: "",
    pais: "",
    metodoPago: "",
    tarjeta: "",
    boletin: false,
    ofertas: false,
    aceptarTerminos: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const camposPorPaso = {
    1: ["nombre", "apellidos", "email", "contraseña", "contraseña2"],
    2: ["calle", "municipio", "provincia", "codigoPostal", "telefono", "pais"],
    3: [
      "metodoPago",
      ...(formData.metodoPago === "tarjeta" ? ["tarjeta"] : []),
    ],
    4: ["aceptarTerminos"],
  };

  const camposRequeridos = camposPorPaso[step] || [];
  const stepCompleto = camposRequeridos.every((campo) => {
    const valor = formData[campo];
    return typeof valor === "boolean" ? valor === true : valor.trim() !== "";
  });

  const completedInputs = Object.entries(formData).filter(([key, value]) => {
    if (typeof value === "boolean") return value === true;
    if (typeof value === "string") return value.trim() !== "";
    return false;
  }).length;

  const totalInputs = Object.keys(formData).length;
  const progreso = Math.round((completedInputs / totalInputs) * 100);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    setEnviado(true);
    setFormData({
      nombre: "",
      apellidos: "",
      email: "",
      contraseña: "",
      contraseña2: "",
      calle: "",
      municipio: "",
      provincia: "",
      codigoPostal: "",
      telefono: "",
      pais: "",
      metodoPago: "",
      tarjeta: "",
      boletin: false,
      ofertas: false,
      aceptarTerminos: false,
    });
    setStep(1);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
    setCaptchaValido(false);
    setTimeout(() => setEnviado(false), 4000);
  };

  const handleCaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
    setCaptchaValido(!!value);
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      apellidos: "",
      email: "",
      contraseña: "",
      contraseña2: "",
      calle: "",
      municipio: "",
      provincia: "",
      codigoPostal: "",
      telefono: "",
      pais: "",
      metodoPago: "",
      tarjeta: "",
      boletin: false,
      ofertas: false,
      aceptarTerminos: false,
    });
    setStep(1);
    setCaptchaValido(false);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  return (
    <div>
      {enviado && <ModalExito onClose={() => setEnviado(false)} />}
      <BarraProgreso progreso={progreso} />

      {step === 1 && (
        <DatosPersonales formData={formData} handleChange={handleChange} />
      )}
      {step === 2 && (
        <DatosEntrega formData={formData} handleChange={handleChange} />
      )}
      {step === 3 && (
        <DatosPago formData={formData} handleChange={handleChange} />
      )}
      {step === 4 && (
        <SuscripcionControles formData={formData} handleChange={handleChange} />
      )}
      {step === 4 && (
        <div style={{ margin: "1rem 0" }}>
          <ReCAPTCHA
            sitekey="6LedSR0rAAAAACE3nHx7Py9yPAAEXKWRg6ZoueQc"
            onChange={handleCaptchaChange}
            ref={recaptchaRef}
          />
        </div>
      )}

      <NavegadorVisual step={step} setStep={setStep} />

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        {step > 1 && <BotonPaso onClick={prevStep}>Anterior</BotonPaso>}
        {step < 4 && (
          <BotonPaso onClick={nextStep} disabled={!stepCompleto}>
            Siguiente
          </BotonPaso>
        )}
        {step === 4 && (
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!stepCompleto || !captchaValido}
          >
            Enviar
          </button>
        )}
        <button type="button" onClick={handleReset}>
          Borrar Formulario
        </button>
      </div>
    </div>
  );
}

export default RegistroForm;
