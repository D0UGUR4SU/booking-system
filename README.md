<h1 align="center"> Booking System</h1>

<p align="center">
    • <a href="#-architecture">Architecture</a> •
     <a href="#-features">Features</a> •
     <a href="#-prerequisites">Prerequisites</a> • 
     <a href="#-author">Author</a> • 
</p>

---
## 💻 About the project

The Booking System is a web reservation application that allows users to view available venues and make bookings. This system consists of a frontend developed in Angular and a backend with microservices implemented using Spring Boot.

---
## Architecture
The architecture of the Booking System is based on microservices to ensure scalability, fault tolerance, and ease of maintenance. The key components include:

    Frontend (Angular): 
        Interactive user interface for users to interact with the system.

    Backend (Spring Boot Microservices): 
        Microservices providing APIs for authentication, booking management, venues, and 
        notifications.

    Database (PostgreSQL): 
        Relational data storage for users, venues, and bookings.

    Scalability and Fault Tolerance: 
        Utilization of Docker and Kubernetes for horizontal scalability and fault 
        tolerance strategies in microservices.

---
## Features
     - User Authentication:
        Login and generation of JWT token for secure authentication.
     - Viewing Available Venues:
        Users can view a list of venues available for booking.
     - Bookings: 
        Users can make, cancel, and view their bookings.
     - Notifications:
        Sending notifications to users regarding their bookings.

---
## 🛠 Prerequisites

Before running the Booking System on your local machine, make sure you have installed the following:

- Backend: **[Java Development Kit (JDK)](https://openjdk.java.net/install/)**, **[Spring Boot](https://spring.io/projects/spring-boot/)**'
- Frontend: **[Node.js and npm](https://nodejs.org/en/download)**, **[Angular CLI](https://angular.io/cli)**
- Container orchestration: **[Kubernetes (optional for cluster deployment)](https://kubernetes.io/)**
- Container: **[Docker](https://www.docker.com/)**

---
## ⚙️ Configuration and Installation

**Frontend (Angular)**

Clone the frontend repository:

```bash 
git clone https://github.com/D4GUR4SU/booking-system-frontend.git
```

Install dependencies:

```bash 
cd booking-system-frontend
npm install
```

Start the development server:

```bash 
ng serve
```

Access the application in the browser at ```http://localhost:4200```.

**Backend (Spring Boot Microservices)**

Clone the backend repository:

```bash 
git clone https://github.com/D4GUR4SU/booking-system-backend.git
```
Import the project into your preferred IDE (e.g., IntelliJ IDEA).

Start the microservices individually (AuthService, BookingService, VenueService, NotificationService) by running each as a Spring Boot application.

Make sure to correctly configure the connection properties to the PostgreSQL database in the ```application.properties```  file.

---
## Usage
    After setting up and starting both the frontend and backend, you can access the 
    application in the browser and begin using the booking functionalities.

## Contribution
    Contributions are welcome! Feel free to submit pull requests with improvements, 
    bug fixes, or new features.

## License
    This project is licensed under the MIT License.

---
## 👨🏻‍💻 Author

<a href="#">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/50157211?s=120&v=4" width="100px;" alt=""/>
<br />

Made by Douglas Souza 👋🏽 Get in touch!

[![Linkedin Badge](https://img.shields.io/badge/-Douglas-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/dagurasujava/)](https://www.linkedin.com/in/dagurasujava/)

---
## README versions

[English 🇺🇸](./README.md)
[Português 🇧🇷](./README.pt.md)