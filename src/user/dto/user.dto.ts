import { ApiProperty } from '@nestjs/swagger';
import {
    IsObject,
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsPhoneNumber,
    IsString,
} from 'class-validator';
import { WeekDto } from './week.dto';

export class UserDto {
    @ApiProperty({
        example: 'John Doe',
        description: 'Full name of user',
    })
    @IsOptional()
    @IsString()
    fullName?: string;

    @ApiProperty({
        example: '+998991422303',
        description: 'Phone number of user',
    })
    @IsOptional()
    @IsPhoneNumber()
    phone?: string;

    @ApiProperty({
        example: 'Login',
        description: 'Login of user',
    })
    @IsNotEmpty()
    @IsString()
    login: string;

    @ApiProperty({
        example: 'password2303',
        description: 'Password of user',
    })
    @IsNotEmpty()
    @IsString()
    password: string;

    @ApiProperty({
        example: 1,
        description: 'Group name of user',
    })
    @IsNotEmpty()
    @IsNumber()
    group_id: number;

    @ApiProperty({
        example: false,
        description: 'Payment status of user',
        required: false,
    })
    @IsOptional()
    @IsBoolean()
    firstMonthPayment?: boolean;

    @ApiProperty({
        example: false,
        description: 'Payment status of user',
        required: false,
    })
    @IsOptional()
    @IsBoolean()
    secondMonthPayment?: boolean;

    @ApiProperty({
        example: 0,
        description: 'Homework of user',
        required: false,
    })
    @IsOptional()
    @IsNumber()
    homework?: number;

    @ApiProperty({
        example: 0,
        description: 'Vocabulary of user',
        required: false,
    })
    @IsOptional()
    @IsNumber()
    vocabulary?: number;

    @ApiProperty({
        example: false,
        description: 'AttendanceDay1 of user',
        required: false,
    })
    @IsOptional()
    @IsBoolean()
    attendanceDay1?: boolean;

    @ApiProperty({
        example: false,
        description: 'AttendanceDay2 of user',
        required: false,
    })
    @IsOptional()
    @IsBoolean()
    attendanceDay2?: boolean;

    @ApiProperty({
        example: false,
        description: 'AttendanceDay3 of user',
        required: false,
    })
    @IsOptional()
    @IsBoolean()
    attendanceDay3?: boolean;

    @ApiProperty({
        example: {
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
        },
        description: 'week1 of user',
        required: false,
    })
    @IsOptional()
    @IsObject()
    week1?: WeekDto;

    @ApiProperty({
        example: {
            firstAttendance: false,
            secondAttendance: false,
            thirdAttendance: false,
        },
        description: 'week2 of user',
        required: false,
    })
    @IsOptional()
    @IsObject()
    week2?: WeekDto;

    @ApiProperty({
        example: {
            firstAttendance: false,
            secondAttendance: false,
            thirdAttendance: false,
        },
        description: 'week3 of user',
        required: false,
    })
    @IsOptional()
    @IsObject()
    week3?: WeekDto;

    @ApiProperty({
        example: {
            firstAttendance: false,
            secondAttendance: false,
            thirdAttendance: false,
        },
        description: 'week4 of user',
        required: false,
    })
    @IsOptional()
    @IsObject()
    week4?: WeekDto;

    @ApiProperty({
        example: {
            firstAttendance: false,
            secondAttendance: false,
            thirdAttendance: false,
        },
        description: 'week5 of user',
        required: false,
    })
    @IsOptional()
    @IsObject()
    week5?: WeekDto;

    @ApiProperty({
        example: {
            firstAttendance: false,
            secondAttendance: false,
            thirdAttendance: false,
        },
        description: 'week6 of user',
        required: false,
    })
    @IsOptional()
    @IsObject()
    week6?: WeekDto;

    @ApiProperty({
        example: {
            firstAttendance: false,
            secondAttendance: false,
            thirdAttendance: false,
        },
        description: 'week7 of user',
        required: false,
    })
    @IsOptional()
    @IsObject()
    week7?: WeekDto;

    @ApiProperty({
        example: {
            firstAttendance: false,
            secondAttendance: false,
            thirdAttendance: false,
        },
        description: 'week8 of user',
        required: false,
    })
    @IsOptional()
    @IsObject()
    week8?: WeekDto;
}
