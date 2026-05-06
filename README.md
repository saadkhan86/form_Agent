# Storino 

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?size=28&duration=3000&color=00F7FF&center=true&vCenter=true&width=600&lines=Storino+-+AI+Requirement+Collector;Intelligent+Form+Automation;Real-time+AI+Agent+Workflow;Seamless+Data+Gathering;Your+AI+Assistant+for+Jobs" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/API-REST-blue?style=for-the-badge" alt="API" />
  <img src="https://img.shields.io/badge/Architecture-Agent--Based-purple?style=for-the-badge" alt="Architecture" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.io" />
</p>

---

##  Overview

**Storino** is an advanced AI-powered requirement collector designed to streamline data gathering and form-filling processes. Built with a modern Node.js backend and an agent-based architecture, Storino automates user workflows, making it ideal for job applications, survey collection, and complex data entry tasks.

##  Key Features

-  **AI-Driven Collection**: Intelligent agent logic to gather specific requirements from users.
-  **Real-time Interaction**: Seamless communication using Socket.io for live AI-user dialogues.
-  **Automated Form Handling**: Simplified logic to create and manage user-submitted data.
-  **Robust Backend**: Powered by Express.js and TypeScript for a scalable and type-safe environment.
-  **Persistent Storage**: MongoDB integration via Mongoose for efficient data management.

##  Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (Mongoose ODM)
- **Real-time**: Socket.io
- **Development**: Nodemon, TSX

##  Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/saadkhan86/form_Agent.git
   cd form_Agent
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add:
   ```env
   PORT=8080
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the application**:
   ```bash
   # Development mode
   npm run dev
   ```

##  Project Structure

```text
src/
├── connection/     # Database connection setup
├── controller/     # Request handlers
├── interfaces/     # TypeScript interfaces
├── middleware/     # Custom middlewares
├── models/         # Mongoose models
├── repositories/   # Data access layer
├── router/         # API routes
├── services/       # Business logic & Socket services
└── index.ts        # Application entry point
```

##  Author

**Saad Muhammad Bin Ramzan**

---

<p align="center">
  Built with ❤️ for better user workflows.
</p>
