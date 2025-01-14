# Job Board Backend

A simple backend API for a job board built with Node.js, TypeScript, and MySQL. This API allows users to perform CRUD (Create, Read, Update, Delete) operations on job postings.

## Features

- **CRUD for Job Postings**
  - `POST /jobs`: Create a new job posting.
  - `GET /jobs`: Retrieve all job postings.
  - `GET /jobs/:id`: Retrieve a single job posting by ID.
  - `PUT /jobs/:id`: Update a job posting by ID.
  - `DELETE /jobs/:id`: Delete a job posting by ID.
- **Database**: MySQL for storing job data.
- **Swagger API Documentation** for easy interaction with the API.

## Tech Stack

- **Backend**: Node.js with TypeScript
- **Database**: MySQL
- **API Documentation**: Swagger
- **Development**: `ts-node-dev` for live development
- **Deployment**: Vercel

## Getting Started

Follow these steps to get your project up and running locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Yarn](https://yarnpkg.com/) (optional, but recommended)
- MySQL running locally or on a server.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/job-board-backend.git
   cd job-board-backend
   ```

2. Install the dependencies:

   ```bash
   yarn install
   # Or use npm if you prefer
   # npm install
   ```

3. Configure the MySQL database:

   - Create a `.env` file in the root of the project.
   - Add your MySQL credentials and database name:

   ```
   DATABASE_URL="mysql://username:password@localhost:3306/job_board"
   ```
### Development

To start the application in development mode, run:

```bash
yarn dev
# Or use npm
# npm run dev
```

This will start the server on `http://localhost:3000`.

### Build

To compile the TypeScript files into JavaScript, run:

```bash
yarn build
# Or use npm
# npm run build
```

This will output the compiled files into the `dist` directory.

### Production

To run the application in production mode, first build the project and then start the compiled JavaScript:

```bash
yarn build
yarn start
# Or use npm
# npm run build
# npm run start
```

### API Documentation (Swagger)

You can access the API documentation by visiting `http://localhost:3000/api-docs` once the server is running.

---

## Endpoints

### POST /jobs

Create a new job posting.

**Request Body:**

```json
{
  "title": "Software Engineer",
  "company": "TechCorp",
  "location": "Remote",
  "salary": "100000",
  "description": "We are looking for a passionate software engineer."
}
```

**Response:**

- Status: `201 Created`
- Returns the created job posting.

---

### GET /jobs

Get a list of all job postings.

**Response:**

- Status: `200 OK`
- Returns a list of job postings.

---

### GET /jobs/:id

Get a job posting by ID.

**Response:**

- Status: `200 OK`
- Returns a job posting object.

---

### PUT /jobs/:id

Update a job posting by ID.

**Request Body:**

```json
{
  "title": "Senior Software Engineer",
  "company": "TechCorp",
  "location": "Hybrid",
  "salary": "120000",
  "description": "We are looking for a senior software engineer."
}
```

**Response:**

- Status: `200 OK`
- Returns the updated job posting.

---

### DELETE /jobs/:id

Delete a job posting by ID.

**Response:**

- Status: `200 OK`
- Returns a success message.

---
