import { MigrationInterface, QueryRunner, Table } from "typeorm";

import { DbTables } from "../../enum/DbTables";

export class CreateInvestments1625944094531 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: DbTables.INVESTMENTS,
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "investment_type",
            type: "varchar",
          },
          {
            name: "value",
            type: "numeric",
          },
          {
            name: "date",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "user_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "FKInvestments",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(DbTables.INVESTMENTS);
  }
}
