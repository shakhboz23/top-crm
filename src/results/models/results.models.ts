import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Tests } from 'src/test/models/test.models';
import { User } from 'src/user/models/user.models';

interface ResultsAttributes {
  test_id: number;
  user_id: number;
  score: number;
  incorrectAnswers: number[];
  correctAnswers: number[];
}

@Table({ tableName: 'results' })
export class Results extends Model<Results, ResultsAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  user_id: number;

  @BelongsTo(() => User)
  user: User[];

  @ForeignKey(() => Tests)
  @Column({
    type: DataType.INTEGER,
  })
  test_id: number;

  @BelongsTo(() => Tests)
  test: Tests[];

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  score: number;

  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
  })
  incorrectAnswers: number[];

  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
  })
  correctAnswers: number[];
}
