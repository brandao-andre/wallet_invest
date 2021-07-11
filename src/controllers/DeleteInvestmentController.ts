import { Request, Response } from "express";
import { DeleteInvestmentService } from "../services/DeleteInvestmentService";

class DeleteInvestmentController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const deleteInvestmentService = new DeleteInvestmentService();

    await deleteInvestmentService.execute(id);

    return response.status(200).send();
  }
}

export { DeleteInvestmentController };
