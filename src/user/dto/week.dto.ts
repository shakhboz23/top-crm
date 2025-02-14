import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsOptional,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class WeekDto {
  @ApiProperty({
    example: false,
    description: 'First attendance',
  })
  @IsOptional()
  @IsBoolean()
  firstAttendance?: boolean;
 
  @ApiProperty({
    example: false,
    description: 'Second attendance',
  })
  @IsOptional()
  @IsBoolean()
  secondAttendance?: boolean;

  @ApiProperty({
    example: false,
    description: 'Third attendance',
  })
  @IsOptional()
  @IsBoolean()
  thirdAttendance?: boolean;

  @ApiProperty({
    example: false,
    description: 'Listening',
  })
  @IsOptional()
  @IsBoolean()
  listening?: boolean;

  @ApiProperty({
    example: false,
    description: 'Listening Review',
  })
  @IsOptional()
  @IsBoolean()
  lr?: boolean;

  @ApiProperty({
    example: false,
    description: 'Reading',
  })
  @IsOptional()
  @IsBoolean()
  reading?: boolean;

  @ApiProperty({
    example: false,
    description: 'Grammar',
  })
  @IsOptional()
  @IsBoolean()
  grammar?: boolean;

  @ApiProperty({
    example: false,
    description: 'Writing',
  })
  @IsOptional()
  @IsBoolean()
  writing?: boolean;

  @ApiProperty({
    example: false,
    description: 'Vocabulary',
  })
  @IsOptional()
  @IsBoolean()
  vocabulary?: boolean;

  @ApiProperty({
    example: false,
    description: 'Vocabulary Review',
  })
  @IsOptional()
  @IsBoolean()
  vocabularyR?: boolean;

  @ApiProperty({
    example: 0,
    description: 'Vocabulary Homework Total',
  })
  @IsOptional()
  @IsNumber()
  vocabularyHwT?: number;

  @ApiProperty({
    example: 0,
    description: 'Listening Attempt',
  })
  @IsOptional()
  @IsNumber()
  listeningA?: number;

  @ApiProperty({
    example: 0,
    description: 'Reading Attempt',
  })
  @IsOptional()
  @IsNumber()
  readingA?: number;

  @ApiProperty({
    example: 0,
    description: 'Listening Total',
  })
  @IsOptional()
  @IsNumber()
  listeningT?: number;

  @ApiProperty({
    example: 0,
    description: 'Reading Total',
  })
  @IsOptional()
  @IsNumber()
  readingT?: number;

  @ApiProperty({
    example: 0,
    description: 'Writing Total',
  })
  @IsOptional()
  @IsNumber()
  writingT?: number;

  @ApiProperty({
    example: 0,
    description: 'Speaking Total',
  })
  @IsOptional()
  @IsNumber()
  speakingT?: number;

  @ApiProperty({
    example: false,
    description: 'First Listening',
  })
  @IsOptional()
  @IsBoolean()
  firstLis?: boolean;

  @ApiProperty({
    example: false,
    description: 'Second Listening',
  })
  @IsOptional()
  @IsBoolean()
  secondLis?: boolean;

  @ApiProperty({
    example: false,
    description: 'Third Listening',
  })
  @IsOptional()
  @IsBoolean()
  thirdLis?: boolean;

  @ApiProperty({
    example: false,
    description: 'First Reading',
  })
  @IsOptional()
  @IsBoolean()
  firstRead?: boolean;

  @ApiProperty({
    example: false,
    description: 'Second Reading',
  })
  @IsOptional()
  @IsBoolean()
  secondRead?: boolean;

  @ApiProperty({
    example: false,
    description: 'Third Reading',
  })
  @IsOptional()
  @IsBoolean()
  thirdRead?: boolean;

  @ApiProperty({
    example: false,
    description: 'First Grammar Attempt',
  })
  @IsOptional()
  @IsBoolean()
  firstGrammarA?: boolean;

  @ApiProperty({
    example: false,
    description: 'Second Grammar Attempt',
  })
  @IsOptional()
  @IsBoolean()
  secondGrammarA?: boolean;
}
