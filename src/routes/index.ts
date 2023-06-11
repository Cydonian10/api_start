import { Application } from "express";
import exampleRoute from './example.route';

export class Routes {

    constructor(private app:Application) {

    }
    routes() {
        this.app.use("/",exampleRoute)
    }

}