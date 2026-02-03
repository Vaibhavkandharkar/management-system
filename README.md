# Device Management System (NMS-style Application)

This project is a **full-stack Device / Asset Management System** built as part of a technical assessment to demonstrate enterprise-level application design similar to **NMS, ITSM, and HRMS platforms**.

The system allows users to **manage devices**, monitor their **status (UP/DOWN)**, and view the **last checked timestamp**, with a clean and responsive UI.

---

## 🧩 Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* PostgreSQL
* REST APIs
* Maven

### Frontend

* React.js (Vite)
* Tailwind CSS
* Axios
* React Hooks

---

## ✨ Features

### Backend Features

* REST API for Device Management

  * Add Device
  * List Devices
  * Update Device Status
* Device Health Simulation (UP / DOWN)
* Last Checked Timestamp
* PostgreSQL database integration
* CORS enabled for frontend integration

### Frontend Features

* Login screen (basic structure)
* Device listing page
* Status indicators with color coding

  * 🟢 UP (Green)
  * 🔴 DOWN (Red)
* Responsive UI using Tailwind CSS
* API integration using Axios

---

## 📁 Project Structure

### Backend (Spring Boot)

```
com.system.devicemanagementsystem
 ├── controller
 │   └── DeviceController.java
 ├── model
 │   └── Device.java
 ├── repository
 │   └── DeviceRepository.java
 ├── service
 │   └── DeviceService.java
 └── DeviceManagementSystemApplication.java
```

### Frontend (React)

```
src/
 ├── pages/
 │   └── Devices.jsx
 ├── services/
 │   └── api.js
 ├── App.jsx
 └── main.jsx
```

---

## 🔗 API Endpoints

### Get All Devices

```
GET /api/devices
```

**Response Example:**

```json
[
  {
    "id": 1,
    "name": "Router-1",
    "ip": "192.168.1.1",
    "status": "UP",
    "lastChecked": "2026-02-03T12:00:00"
  }
]
```

---

## 🗄️ Database Schema

**Table:** `device`

| Column       | Type           |
| ------------ | -------------- |
| id           | BIGSERIAL (PK) |
| name         | VARCHAR        |
| ip           | VARCHAR        |
| status       | VARCHAR        |
| last_checked | TIMESTAMP      |

Sample Insert:

```sql
INSERT INTO public.device (name, ip, status, last_checked)
VALUES ('Router-1', '192.168.1.1', 'UP', NOW());
```

---

## ⚙️ Setup Instructions

### Backend Setup

1. Clone the repository
2. Configure PostgreSQL in `application.properties`

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/devicedb
spring.datasource.username=postgres
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

3. Run the backend

```bash
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

### Frontend Setup

1. Navigate to frontend directory
2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔐 Authentication (Planned)

* Basic authentication structure added
* Role-based access (Admin / User) – planned

---

## 🚀 Future Enhancements

* WebSocket-based real-time device status updates
* SNMP / ICMP health checks
* Role-based access control
* Alerts and notifications
* Pagination and search

---

## 👤 Author

**Vaibhaav Kandharkar**
Full Stack Developer (Reactjs / Java Developer)

---

## ✅ Notes

This project focuses on **clean architecture**, **scalable design**, and **enterprise readiness**, rather than over-engineering, and is built to demonstrate real-world full-stack development skills.
