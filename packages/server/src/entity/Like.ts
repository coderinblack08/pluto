import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Post } from './Post';
import { User } from './User';

@Entity()
export class Like extends BaseEntity {
  @PrimaryColumn()
  postId: number;

  @JoinColumn({ name: 'postId' })
  @ManyToOne(() => Post, { onDelete: 'CASCADE' })
  post: Post;

  @PrimaryColumn()
  userId: number;

  @JoinColumn({ name: 'userId' })
  @ManyToOne(() => User)
  user: User;
}
