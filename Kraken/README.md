# Pasos para ejecutar las pruebas:
1. Instalar ghost, la versión 3.3.0 de manera local
2. Instalar las dependencias de kraken
4. Ejecutar las pruebas

## 1. Instalar Ghost versión 3.3.0 de manera local
Se debe instalar ghost de manera local, tener un Node JS version 12.

Instalar el CLI de Ghost:
```sudo npm install -g ghost-cli@latest```
Instalar la version de Ghost deseada en una carpeta vacia:

```ghost install 3.3.0 --local```

Al ingresar al panel de admin: ```'http://localhost:2368/ghost/'``` ponga los siguientes datos al registrarse como admin:
```
Nombre de administrador: Ayrton Pastor C.
Email de admin: administrador123@example.com
Contraseña de admin: administrador123
```
Estos datos SON OBLIGATORIOS o NO funcionaran los casos

## 2. Instalar las dependencias de kraken
Ubiquese en Kraken/Proyecto y ejecute ```bundle install``` para que se instale, o vaya a ```Kraken/KrakenMobile-1.0.9/``` y lea las instrucciones

## 4. Ejecutar las pruebas
Ubiquese en ```Kraken/Proyecto``` Ejecute las pruebas con el comando ```bundle exec kraken-mobile run```
