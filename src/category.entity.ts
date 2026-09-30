import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';
 
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column({ length: 20 })
  title: string;
 
  @Column({ unique: true, length: 30 })
  slug: string;
 
  @Column({ type: 'varchar', nullable: true })
  image: string | null;
  
  @Column({nullable: true })
  description: string;
 
  @Column({ default: true })
  is_show: boolean;
 
  @Column({ type: 'integer', nullable: true })
  parent_id: number | null;
}
 