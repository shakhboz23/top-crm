import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    example: 'admin',
    description: 'Login of user',
  })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({
    example: 'admin',
    description: 'Password of user',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
