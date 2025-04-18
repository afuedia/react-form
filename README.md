
# Documentación del Formulario de Registro de Usuarios

## 1. Resumen del Proyecto
Formulario multi-página para registro de usuarios en un sitio de comercio electrónico. Incluye validaciones, seguridad con reCAPTCHA, barra de progreso y controles completos de usuario.

## 2. Estructura del Formulario

- **Paso 1: Datos Personales**
  - Nombre
  - Apellidos
  - Email
  - Contraseña + Confirmación

- **Paso 2: Datos de Envío**
  - Calle, Municipio, Provincia
  - Código Postal
  - Teléfono
  - País
  - Horario de entrega (radio)

- **Paso 3: Pago**
  - Método de pago
  - Tarjeta de crédito (si aplica)
  - Gastos de envío (visualizados según método, si se desea)

- **Paso 4: Suscripción y Control**
  - Preferencias de boletín y ofertas
  - Aceptar Términos
  - reCAPTCHA
  - Botones: Enviar / Borrar

## 3. Validaciones Incluidas
- Todos los campos son obligatorios.
- Email con formato correcto.
- Contraseña debe coincidir.
- Confirmación de reCAPTCHA antes de enviar.
- Validación paso a paso antes de avanzar.

## 4. Componentes Personalizados
- `DatosPersonales`, `DatosEntrega`, `DatosPago`, `SuscripcionControles`
- `BarraProgreso`: representa avance visual
- `BotonPaso`: botones reutilizables
- `NavegadorVisual`: navegación rápida entre pasos
- `ModalExito`: modal de confirmación al enviar

## 5. Seguridad
- Integración con Google reCAPTCHA v2
- Solo permite enviar si el usuario es validado como humano

## 6. Estilo y UX
- Diseño adaptado y limpio
- Validaciones en tiempo real
- División en pasos para facilitar la entrada de datos

## 7. Pruebas Realizadas
- Probado en navegadores: Chrome, Firefox, Safari
- Responsive en móvil y escritorio
- Comportamientos: avance, borrado, reenvío

## 8. Posibles Mejoras Futuras
- Envío a backend real / persistencia en base de datos
- Guardar progreso parcial en `localStorage`
- Verificador de fortaleza de contraseña
- Soporte para varios métodos de pago
