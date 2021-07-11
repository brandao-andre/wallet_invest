import { getCustomRepository } from "typeorm";
import { InvestmentRepositories } from "../repositories/InvestmentsRepositories";

class ListUserInvestmentService {
  async execute(user_id: string) {
    const investmentRepositories = getCustomRepository(InvestmentRepositories);

    const investment = await investmentRepositories.find({
      where: {
        user_id: user_id,
      },
      order: {
        date: "DESC",
      },
    });

    return investment;
  }
}

export { ListUserInvestmentService };
