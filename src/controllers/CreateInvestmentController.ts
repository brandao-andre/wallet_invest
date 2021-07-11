import { Request, Response } from "express";
import { CreateInvestmentService } from "../services/CreateInvestmentService";

class CreateInvestmentController {
  async handle(request: Request, response: Response) {
    const { investment_type, date, value } = request.body;
    const { user_id } = request;

    const createInvestmentService = new CreateInvestmentService();

    const investment = await createInvestmentService.execute({
      investment_type,
      date,
      value,
      user_id,
    });

    return response.json(investment);
  }
}

export { CreateInvestmentController };
