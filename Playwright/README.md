# Pasos para ejecutar las pruebas:
1. Instalar ghost, la versión 3.3.0 de manera local
2. Instalar las dependencias de playwright
3. Configurar las variables de playwright
4. Ejecutar las pruebas

## 1. Instalar Ghost versión 3.3.0 de manera local
Se debe instalar ghost de manera local, tener un Node JS version 12.

Instalar el CLI de Ghost:
```sudo npm install -g ghost-cli@latest```
Instalar la version de Ghost deseada en una carpeta vacia:

```ghost install 3.3.0 --local```

Al ingresar al panel de admin: ```'http://localhost:2368/ghost/'``` ponga los siguientes datos al registrarse como admin:
```
Nombre de administrador: Pedro
Email de admin: administrador123@example.com
Contraseña de admin: administrador123
```
No es obligatorio pero son datos sugeridos

## 2. Instalar las dependencias de playwright
Asegurese de estar en la ruta ```<Path-al-proyecto>\Playwright``` y ejecute

```npm install```

## 3. Configurar las variables de Ghost en playwright

Vaya al archivo  ```index.js``` y configure las siguientes variables a su acomodo tal como las configuró en el Ghost, este es un ejemplo:
```
const url = 'http://localhost:2368/ghost/';
const administratorName = 'Pedro';
const administratorEmail = 'administrador123@example.com';
const administratorPassword = 'administrador123';
```

## 4. Ejecutar las pruebas
Asegurese de estar en la ruta ```<Path-al-proyecto>\Playwright``` y ejecute

```node index.js```

## 5. Problemas
Si tiene problemas puede ser por la configuración de las variables, el nombre, correo o contraseña están mal, o las pruebas se ejecutan en una pantalla muy pequeña. Contáctenos y le ayudaremos.