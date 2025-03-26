import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, comment: '用户名' })
  username: string;

  @Column({ comment: '头像URL' })
  avatar: string;

  @Column('text', { comment: '个人简介' })
  bio: string;

  @Column('json', { comment: '用户社交媒体链接' })
  socialLinks: Array<{ name: string; url: string }>;

  @Column({ length: 100, unique: true, comment: '电子邮箱' })
  slug: string;
}