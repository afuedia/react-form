# 🧾 Formulario Multistep en React

Este proyecto fue desarrollado como tarea del curso **“Formularios en la construcción de páginas web”**, donde se nos propuso desarrollar un formulario.

---

## 🎯 Objetivos del proyecto

- Crear un formulario de registro dividido en pasos (multistep).
- Incluir validación personalizada por campo.
- Mostrar una barra de progreso según los campos completados.
- Confirmar el envío con una ventana modal de éxito.
- Integrar reCAPTCHA de Google para evitar envíos automatizados.
- Aplicar diseño modular siguiendo principios de atomic design.

---

## 🧱 Arquitectura del proyecto

El formulario se divide en **componentes reutilizables y bien estructurados** siguiendo una jerarquía clara:

- **Átomos** (`atoms/`): componentes simples como `Input` o `BotonPaso`.
- **Moléculas** (`molecules/`): conjuntos lógicos de campos, como `CampoFormulario`.
- **Organismos**: pasos del formulario como `DatosPersonales`, `DatosEntrega`, `DatosPago` y `SuscripcionControles`.
- **Layout**: barra de progreso, modal de éxito, navegación visual, etc.
- **Lógica centralizada**:
  - Las funciones de **validación de campos** se han extraído y organizadas en un archivo `validators.js` dentro de `utils/`, facilitando la reutilización y mantenimiento.
  - La gestión de estado está centralizada en el componente `RegistroForm`, que controla los pasos, la validación de progreso y la lógica del envío.

---

## 🧪 Validación

Cada input incluye una función de validación personalizada, que muestra mensajes en tiempo real cuando el usuario interactúa con el campo. Se validan:

- Campos obligatorios.
- Coincidencia de contraseñas.
- Formato del correo electrónico.
- Longitud mínima de la contraseña.
- Campos específicos para dirección y método de pago.

---

## 🖼️ Modal de Éxito

Al enviar el formulario correctamente, se muestra un **modal con estilo neobrutalista** confirmando el registro, diseñado con CSS modular.

---

## 🧩 Tecnologías usadas

- ⚛️ React
- 💅 CSS Modules
- 📦 Atomic Design
- 🔐 Google reCAPTCHA v2
- 🧪 Validación personalizada con JS
- 🎨 Neobrutalismo en estilos visuales

---

## ✍️ Conclusiones

Este proyecto me permitió practicar:

- Composición de formularios complejos.
- Separación de responsabilidades en componentes React.
- Aplicación de patrones de diseño front-end.
- Uso de `reCAPTCHA` y feedback visual al usuario.

Es un punto de partida que puedo seguir mejorando y adaptando a proyectos reales.

---

## 👤 Autor

**Antonio Fuentes**
