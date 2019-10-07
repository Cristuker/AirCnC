
# AirCnC
Projeto Omnistack 9

![Node](https://img.shields.io/badge/node-10.15.2-green) 
![React](https://img.shields.io/badge/react-16.10.1-blue)

## AirCnC

AirCnC é um projeto feito para desenvolvedores encontrarem lugares para trabalhar baseadas no valor por hora e linguagem.
No frontend foi usado ReactJS,Mobile em React Native e o backend em NodeJS e foi usado o socket.io para comunicação em tempo real.

Como a versão mobile foi construida usando o Expo para que ela retorne as thumbnails dos Spots é necessário que em */home/cristian/aircnc/backend/src/models/Spot.js* você altere o **http://ip-do-celular-no-expo:3333/files/${this.thumbnail}** ou **http://localhost:3333/files/${this.thumbnail}** para versão web.

Para instalar todas as dependências basta apenas dar o comando  `npm install`
## Login 

![Login Web](/images/login-web.png) 
![Login Mobile](/images/login-mobile-new.jpeg)

## Lista de Spots

![Spots Web](/images/list-web.png) 
![Spots Mobile](/images/List-mobile.jpeg) 

## Solicitação de reserva 

![Reserva Mobile](/images/reserva-mobile.jpeg)

## Cadastrar Spot web

![Spots Web](/images/cadastrar-spot-web.png) 

