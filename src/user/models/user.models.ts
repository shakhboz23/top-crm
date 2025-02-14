import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Group } from 'src/group/models/group.models';
import { Results } from 'src/results/models/results.models';
import { WeekDto } from '../dto/week.dto';
// import { Week } from 'src/week/models/week.models';

export enum userRole {
  student = 'student',
  teacher = 'teacher',
}

export const defaultVal: WeekDto = {
  firstAttendance: false,
  secondAttendance: false,
  thirdAttendance: false,
  listening: false,
  lr: false,
  reading: false,
  grammar: false,
  writing: false,
  vocabulary: false,
  vocabularyR: false,
  vocabularyHwT: 0,
  listeningA: 0,
  readingA: 0,
  listeningT: 0,
  readingT: 0,
  writingT: 0,
  speakingT: 0,
  firstLis: false,
  secondLis: false,
  thirdLis: false,
  firstRead: false,
  secondRead: false,
  thirdRead: false,
  firstGrammarA: false,
  secondGrammarA: false,
}

interface UserAttributes {
  fullName: string;
  phone: string;
  login: string;
  hashed_password: string;
  group_id: number;
  firstMonthPayment: boolean;
  secondMonthPayment: boolean;
  homework: number;
  vocabulary: number;
  attendanceDay1: boolean;
  attendanceDay2: boolean;
  attendanceDay3: boolean;
  role: userRole;
  week1: WeekDto;
  week2: WeekDto;
  week3: WeekDto;
  week4: WeekDto;
  week5: WeekDto;
  week6: WeekDto;
  week7: WeekDto;
  week8: WeekDto;
}

@Table({ tableName: 'user' })
export class User extends Model<User, UserAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  fullName: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  login: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;

  // @Column({
  //   type: DataType.STRING,
  // })
  // groupName: string;

  @ForeignKey(() => Group)
  @Column({
    type: DataType.INTEGER,
  })
  group_id: number;

  @BelongsTo(() => Group)
  group: Group[];

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  firstMonthPayment: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  secondMonthPayment: boolean;

  @Column({
    type: DataType.INTEGER,
  })
  homework: number;

  @Column({
    type: DataType.INTEGER,
  })
  vocabulary: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  attendanceDay1: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  attendanceDay2: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  attendanceDay3: boolean;

  @Column({
    type: DataType.STRING,
    defaultValue: userRole.student,
  })
  role: userRole;

  @Column({
    type: DataType.JSONB,
    defaultValue: { ...defaultVal }
  })
  week1: WeekDto;

  @Column({
    type: DataType.JSONB,
    defaultValue: { ...defaultVal }
  })
  week2: WeekDto;

  @Column({
    type: DataType.JSONB,
    defaultValue: { ...defaultVal }
  })
  week3: WeekDto;

  @Column({
    type: DataType.JSONB,
    defaultValue: { ...defaultVal }
  })
  week4: WeekDto;

  @Column({
    type: DataType.JSONB,
    defaultValue: { ...defaultVal }
  })
  week5: WeekDto;

  @Column({
    type: DataType.JSONB,
    defaultValue: { ...defaultVal }
  })
  week6: WeekDto;

  @Column({
    type: DataType.JSONB,
    defaultValue: { ...defaultVal }
  })
  week7: WeekDto;

  @Column({
    type: DataType.JSONB,
    defaultValue: { ...defaultVal }
  })
  week8: WeekDto;

  @HasMany(() => Results, {
    onDelete: 'CASCADE',
    hooks: true,
  })
  results: Results[];
}