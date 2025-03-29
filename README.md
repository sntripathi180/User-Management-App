# User Management App

This project is a simple **User Management App** built with **React.js** and **Tailwind CSS**. It includes a login system where users can log in using their credentials and manage people in his/her list.

---

##  Features

-  **Token-Based Authentication** stored in local storage
-  **Protected Routes** (users cannot access the login page if already authenticated)
-  **API Integration** using Axios

---

##  Tech Stack

- **React.js** - Frontend Framework
- **React Router** - For Routing
- **Axios** - API Calls
- **Tailwind CSS** - Styling

---

## Setup Guide

### 1️. Clone the Repository
```sh
git clone https://github.com/sntripathi180/User-Management-App.git
cd User-Management-App
```

### 2️. Install Dependencies
```sh
npm install
```

### 3️. Set Up Environment Variables
Create a `.env` file in the root directory and add your API URL:
```sh
VITE_BASE_URL=https://reqres.in/
```

### 4️. Start the Development Server
```sh
npm run dev
```
The application will run at `http://localhost:5173/`.

---

## API Documentation
## `/` Endpoint

User login

## `/userList` Endpoint

List all the people in user's list