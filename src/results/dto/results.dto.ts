import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class ResultsDto {
  @ApiProperty({
    example: 1,
    description: 'Results user_id',
  })
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @ApiProperty({
    example: 1,
    description: 'Results test_id',
  })
  @IsNotEmpty()
  @IsNumber()
  test_id: number;

  @ApiProperty({
    example: 18,
    description: 'Results score',
  })
  @IsNotEmpty()
  @IsNumber()
  score: number;

  @ApiProperty({
    example: [1, 2, 3],
    description: 'Results incorrectAnswers',
  })
  @IsNotEmpty()
  @IsArray()
  incorrectAnswers: number[];

  @ApiProperty({
    example: [4, 5, 6],
    description: 'Results incorrectAnswers',
  })
  @IsNotEmpty()
  @IsArray()
  correctAnswers: number[];
}
