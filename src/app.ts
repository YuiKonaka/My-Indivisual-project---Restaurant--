import express, { Request, Response } from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { router as indexRouter } from "./routes/index.router";
import { router as ownerRouter } from "./routes/owner.router";
import { router as userRouter } from "./routes/user.router";

export const app = express();

// setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setup layout
app.set("layout", path.join(__dirname, "views/layouts/layout"));
app.use(expressEjsLayouts);

// setup to let express know where to find static files are
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/", indexRouter);

app.use("/user", userRouter);
app.use("/owner", ownerRouter);

app.all("*", (req: Request, res: Response) => {
  res
    .status(404)
    .send({ error: `Not Found Route - ${req.method} ${req.path}` });
});
