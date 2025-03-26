import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, comment: '项目名称' })
  name: string;

  @Column({ type: 'text', comment: '项目描述' })
  description: string;

  @Column({ nullable: true, comment: '封面图URL' })
  coverImage: string;

  @Column({ type: 'date', comment: '项目开始日期' })
  startDate: Date;

  @Column({ type: 'date', nullable: true, comment: '项目结束日期' })
  endDate: Date;

  @Column({ length: 200, nullable: true, comment: '项目访问URL' })
  projectUrl: string;

  @Column({ length: 100, unique: true, comment: 'URL标识符' })
  slug: string;

  @CreateDateColumn({ comment: '创建时间' })
  createdAt: Date;

  @Column({ type: 'simple-array', comment: '使用的技术栈列表' })
  techStack: string[];
}