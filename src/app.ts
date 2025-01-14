import express from "express";
import jobRoutes from "./routes/jobRoutes";

const app = express();
app.use(express.json());
app.use("/jobs", jobRoutes);

export default app;
