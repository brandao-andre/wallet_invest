import { Repository, EntityRepository } from "typeorm";
import { Investment } from "../entities/Investment";

@EntityRepository(Investment)
class InvestmentRepositories extends Repository<Investment> {}

export { InvestmentRepositories };
