import "reflect-metadata"
import express, { Application } from 'express';
import { Server, createServer } from 'http';
import cors from 'cors';
import { Routes } from '../routes';
import { AppDataSource } from "../database/data-source";
import { cwd } from "process";
import path from "path";

export class MainServer {
    private port:number = 3000;
    private app:Application = express()
    private httpServer: Server = createServer(this.app)

    private middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use("/",express.static(path.join(cwd(),"public")))
        this.routes()
    }

    private routes() {
        new Routes(this.app).routes()
    }
    
    private async database() {
        await AppDataSource.initialize()
        console.log("[Database] is inicialize");
    }

    async listenServer() {
        await this.database()
        this.middlewares()
        this.httpServer.listen(this.port, () => {
            console.log(`[ Listen Server ] http://localhost:${this.port}`);
        });
    }

}
