<h1 align="center"> Sistema de Reservas</h1>

<p align="center">
    • <a href="#-arquitetura">Arquitetura</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-pré-requisitos">Pré-requisitos</a> • 
    <a href="#-autor">Autor</a> • 
</p>

---
## 💻 Sobre o projeto

O Sistema de Reservas é uma aplicação web de reservas que permite aos usuários visualizar locais disponíveis e fazer reservas. Este sistema consiste em um frontend desenvolvido em Angular e um backend com microsserviços implementados usando Spring Boot.

---
## Arquitetura

A arquitetura do Sistema de Reservas é baseada em microsserviços para garantir escalabilidade, tolerância a falhas e facilidade de manutenção. Os principais componentes incluem:

    Frontend (Angular): 
        Interface de usuário interativa para interação dos usuários com o sistema.

    Backend (Microsserviços Spring Boot): 
        Microsserviços fornecendo APIs para autenticação, gestão de reservas, locais e 
        notificações.

    Banco de Dados (PostgreSQL): 
        Armazenamento de dados relacional para usuários, locais e reservas.

    Escalabilidade e Tolerância a Falhas: 
        Utilização do Docker e Kubernetes para estratégias de escalabilidade horizontal e 
        tolerância a falhas nos microsserviços.

---
## Funcionalidades

    - Autenticação de Usuário:
        Login e geração de token JWT para autenticação segura.
    - Visualização de Locais Disponíveis:
        Os usuários podem visualizar uma lista de locais disponíveis para reserva.
    - Reservas:
        Os usuários podem fazer, cancelar e visualizar suas reservas.
    - Notificações:
        Envio de notificações aos usuários sobre suas reservas.

---
## 🛠 Pré-requisitos

Antes de executar o Sistema de Reservas em sua máquina local, certifique-se de ter instalado os seguintes componentes:

- Backend: **[Kit de Desenvolvimento Java (JDK)](https://openjdk.java.net/install/)**, **[Spring Boot](https://spring.io/projects/spring-boot/)**
- Frontend: **[Node.js e npm](https://nodejs.org/en/download)**, **[Angular CLI](https://angular.io/cli)**
- Orquestração de Contêineres: **[Kubernetes (opcional para implantação em cluster)](https://kubernetes.io/)**
- Contêiner: **[Docker](https://www.docker.com/)**

---
## ⚙️ Configuração e Instalação

**Frontend (Angular)**

Clone o repositório do frontend:

```bash 
git clone https://github.com/D4GUR4SU/booking-system-frontend.git
```

Instale as dependências:

```bash
cd booking-system-frontend
npm install
```

Inicie o servidor de desenvolvimento:

```bash
ng serve
```

Acesse a aplicação no navegador em ```http://localhost:4200```.

---
**Backend (Microsserviços Spring Boot)**

Clone o repositório do backend:

```bash
git clone https://github.com/D4GUR4SU/booking-system-backend.git
```

Importe o projeto em sua IDE preferida (por exemplo, IntelliJ IDEA).

Inicie os microsserviços individualmente (AuthService, BookingService, VenueService, NotificationService) executando cada um como uma aplicação Spring Boot.

Certifique-se de configurar corretamente as propriedades de conexão com o banco de dados PostgreSQL no arquivo application.properties.

---
## Uso
    Após configurar e iniciar tanto o frontend quanto o backend, você pode acessar a aplicação 
    no navegador e começar a usar as funcionalidades de reserva.

## Contribuição
    Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias, 
    correções de bugs ou novas funcionalidades.

## Licença
    Este projeto está licenciado sob a Licença MIT.

---
## 👨🏻‍💻 Autor
<a href="#">
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/50157211?s=120&v=4" width="100px;" alt=""/>
<br />

Feito por Douglas Souza 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Douglas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/dagurasujava/)](https://www.linkedin.com/in/dagurasujava/)

---
## README versões

[English 🇺🇸](./README.md)

[Português 🇧🇷](./README.pt.md)