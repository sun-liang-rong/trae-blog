import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ comment: '分类ID' })
  id: number;

  @Column({ length: 50, comment: '分类名称' })
  name: string;

  @Column({ length: 100, unique: true, comment: 'URL标识符' })
  slug: string;
}