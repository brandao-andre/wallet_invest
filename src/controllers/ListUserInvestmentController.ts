import { Request, Response } from "express";
import { ListUserInvestmentService } from "../services/ListUserInvestmentService";

class ListUserInvestmentController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserInvestmentService = new ListUserInvestmentService();

    const investment = await listUserInvestmentService.execute(user_id);

    return response.json(investment);
  }
}

export { ListUserInvestmentController };
