import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Tests } from 'src/test/models/test.models';
import { User } from 'src/user/models/user.models';

interface WeekAttributes {
  user_id: number;
  firstAttendance: boolean;
  secondAttendance: boolean;
  thirdAttendance: boolean;
  listening: boolean;
  lr: boolean;
  reading: boolean;
  grammar: boolean;
  writing: boolean;
  vocabulary: boolean;
  vocabularyR: boolean;
  vocabularyHwT: number;
  listeningA: number;
  readingA: number;
  listeningT: number;
  readingT: number;
  writingT: number;
  speakingT: number;
  firstLis: boolean;
  secondLis: boolean;
  thirdLis: boolean;
  firstRead: boolean;
  secondRead: boolean;
  thirdRead: boolean;
  firstGrammarA: boolean;
  secondGrammarA: boolean;
}

@Table({ tableName: 'week' })
export class Week extends Model<Week, WeekAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  firstAttendance: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  secondAttendance: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  thirdAttendance: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  listening: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  lr: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  reading: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  grammar: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  writing: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  vocabulary: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  vocabularyR: boolean;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  vocabularyHwT: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  listeningA: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  readingA: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  listeningT: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  readingT: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  writingT: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  speakingT: number;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  firstLis: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  secondLis: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  thirdLis: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  firstRead: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  secondRead: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  thirdRead: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  firstGrammarA: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  secondGrammarA: boolean;
}
