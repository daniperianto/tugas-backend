import { Router } from "express"
import StuffController from "../controllers/StuffController"

const router = Router()

router.get("/stuff", StuffController.find)
router.get("/stuff/:id", StuffController.findOne)
router.post("/stuff/add", StuffController.add)
router.delete("/stuff/:id", StuffController.delete)
router.patch("/stuff/:id", StuffController.update)

export default router