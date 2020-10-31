import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './Post';

@Entity()
@ObjectType()
export class Announcement extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  announcement: string;

  @Field()
  @Column()
  postId: number;

  @Field(() => Post)
  @JoinColumn({ name: 'postId' })
  @OneToOne(() => Post, { onDelete: 'CASCADE' })
  post: Post;
}
