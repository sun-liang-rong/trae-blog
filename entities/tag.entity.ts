import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn({ comment: '标签ID' })
  id: number;

  @Column({ length: 50, comment: '标签名称' })
  name: string;

  @Column({ length: 100, unique: true, comment: 'URL标识符' })
  slug: string;

  @Column({ length: 7, comment: '标签颜色代码（十六进制）' })
  color: string;
}