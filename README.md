Design Document: Healthcare Portal (MERN Stack)

Project Name: HealthConnect Portal
Version: 1.0
Prepared By: sheethal
Date: 9-11-2025


Project Overview

Objective:
Develop a web-based healthcare portal where patients can book appointments, view medical records, communicate with healthcare providers, and providers can manage schedules, patient records, and consultations.


Users:
Patients: View records, book appointments, receive notifications, chat with providers.
Providers (Doctors, Nurses, Administrators): Manage appointments, patient history, prescriptions, and messages.

Platform: Web-based application, mobile-responsive.

Tech-stacks:- 
Frontend: React.js (with Context API), Tailwind CSS 
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT-based, role-based access control
Deployment:  Nginx, PM2 (for process management) and aws, mongodb 

Optional: WebSockets for real-time chat/notifications


2. Functional Requirements
2.1 Patient Features
Registration & login
View and edit profile
Search for healthcare providers
Book, reschedule, or cancel appointments
Access medical history, lab results, prescriptions
Receive notifications (email, in-app)
Chat with providers (optional real-time chat)
Rate/review providers

2.2 Provider Features
Registration & login (verification required)
Manage profile, availability, and services
View patient list and medical history
Accept or decline appointments
Prescribe medications and add notes
View analytics (number of patients, appointments, etc.)
Messaging with patients

2.3 Admin Features
Manage users (patients and providers)
Moderate content (reviews, messages)
Generate reports
Analytics dashboard

3. Non-Functional Requirements
Performance: Fast response time (<2 seconds for main operations)
Scalability: Handle 10,000+ concurrent users

Security:
JWT authentication with refresh tokens
HTTPS/TLS encryption
Role-based access control
Sensitive data encrypted in MongoDB
Availability: 99.9% uptime using PM2 clustering,nginx and mongodb replication
Maintainability: Modular codebase (routes, controllers, services, models)

4. Architecture Design
4.1 High-Level Architecture
[React Frontend] <--> [Node/Express API] <--> [MongoDB]


Components:
Frontend: React SPA, React Router, context Api for state management
Backend: RESTful APIs with Express, JWT authentication, controllers for patients/providers/admin

Database: MongoDB collections:
Users (patients),
providers (doctors , nurses , admins)
Appointments,
MedicalRecords,
Messages,
Notifications,
Prescriptions,

4.2 Data Flow
User sends a request via frontend.
Request hits Express API routes.
Middleware validates JWT and permissions.
Controller interacts with MongoDB using Mongoose.
Response sent back to frontend.
