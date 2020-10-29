import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
@ObjectType()
export class Community extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('varchar')
  name: string;

  @Field()
  @Column()
  about: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  website: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  location?: string;

  @Field(() => [String])
  @Column({ type: 'text', array: true })
  tags: string[];

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  maxParticipants?: number;

  @Field(() => Boolean)
  @Column('bool', { default: 'false' })
  isSchool: boolean;

  @Field(() => Boolean)
  @Column('bool', { default: 'false' })
  isPrivate: boolean;

  @Field(() => Boolean)
  @Column('bool', { default: 'true' })
  emailNotifications: boolean;

  @Field()
  @Column({ default: 0 })
  posts: number;

  @Field()
  @Column()
  creatorId: number;

  @Field()
  @JoinColumn({ name: 'creatorId' })
  @ManyToOne(() => User)
  creator: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
