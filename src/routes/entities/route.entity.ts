import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
// @Unique(['module', 'submodule', 'path'])
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  module: string;

  @Column({ nullable: false })
  submodule: string;

  @Column()
  routeOption: string;

  @Column({ nullable: false })
  path: string;

  @CreateDateColumn()
  createAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}
