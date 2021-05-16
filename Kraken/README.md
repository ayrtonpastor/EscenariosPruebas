# Pasos para ejecutar las pruebas:
1. Instalar ghost, la versión 3.3.0 o 3.42.5 de manera local
2. Instalar las dependencias de ruby
3. Instalar las dependencias de kraken
4. Ejecutar las pruebas

## Prerequisitos
Tener instalado:
- JDK, versión de Java igual o superior a la 8.
- SDK de Android.
- Chromedriver según su versión de Chrome.

Tener las siguientes variables para ubicar la ruta de JDK y SDK.
- JAVA_HOME debe tener como valor la ruta absoluta del directorio donde se encuentra el JDK.
- ANDROID_HOME debe tener como valor la ruta absoluta del directorio donde se encuentra el Kit de desarrollo de Android.

## 1. Instalar Ghost versión (3.3.0 / 3.42.5) de manera local
- Se debe instalar ghost de manera local, tener un Node JS version 12.

Instalar el CLI de Ghost:
```sudo npm install -g ghost-cli@latest```
Instalar la version de Ghost deseada en una carpeta vacia:

```ghost install 3.3.0 --local```
```ghost install 3.42.5 --local```

- Al ingresar al panel de admin: ```'http://localhost:2368/ghost/'``` registrese con los datos solicitados en pantalla y anotelos.


## 2. Instalar las dependencias de ruby
- En su terminal ejecute el siguiente comando ```sudo apt install ruby-dev``` para que instale Ruby. Si ya tiene, asegurarse que su versión sea mayor a 2.2.
- Luego ejecutar ```sudo gem install bundler```, esta gema es una gema de apoyo para la instalación de gemas con sus versiones necesarias en los proyectos desarrollados en Ruby.

## 3. Instalar las dependencias de kraken
- Ubiquese en Kraken/Proyecto y ejecute ```bundle install --path vendor/bundle``` para poder trabajar con libreras internas del proyecto.
- Luego ejecute ```bundle install``` para instalar las dependencias que necesite el proyecto.
- Despues, ejecute ```kraken-mobile setup``` para configurar el setup del proyecto en caso no se encuentre configurado. Le solicitará la cantidad de usuarios, usted pondrá 1 y oprimirá enter 2 veces, confirmando que desea ejecutar las pruebas en desarrollo web.

## 4. Ejecutar las pruebas

- Abra el archivo web_steps.rb de la ruta ```'Kraken/Proyecto/features/web/step_definitions/web_steps.rb'``` y modifique las variables de la siguiente manera:

    * $username: El correo de usuario que uso para registrarse.
    * $password: La contraseña que uso en el formulario de registro.
    * $profile_name: El nombre exacto que uso en el formulario de registro
    * $urlABP: La url del servicio de host que por defecto deberìa ser ```'http://localhost:2368/ghost/'```
    * $ghostVersion: La versión de ghost que esté corriendo  en formato X.XX.X / Esta variable es importante por que sera el nombre de la carpeta donde se alojaran los screenshots

- Ubiquese en ```Kraken/Proyecto``` Ejecute las pruebas con el comando ```bundle exec kraken-mobile run```


**NOTA:** En caso de dudas, dirijase a la documentación en ```Kraken/KrakenMobile-1.0.9/```
