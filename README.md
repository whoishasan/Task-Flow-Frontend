# Task Flow

Task Flow" is a responsive task management app where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into 'To-Do,' 'In Progress,' and 'Done,' with real-time synchronization to a database. Featuring a clean, minimalistic UI, Task Flow is optimized for both desktop and mobile devices.

## Live Links

- **Live Demo**: [Project Live Link](https://live-task-flow.netlify.app)

## Dependencies

This project requires the following dependencies to run:

- Node.js
- React
- TailwindCSS
- Firebase
- Express.js
- MongoDB

## How to Install the Project:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) (for local database setup)

**Clone the Repository**

```bash
git clone https://github.com/whoishasan/Task-Flow-Frontend
cd Task-Flow
```

**Installation**

Run the following command to install all required packages:

```bash
npm install
```

**Configure**

Create a .env file in the root directory and add the necessary environment variables. For example:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FIREBASE_CONFIGURATION_KEY=your_configuration_key
```

**Use the command below to start the application locally:**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
