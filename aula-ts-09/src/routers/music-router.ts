import { Router } from "express";
import musicController from "../controllers/music-controller";
import validateSchema from "../middlewares/validateSchema";
import { musicSchema } from "../schemas/music-schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema(musicSchema), musicController.createMusic);

export default musicRouter;