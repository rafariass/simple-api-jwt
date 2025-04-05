import { Router } from "express";
import { pizzaController } from "../controllers/pizza.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(authMiddleware);
router.get("/", pizzaController.readPizzas);
router.get("/:id", pizzaController.readPizza);

export default router;
