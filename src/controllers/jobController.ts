import { Request, Response } from "express";
import pool from "../models/db";

export const getJobs = async (req: Request, res: Response) => {
    const [rows] = await pool.query("SELECT * FROM jobs");
    res.json(rows);
};

export const getJobById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM jobs WHERE id = ?", [id]);
    res.json(rows);
};

export const createJob = async (req: Request, res: Response) => {
    const { title, company, location, salary, description } = req.body;
    const [result] = await pool.query("INSERT INTO jobs (title, company, location, salary, description) VALUES (?, ?, ?, ?, ?)",
        [title, company, location, salary, description]);
    res.status(201).json({ id: result });
};

export const updateJob = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, company, location, salary, description } = req.body;
    await pool.query("UPDATE jobs SET title = ?, company = ?, location = ?, salary = ?, description = ? WHERE id = ?",
        [title, company, location, salary, description, id]);
    res.sendStatus(200);
};

export const deleteJob = async (req: Request, res: Response) => {
    const { id } = req.params;
    await pool.query("DELETE FROM jobs WHERE id = ?", [id]);
    res.sendStatus(204);
};
