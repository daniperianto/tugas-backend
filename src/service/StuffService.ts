import { Request, Response } from "express"
import StuffInterface from "../interface/stuff"
import Stuff from "../database/model/stuff"

export default new class StuffService {
    
    
    async find(req: Request, res: Response): Promise<Response> {
        try {
            const stuff = await Stuff.findAll()

            return res.status(200).json({
                message: "Success",
                data: stuff
            })
        } catch(error) {
            console.log(error)
            return res.status(500).json({message: "Something error while finding all stuff"})
        }
    }
    
    async findOne(req: Request, res: Response): Promise<Response> {
        const id: number = Number(req.params.id)

        const data = await Stuff.findByPk(id);

        if (data == undefined) return res.status(400).json({message: "Data not found"})

        return res.status(200).json({
            message: "Success",
            data: data
        })
    }

    async add(req: Request, res: Response): Promise<Response> {
        const data = req.body

        let dateBought: Date | undefined = data.dateBought
        if(dateBought == undefined) dateBought = new Date

        const stuff = await Stuff.create({
            name: data.name,
            price: data.price,
            dateBought: dateBought
        }, {})

        if (stuff == undefined) return res.status(400).json({message: "Error creating data"})

        return res.status(200).json({
            message: "Success",
            data: stuff
        })
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const id: number = Number(req.params.id)

        const result = await Stuff.destroy({
            where: {
                id: id
            }
        });
        console.log(result)

        if (result != 1) return res.status(400).json({message: "Error while deleting data"})

        return res.status(200).json({
            message: "Success",
        })
    }

    async update(req: Request, res: Response): Promise<Response> {
        const id = req.params.id
        const json = req.body
        
        let name: string | undefined;
        let price: number | undefined;
        let dateBought: Date | undefined;
        const data = await Stuff.findByPk(id);
        if(json.name == undefined) name = data?.name
        else name = json.name
        if(json.price == undefined) price = data?.price
        else price = json.price
        if(json.dateBought == undefined) dateBought = data?.dateBought
        else dateBought = json.dateBought
        
        

        const stuff = await Stuff.update({
            name: name,
            price: price,
            dateBought: dateBought,
            updatedAt: new Date
        }, {
            where: {
                id: id
            }
        })

        if (stuff == undefined) return res.status(400).json({message: "Error updating data"})

        return res.status(200).json({
            message: "Success",
        })
    }
}

