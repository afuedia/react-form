// Validación de campos de datos personales

export const validarNombre = (nombre) => {
  return nombre.trim() === "" ? "El nombre es obligatorio" : "";
};

export const validarApellidos = (apellidos) => {
  return apellidos.trim() === "" ? "Los apellidos son obligatorios" : "";
};
//Función para validad correo electrónico
export const validarEmail = (email) => {
  if (!email) return "El correo electrónico es obligatorio";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) ? "" : "Correo electrónico inválido";
};

export const validarContraseña = (password) => {
  if (!password) return "La contraseña es obligatoria";
  return password.length >= 8
    ? ""
    : "La contraseña debe tener al menos 8 caracteres";
};

export const validarContraseña2 = (password2, passwordOriginal) => {
  if (!password2) return "Por favor, repite la contraseña";
  return password2 === passwordOriginal ? "" : "Las contraseñas no coinciden";
};

//Función para validar números de teléfono
export const validarTelefono = (telefono) => {
  if (!telefono) return "El teléfono es obligatorio";
  const limpio = telefono.replace(/\s+/g, "");
  const regex = /^\d{9}$/;
  return regex.test(limpio) ? "" : "El teléfono debe tener 9 cifras numéricas";
};

//Función para validad códigos postales
export const validarCodigoPostal = (cp) => {
  if (!cp) return "El código postal es obligatorio";
  const regex = /^\d{5}$/;
  if (!regex.test(cp)) return "El código postal debe tener 5 cifras numéricas";
  const numero = parseInt(cp, 10);
  if (numero < 1000 || numero > 52999)
    return "Código postal no válido en España";
  return "";
};

// Funcion para validad número de tarjeta
export const validarTarjeta = (numero) => {
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
