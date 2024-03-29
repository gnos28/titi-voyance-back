import express from "express";
import createCheckoutSessionController from "../controllers/createCheckoutSessionController";

const router = express.Router();

router.post("/", createCheckoutSessionController.create);

export default router;
