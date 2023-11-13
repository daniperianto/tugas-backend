import StuffInterface from './src/interface/stuff';
import { Stuff } from './src/mocks/stuff';
import express, { Request, Response } from "express"
import router from './src/routes';


async function Start() : Promise<void> {
    try {
        const app = express()
        const PORT = 5000

        app.use(express.json())
        app.use("/api/v1", router)
        app.listen(PORT, () => console.log("Server running"))
    } catch(error) {
        console.log(error);
        process.exit(1)
    }
}

void Start()
