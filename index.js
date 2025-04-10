import cors from "cors";
import "dotenv/config";
import express from "express";

import authRoute from "./routes/auth.route.js";
import checkoutRoute from "./routes/checkout.route.js";
import pizzaRoute from "./routes/pizza.route.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/pizzas", pizzaRoute);
app.use("/api/checkouts", checkoutRoute);
app.use("/health", (_, res) => {
  res.status(200).json({ status: "OK", message: "Service is running smoothly" });
})
app.use((_, res) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
