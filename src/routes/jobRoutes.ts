import express from "express";
import { getJobs, getJobById, createJob, updateJob, deleteJob } from "../controllers/jobController";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Job:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID of the job
 *         title:
 *           type: string
 *           description: Title of the job
 *         company:
 *           type: string
 *           description: Company offering the job
 *         location:
 *           type: string
 *           description: Job location
 *         salary:
 *           type: number
 *           format: float
 *           description: Salary offered
 *         description:
 *           type: string
 *           description: Detailed job description
 *       required:
 *         - title
 *         - company
 *         - location
 *         - salary
 *         - description
 */

/**
 * @swagger
 * tags:
 *   name: Jobs
 *   description: API for managing job postings
 */

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Retrieve all job postings
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: A list of job postings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 */
router.get("/", getJobs);

/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Retrieve a job posting by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The job ID
 *     responses:
 *       200:
 *         description: A single job posting
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       404:
 *         description: Job not found
 */
router.get("/:id", getJobById);

/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create a new job posting
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The ID of the created job
 */
router.post("/", createJob);

/**
 * @swagger
 * /jobs/{id}:
 *   put:
 *     summary: Update a job posting by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The job ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Job'
 *     responses:
 *       200:
 *         description: Job updated successfully
 */
router.put("/:id", updateJob);

/**
 * @swagger
 * /jobs/{id}:
 *   delete:
 *     summary: Delete a job posting by ID
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The job ID
 *     responses:
 *       204:
 *         description: Job deleted successfully
 */
router.delete("/:id", deleteJob);


router.get("/", getJobs);
router.get("/:id", getJobById);
router.post("/", createJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);


export default router;
