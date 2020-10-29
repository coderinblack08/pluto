import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Announcement } from './Announcement';
import { Community } from './Community';

@Entity()
@ObjectType()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ default: 0 })
  comments: number;

  @Field()
  @Column({ default: 0 })
  likes: number;

  @Field()
  @Column()
  communityId: string;

  @Field(() => Community)
  @JoinColumn({ name: 'communityId' })
  @ManyToOne(() => Community)
  community: Community;

  @Field(() => Announcement)
  @JoinColumn()
  @OneToOne(() => Announcement)
  announcement: Announcement;

  @Field(() => String)
  @UpdateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
