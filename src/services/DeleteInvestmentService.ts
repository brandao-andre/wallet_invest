import { getCustomRepository } from "typeorm";
import { InvestmentRepositories } from "../repositories/InvestmentsRepositories";

class DeleteInvestmentService {
  async execute(id: string) {
    const investmentRepositories = getCustomRepository(InvestmentRepositories);
    await investmentRepositories.delete(id);
  }
}

export { DeleteInvestmentService };
