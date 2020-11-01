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
import { User } from './User';

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

  @Field({ nullable: true })
  @Column({ nullable: true })
  announcementId?: number;

  @Field(() => Announcement)
  @JoinColumn({ name: 'announcementId' })
  @OneToOne(() => Announcement, { onDelete: 'CASCADE' })
  announcement: Announcement;

  @Field()
  @Column({ default: 'false' })
  pinned: boolean;

  @Field()
  isLiked: boolean;

  @Field()
  @Column()
  creatorId: number;

  @Field()
  @JoinColumn({ name: 'creatorId' })
  @ManyToOne(() => User)
  creator: User;

  @Field(() => String)
  @UpdateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
