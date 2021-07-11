import { getCustomRepository, UpdateQueryBuilder } from "typeorm";
import { InvestmentType } from "../enum/InvestmentType";
import { InvestmentRepositories } from "../repositories/InvestmentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IInvestmentRequest {
  investment_type: string;
  date: Date;
  value: number;
  user_id: string;
}

class CreateInvestmentService {
  async execute({ investment_type, date, value, user_id }: IInvestmentRequest) {
    const investmentRepositories = getCustomRepository(InvestmentRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = await usersRepositories.findOne(user_id);

    if (!userExists) {
      throw new Error("User does not exists!");
    }

    const investment = investmentRepositories.create({
      investment_type,
      date,
      value,
      user_id,
    });

    await investmentRepositories.save(investment);

    return investment;
  }
}

export { CreateInvestmentService };
