import express, { Request, Response } from "express";
import cors from "cors";
import { createItinerariesController } from "./use-case/itineraries";
import { createAcommodationUseCaseController } from "./use-case/acommodation";
class App {
  private app = express();

  constructor() {
    this.configs();
    this.routes();
  }

  configs() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.post('/itinerary', (request: Request, response: Response) => {
      return createItinerariesController.handle(request, response);
    });

    this.app.post('/acommodation', (request: Request, response: Response) => {
      return createAcommodationUseCaseController.handle(request, response);
    });
  }

  listen(port?: number) {
    this.app.listen(port || 3000, () => {
      console.log("Server is running on port 3000");
    });
  }

} export { App };