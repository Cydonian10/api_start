import { Request, Response, Router } from "express";

const router = Router()

router.get("/", (req:Request,res:Response) => {
    res.send("Hola mudno")
})

export default router
