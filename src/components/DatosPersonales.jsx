import { useState, useEffect } from "react";
import Input from "./atoms/Input";
import CampoFormulario from "./molecules/CampoFormulario";

function DatosPersonales({ formData, handleChange }) {
  // Funciones de validación
  const validarEmail = (email) => {
    if (!email) return "El correo electrónico es obligatorio";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? "" : "Correo electrónico inválido";
  };

  const validarContraseña = (password) => {
    if (!password) return "La contraseña es obligatoria";
    return password.length >= 8
      ? ""
      : "La contraseña debe tener al menos 8 caracteres";
  };

  const validarContraseña2 = (password2) => {
    if (!password2) return "Por favor, repite la contraseña";
    return password2 === formData.contraseña
      ? ""
      : "Las contraseñas no coinciden";
  };

  const validarNombre = (nombre) => {
    return nombre.trim() === "" ? "El nombre es obligatorio" : "";
  };

  const validarApellidos = (apellidos) => {
    return apellidos.trim() === "" ? "Los apellidos son obligatorios" : "";
  };

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
