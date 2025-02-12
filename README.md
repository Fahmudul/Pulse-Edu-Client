# Personal Portfolio & Blog Website

## 🚀 Project Overview
This is a **Personal Portfolio & Blog Website** built using **Next.js** with TypeScript, Tailwind CSS, and MongoDB. The platform showcases personal projects, blogs, and a contact form while also providing an admin dashboard for managing content.

## 🔹 Live Demo
🔗 [Live Website](https://fahmudul-hassan.vercel.app) *(Replace with your deployed link)*

## 🛠️ Tech Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **Deployment**: Vercel (Frontend), Railway/Render (Backend)

---

## 📌 Features
### 🌍 Public Pages
✅ **Home Page (/)**
- Displays name, bio, and profile picture.
- Showcases skills using icons/skill bar.
- Features selected projects.
- Resume download button.

✅ **Projects Page (/projects)**
- Lists all projects with images, descriptions, and links.
- Clicking on a project opens a detailed page (/projects/[id]).

✅ **Blog Page (/blog)**
- Displays blogs fetched from the database.
- Clicking on a blog opens a detailed page (/blog/[id]).

✅ **Contact Page (/contact)**
- Includes a contact form (Name, Email, Message).
- Messages are stored in the database.

---

### 🔑 Dashboard (Only for Logged-in Users)
✅ **Authentication (/dashboard)**
- Social login using NextAuth.
- Only authenticated users can access the dashboard.

✅ **Blog Management (/dashboard/blogs)**
- Create, read, update, and delete (CRUD) blog posts.
- Supports title, content, image, and category fields.

✅ **Project Management (/dashboard/projects)**
- CRUD operations for managing projects.
- Uploads project images, titles, links, and descriptions.

✅ **Message Management (/dashboard/messages)**
- View messages submitted from the contact form.

---

## 🔹 Technical Features
✅ **Dynamic Routing**: Implemented for project and blog details pages.
✅ **API Routes**: Backend handles CRUD operations for blogs, projects, and messages.
✅ **Authentication**: Implemented using NextAuth (Google, GitHub login supported).
✅ **SSR & SSG**: Used based on page requirements for SEO optimization.
✅ **Dark Mode**: Toggle available.
✅ **Markdown Support**: Blogs can be written in Markdown for better formatting.
✅ **Animations**: Framer Motion used for smooth UI interactions.

---

## 📜 Installation & Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_secret_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the project:**
   ```sh
   npm run dev
   ```

---



🎯 **Thank you for checking out my portfolio!** 🚀

