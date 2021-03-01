##### App description

Este proyecto fue hecho con:
1. NodeJS
2. ReactJS
3. Redux
4. React Router
5. SSR
6. Express
7. Webpack

Basado en microservicios con un setup altamente escalable.

Para correr el proyecto seguir los siguientes pasos:

1. Copiar este repositorio a tu local `git clone ...`
2. Tener Docker instalado y docker-compose, sino entrar a cada proyecto por separado y ejecutar `npm install` seguido de `npm start`
3. te ubicas en las carpeta raiz de los microservicios
4. correr comando `npm run docker-up`, los puertos `5000` y `3000` deben estar habilitados correctamente
5. Una vez que este terminado y UP los dos microservicios - nos dirigimos a `localhost:5000`


#### Todo:
1. Revisar el unique sesion, para que en caso se conecte alguien con el mismo usuario activo desde otra ventana, este deba explusar la sesion sin problemas. Actualmente funciona pero no al 100%
2. Pequeños `nits` y mejoras al proyecto
3. Agregar websocket si es necesario
4. Mejorar Setup de docker-compose y `.env`


Thank you! Enjoy and happy coding!
