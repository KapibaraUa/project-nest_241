import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 30, unique: true })
    email: string;

    @Column({ length: 64 })
    password_hash: string;

    @Column({ nullable: true, length: 50 })
    fullname: string;

    @Column({ default: true })
    is_block: boolean;

}
