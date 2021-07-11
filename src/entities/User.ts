import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { v4 as uuid } from "uuid";
import { DbTables } from "../enum/DbTables";

@Entity(DbTables.USERS)
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
