import express from "express";
import reminderRoutes from "./routes/reminderRoutes.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use("/reminders", reminderRoutes);

// Should be last
app.use(errorHandlerMiddleware)

app.listen(PORT, () => {
  console.log(`Reminders App listening on port ${PORT}`);
});
