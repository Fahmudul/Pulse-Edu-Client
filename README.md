# Pulse Edu 🎓

## Find & Connect with the Best Tutors

[![Live Site](https://img.shields.io/badge/Live%20Site-Pulse%20Edu-blue)](https://pulse-edu-verse.vercel.app)
[![Frontend Repo](https://img.shields.io/badge/Frontend-GitHub-green)](https://github.com/Fahmudul/Pulse-Edu-Client)
[![Backend Repo](https://img.shields.io/badge/Backend-GitHub-orange)](https://github.com/Fahmudul/Pulse-Edu-Backend)

### 🚀 Project Overview
Pulse Edu is a **tutor-student** marketplace where students can find and connect with expert tutors, book sessions, and manage their learning journey. Tutors can create profiles, list subjects, and manage their availability.

---

## ERD

![image](https://github.com/user-attachments/assets/6f219465-7767-48f2-8958-b4df8640e6dc)


---
## 🔥 Core Features
### **Public Routes**
#### 🏠 Home Page
- Hero section with a search bar for finding tutors by **subject, grade, or name**.
- Highlights features like **"Find Tutors Fast," "Secure Payments," and "Verified Profiles."**
- Student & Tutor **Call-to-action buttons**.

#### 🔍 Browse Tutors
- **Filters**: Subject, rating, hourly rate, availability, location.
- **Sorting**: Relevance, rating, price, newest profiles.
- Displays tutor cards with **profile details, rating, subjects, hourly rate**.

#### 👨‍🏫 Tutor Profile
- **Bio** with qualifications and teaching approach.
- **Subjects** taught & hourly **rates**.
- **Student reviews & ratings**.
- **Availability calendar** for bookings.
- **Booking button** for instant scheduling.

#### ℹ️ About Us
- Platform **mission, vision, and success stories**.
- Details about **founders and team**.

#### ❓ FAQ
- Common questions on **tutoring, payments, session cancellations**.

#### 📰 News/Blog
- **Educational tips, industry news, and platform updates**.
- Users can **search for articles**.

---

### **Private Routes**
#### **Student Dashboard**
✅ Manage **profile, past bookings, payments**
✅ Leave **reviews for tutors**
✅ Access **subjects currently enrolled in**
✅ Make **session payments**
✅ View **payment history**
✅ View **scheduled teachers**
✅ Access **settings**

#### **Tutor Dashboard**
✅ Manage **profile, booking requests, earnings**
✅ Set **availability slots (with add availability modal)**
✅ Track **earnings**
✅ Handle **booking requests**
✅ Access **settings**

#### **Booking & Payment**
- Secure **checkout page**.
- Payments handled via **Stripe**.
- Tutors receive **earnings updates**.
- **Automatic email notifications** upon successful payment (students will receive confirmation emails).
- **A student must register with a real Google account** to receive payment confirmation and calendar schedule confirmation via Gmail.

---

## 🛠️ Tech Stack
### **Frontend**
- ⚛️ **Next.js 15** (SEO optimized, SSR/SSG)
- 💙 **TypeScript**
- 🎨 **Tailwind CSS**

### **Backend**
- 🟢 **Node.js/Express** (REST API)
- 🍃 **MongoDB/Mongoose**
- 🔐 **JWT & bcrypt** (Secure authentication)
- 📧 **Nodemailer for automatic email notifications**

---

## 🔑 API Routes
### **Teacher Routes**
- `/save-availability` - Save teacher's availability.
- `/get-teacher-details/:id` - Get single teacher details.
- `/get-teacher-calendar/:id` - Fetch teacher's Google Calendar schedule.
- `/get-all-teachers` - Fetch all tutors.
- `/update-information` - Update teacher profile.

### **Student Routes**
- `/create-subject` - Create subject.
- `/get-subjects` - Retrieve all subjects.

### **Payment Routes**
- `/create-payment-intent` - Initiate payment checkout.
- `/confirm-payment` - Confirm payment status and trigger **automatic email notifications**.

### **Booking Routes**
- `/create-booking-request` - Create a booking request.
- `/accept-booking-request/:id` - Accept student request.
- `/get-bookings/:teacherId` - Fetch all teacher's bookings.

### **Auth Routes**
- `/login` - User login.
- `/register` - User registration (requires **real Gmail account** for email notifications).
- `/find-user` - Find user details.

---

## 📌 Google Calendar Integration
✅ **Tutors must log in with their Google account** to sync schedules.
✅ Students can directly book **available slots**, automatically updating the tutor's Google Calendar.
✅ Tutors can manage availability & prevent double bookings.
✅ **A student must register with a real Google account** to receive payment confirmation and calendar schedule confirmation via Gmail.

---

## 🔐 Test User Account (Google Login Required For Teacher Only)
📌 **Since the app is not yet published by Google, use the following test account:**
- **Email:** 
- **Password:** 

---

## 📜 Features Not Implemented
❌ **Admin approval for tutors**
❌ **Live chat (Socket.io)**

---

## 🎯 Future Enhancements
- ✅ **Introduce AI-based tutor recommendations**
- ✅ **Enhanced admin dashboard for better platform control**
- ✅ **Add real-time student-tutor messaging**

---

## 📢 Contribution & Feedback
We welcome contributions! Please submit pull requests or open issues in our repositories.

📩 **For any inquiries or feedback, reach out to us!**

