# Spring Boot Security with JWT Authentication

This project implements user authentication and authorization using Spring Boot, Spring Security, JWT (JSON Web Token), and MySQL. It includes features such as password hashing with BCrypt, JWT token generation upon login, and role-based API access control.

---

## 🚀 Features

### ✅ Implemented
- User registration with username/password
- BCrypt password hashing (strength 12)
- JWT token generation on login (10 hour expiration)
- Stateless JWT validation for all requests
- MySQL database integration
- Spring Security configuration
- Role-based access control (User/Admin)
- Admin-only endpoints (`/admin/users`)
- Role field in User Entity and JWT Claims

### ⏳ In Progress
- Token refresh mechanism
- Swagger API documentation
- Password reset functionality
- Email verification flow

---

## 📁 Project Structure

```
spring-security-auth/
├── src/main/java/
│   ├── com/kkn/
│   │   ├── config/                      # Configuration classes
│   │   │   ├── JWTFilter.java           # JWT validation filter
│   │   │   └── SecurityConfig.java      # Security configuration
│   │   ├── controller/                  # REST controllers
│   │   │   ├── RoleTestController.java  # Role-based endpoints
│   │   │   └── UserController.java      # Auth endpoints
│   │   ├── model/                       # Data models
│   │   │   ├── User.java                # User entity
│   │   │   └── UsersPrincipals.java     # UserDetails impl
│   │   ├── repo/                        # Repositories
│   │   │   └── UserRepository.java      # User JPA repo
│   │   ├── service/                     # Services
│   │   │   ├── JWTService.java          # JWT operations
│   │   │   ├── MyUserDetailService.java # UserDetailsService
│   │   │   └── UserService.java         # Auth logic
│   │   ├── dto/                         # Data Transfer Objects
│   │   │   └── JWTResponse.java         # Token response wrapper
│   │   └── AuthdemoApplication.java     # Main class
├── src/main/resources/
│   ├── application.properties           # Configuration
└── pom.xml                              # Maven dependencies
```

---

## 🧰 Dependency Stack

### Core Dependencies
- **Spring Boot Starter Web (3.4.4)**  
  REST API foundation with embedded Tomcat
- **Spring Boot Data JPA**  
  Database integration with Hibernate ORM
- **Spring Boot DevTools**  
  Hot reload & development utilities

### Security
- **Spring Boot Starter Security**  
  Authentication & authorization framework
- **Java JWT (jjwt) (0.12.6)**  
  JWT creation/validation with Jackson bindings

### Database
- **MySQL Connecto (8.3.0)**  
  Official MySQL JDBC driver

### Utilities
- **Spring Expression Language (SpEL)**  
  For @PreAuthorize annotations

- **Lombok**  
  Annotation-based code reduction

> **Note:** Version management handled by Spring Boot Parent POM (3.2.4)

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Java 21 installed
- MySQL running with a database named `projects`

### 📦 Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kkn2k19/User_Authentication_System.git
   cd User_Authentication_System
   ```

2. **Update MySQL credentials** in `src/main/resources/application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/projects
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```

3. **Run the project**:

   ```bash
   mvn spring-boot:run
   ```

   The app will run at `http://localhost:1111`.

---

## 📱 API Endpoints

## 🔐 Authentication Endpoints

### Register User - **POST /register**

```json
{
  "username": "karan",
  "password": "karan123"
}
```

### Login User - **POST /login**

```json
{
  "username": "karan",
  "password": "karan123"
}
```

**Response:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYXJhbiIs...}"
}
```

## 🔒 Authentication Endpoints

### User Profile - **GET /api/user/profile**
- Requires a valid JWT with role: `ROLE_USER`

```json
"Welcome USER - You can access your profile!"
```

### Admin Panel - **GET /api/admin**
- Requires a valid JWT with role: `ROLE_ADMIN`

```json
"Welcome ADMIN - You can access admin panel!"
```

---

## ✅ Implementation Progress

### Completed Tasks
- [x] Implement Password Hashing with BCrypt (strength 12)
- [x] Implement JWT Generation on Login (10h expiration)
- [x] Complete JWT Validation Pipeline
- [x] Role-Based Access Control with `ROLE_USER`/`ROLE_ADMIN`
- [x] Admin Dashboard Endpoint Implementation
- [x] User Management API Endpoints

### Current Priorities
- [ ] Implement Token Refresh Mechanism
- [ ] Develop Password Reset Flow
- [ ] Add Email Verification System
- [ ] Write Comprehensive Unit/Integration Tests
- [ ] Integrate Swagger/OpenAPI Documentation
- [ ] Enhance Error Handling System

### Future Enhancements
- [ ] User Profile Management System
- [ ] Implement Rate Limiting for Auth Endpoints
- [ ] Add Comprehensive Audit Logging
- [ ] Configure CORS Policies
- [ ] Two-Factor Authentication Support
- [ ] API Usage Analytics Dashboard

---

## 📌 Important Notes

### Security Configuration
- Public endpoints: `/api/register`, `/api/login`
- All protected endpoints require valid JWT in Authorization header
- JWT expiration: 10 hours (configurable in `JWTService`)
- Role enforcement via `@PreAuthorize` annotations
- CSRF protection disabled for API endpoints

### Database Considerations
- Auto-generates `usr` table via Hibernate (spring.jpa.hibernate.ddl-auto=update)
- Password storage: BCrypt hashed (strength 12)
- Default role assignment: "ROLE_USER"
- MySQL connection pool with default Spring Boot settings

### Development Notes
- Hot reload enabled via Spring Boot DevTools
- Default server port: 1111 (configurable in application.properties)
- H2 in-memory database available for testing
- Activate test profile with: `spring.profiles.active=test`

---

## 🤝 Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

---

## 📄 License

### MIT License

```text
MIT License

Copyright (c) 2023 Karan
```
---