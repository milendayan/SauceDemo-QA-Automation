# 🚀 SauceDemo QA Automation & Bug Tracking

## 📋 Descripción

Este proyecto contiene la automatización de pruebas funcionales para la aplicación web **SauceDemo: https://www.saucedemo.com/** utilizando **Cypress**.

Como parte del proceso de aseguramiento de calidad (QA), también se documentaron y reportaron los defectos identificados durante la ejecución de pruebas mediante **Trello**, siguiendo un formato estandarizado de reporte de bugs.

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

### 🔐 Login

- Login exitoso con usuario estándar.
- Login con contraseña incorrecta.
- Login con campos vacíos.
- Login con usuario bloqueado.
- Logout desde el menú hamburguesa.

### 📦 Inventario

- Verificación de cantidad de productos.
- Ordenamiento de productos por precio (menor a mayor).
- Validación de ordenamiento con usuario `problem_user`.

### 🛒 Carrito

- Agregar un producto al carrito.
- Agregar múltiples productos.
- Eliminar productos desde el carrito.

### 💳 Checkout

- Completar checkout con datos válidos.
- Checkout con campos obligatorios vacíos.
- Validación del campo Last Name con usuario `problem_user`.

---

## 🐞 Bugs Identificados

Durante la ejecución de las pruebas se identificaron los siguientes defectos:

| ID | Módulo | Descripción |
|----|---------|-------------|
| BUG-01 | Inventario | Imágenes de productos incorrectas para `problem_user` |
| BUG-02 | Inventario | Ordenamiento por precio no funciona para `problem_user` |
| BUG-03 | Checkout | Campo Last Name presenta comportamiento incorrecto para `problem_user` |

---

## 📁 Estructura del Proyecto

```text
cypress/
│
├── e2e/
│   ├── login.cy.js
│   ├── inventario.cy.js
│   ├── carrito.cy.js
│   └── checkout.cy.js
│
├── fixtures/
├── support/
│
├── bug-reports/
│   ├── BUG-01.md
│   ├── BUG-02.md
│   └── BUG-03.md
│
├── evidencias/
│
└── README.md
```

---

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/saucedemo-qa-automation.git
```

Ingresar al directorio:

```bash
cd saucedemo-qa-automation
```

Instalar dependencias:

```bash
npm install
```

---

## ▶️ Ejecución de Pruebas

Abrir Cypress en modo interactivo:

```bash
npx cypress open
```

Ejecutar todas las pruebas en modo headless:

```bash
npx cypress run
```

Ejecutar una suite específica:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

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
| CP-07 | Inventario | Imágenes de productos |
| CP-08 | Inventario | Ordenamiento por precio |
| CP-09 | Inventario | Ordenamiento con problem_user |
| CP-10 | Carrito | Agregar producto |
| CP-11 | Carrito | Agregar múltiples productos |
| CP-12 | Carrito | Eliminar producto |
| CP-13 | Checkout | Checkout exitoso |
| CP-14 | Checkout | Campos obligatorios vacíos |
| CP-15 | Checkout | Campo Last Name con problem_user |

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

## 📷 Evidencias

Las evidencias utilizadas para la validación de los casos de prueba y el reporte de defectos se encuentran en la carpeta:

```text
/evidencias
```
---
