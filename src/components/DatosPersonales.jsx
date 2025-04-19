import { useState, useEffect } from "react";
import Input from "./atoms/Input";
import CampoFormulario from "./molecules/CampoFormulario";
import {
  validarNombre,
  validarApellidos,
  validarEmail,
  validarContraseña,
  validarContraseña2,
} from "../utils/validaciones";

function DatosPersonales({ formData, handleChange }) {
  return (
    <CampoFormulario legend={"Datos Personales"}>
      <Input
        id="nombre"
        label="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
        validator={validarNombre}
      />

      <Input
        id="apellidos"
        label="Apellidos"
        name="apellidos"
        value={formData.apellidos}
        onChange={handleChange}
        required
        validator={validarApellidos}
      />

      <Input
        id="email"
        label="Correo electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        validator={validarEmail}
      />

      <Input
        id="contraseña"
        label="Contraseña"
        name="contraseña"
        type="password"
        value={formData.contraseña}
        onChange={handleChange}
        required
        validator={validarContraseña}
      />

      <Input
        id="contraseña2"
        label="Repetir contraseña"
        name="contraseña2"
        type="password"
        value={formData.contraseña2}
        onChange={handleChange}
        required
        validator={validarContraseña2}
      />
    </CampoFormulario>
  );
}

export default DatosPersonales;
