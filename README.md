# 🚀 SauceDemo QA Automation & Bug Tracking

## 📋 Descripción

Este proyecto contiene la automatización de pruebas funcionales para la aplicación web SauceDemo utilizando Cypress.

Como parte del proceso de aseguramiento de calidad (QA), también se documentaron y reportaron los defectos identificados durante la ejecución de pruebas mediante Trello, siguiendo un formato estandarizado de reporte de bugs.

---

🌐 Aplicación Bajo Prueba

SauceDemo: https://www.saucedemo.com/

Aplicación utilizada para la práctica de pruebas funcionales, automatización y reporte de defectos.

---

## 🎯 Objetivos del Proyecto

- Automatizar casos de prueba funcionales utilizando Cypress.
- Validar el comportamiento de los módulos principales de SauceDemo.
- Detectar y documentar defectos encontrados durante las pruebas.
- Aplicar buenas prácticas de QA Manual y QA Automation.
- Gestionar incidencias mediante Trello.

---

## 🛠️ Tecnologías Utilizadas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub
- Trello

---

## 📂 Módulos Automatizados

Este proyecto automatiza pruebas funcionales sobre los siguientes módulos:

- 🔐 Login
- 📦 Inventario
- 🛒 Carrito
- 💳 Checkout

---

## 📄 Documentación y Trazabilidad

### Casos de Prueba

La planificación y ejecución de los casos de prueba se encuentra documentada en:

- 📊 Casos de Prueba SauceDemo: https://docs.google.com/spreadsheets/d/1jrePUwfarGZQ2QC_zhLk5bc9LqaudcPD/edit?usp=sharing&ouid=110213015608493580201&rtpof=true&sd=true

- 📌 Tablero Trello:

Los defectos identificados fueron registrados y gestionados mediante Trello:

 https://trello.com/invite/b/6a1b66ad9fc13667dbc9e85e/ATTI8bbe24a35bc710fbe12d079f97528807E85F8D05/qa-automation-2026

---

## 📑 Casos de Prueba Automatizados

| ID | Módulo | Caso de Prueba |
|----|---------|----------------|
| CP-01 | Login | Login exitoso |
| CP-02 | Login | Contraseña incorrecta |
| CP-03 | Login | Campos vacíos |
| CP-04 | Login | Usuario bloqueado |
| CP-05 | Login | Logout |
| CP-06 | Inventario | Cantidad de productos |
| CP-08 | Inventario | Ordenamiento por precio |
| CP-10 | Carrito | Agregar producto |
| CP-11 | Carrito | Agregar múltiples productos |
| CP-12 | Carrito | Eliminar producto |
| CP-13 | Checkout | Checkout exitoso |
| CP-14 | Checkout | Campos obligatorios vacíos |

> Nota:
> Los casos CP-07, CP-09 y CP-15 no fueron automatizados debido a que durante su ejecución se identificaron defectos funcionales en la aplicación. Estos hallazgos fueron documentados y reportados mediante tickets de bug en Trello para su posterior corrección por parte del equipo de desarrollo.

---

## 🐞 Bugs Identificados

Durante la ejecución de las pruebas se identificaron los siguientes defectos:

| ID | Módulo | Descripción | Ticket |
|-----|---------|-------------|---------|
| BUG-01 | Inventario | Imágenes de productos incorrectas para problem_user | https://trello.com/c/iOKAY1Sa |
| BUG-02 | Inventario | Ordenamiento por precio no funciona para problem_user | https://trello.com/c/1IAYdUAM |
| BUG-03 | Checkout | Campo Last Name presenta comportamiento incorrecto para problem_user | https://trello.com/c/8HMjJhBs |

---

## 📌 Gestión de Bugs

Los defectos encontrados fueron documentados siguiendo una estructura formal de reporte que incluye:

- Título
- Descripción
- Precondiciones
- Pasos para reproducir
- Resultado esperado
- Resultado obtenido
- Evidencia

Los tickets fueron gestionados mediante Trello para facilitar su seguimiento y trazabilidad.

---

## 📁 Estructura del Proyecto

```text
cypress/
│
├── e2e/
│   ├── carrito.cy.js
│   ├── checkout.cy.js
│   ├── inventario.cy.js
│   └── login.cy.js
│
├── fixtures/
├── support/
│
└── README.md
```

---

## ▶️ Instalación y ejecución de Pruebas

Instalar Cypress dentro de la carpeta que vamos a usar:

```bash
npm install cypress
```

Abrir Cypress y ejecutar las pruebas realizadas:

```bash
npx cypress open
```

---

## 📊 Resultados de la Ejecución

- Casos de prueba diseñados: 15
- Casos automatizados: 12
- Casos ejecutados exitosamente: 12
- Bugs identificados: 3
- Herramienta de automatización: Cypress
- Herramienta de gestión: Trello

---