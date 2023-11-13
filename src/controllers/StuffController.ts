import { Request, Response } from "express"
import StuffService from "../service/StuffService"

export default new class StuffController {
    add(req: Request, res: Response) {
        StuffService.add(req, res)
    }
    find(req: Request, res: Response) {
        StuffService.find(req, res)
    }

    findOne(req: Request, res: Response) {
        StuffService.findOne(req, res)
    }

    delete(req: Request, res: Response) {
        StuffService.delete(req, res)
    }

    update(req: Request, res: Response) {
        StuffService.update(req, res)
    }

    
}

