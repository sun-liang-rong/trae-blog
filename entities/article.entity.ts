import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Category } from './category.entity';
import { Tag } from './tag.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200, comment: '文章标题' })
  title: string;

  @Column('text', { comment: '文章内容' })
  content: string;

  @Column({ nullable: true, comment: '封面图片URL' })
  coverImage: string;

  @Column({ default: false, comment: '是否置顶' })
  isPinned: boolean;

  @CreateDateColumn()
  publishDate: Date;

  @Column({ length: 100, unique: true })
  slug: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @UpdateDateColumn()
  updatedAt: Date;
}