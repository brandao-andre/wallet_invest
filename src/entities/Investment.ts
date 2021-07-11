import { Entity, Column, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { DbTables } from "../enum/DbTables";
import { User } from "./User";

@Entity(DbTables.INVESTMENTS)
class Investment {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  investment_type: string;

  @Column()
  date: Date;

  @Column()
  value: number;

  @Column()
  user_id: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  userId: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Investment };
