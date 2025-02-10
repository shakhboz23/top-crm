import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Headers,
  UseGuards,
} from '@nestjs/common';
import { WeekService } from './week.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { WeekDto } from './dto/week.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/guard/auth.guard';

@ApiTags('Week')
@Controller('week')
export class WeekController {
  constructor(
    private readonly weekService: WeekService,
    private readonly jwtService: JwtService,
  ) { }

  @ApiOperation({ summary: 'Create a new week' })
  @UseGuards(AuthGuard)
  @Post('/create')
  @ApiBearerAuth('JWT-auth')
  async create(
    @Body() weekDto: WeekDto,
    @Headers() headers: Record<string, string>,
  ) {
    return this.weekService.create(weekDto);
  }

  // @ApiOperation({ summary: 'Get week by ID' })
  // @UseGuards(AuthGuard)
  // @Get('/getById/:id')
  // @ApiBearerAuth('JWT-auth')
  // getById(@Param('id') id: number) {
  //   return this.weekService.getById(id);
  // }

  // @ApiOperation({ summary: 'Get week users by week ID' })
  // @UseGuards(AuthGuard)
  // @Get('/getWeekUsers/:id')
  // @ApiBearerAuth('JWT-auth')
  // getWeekUsers(@Param('id') id: number) {
  //   return this.weekService.getWeekUsers(id);
  // }

  @ApiOperation({ summary: 'Get all weeks' })
  @UseGuards(AuthGuard)
  @Get('/')
  @ApiBearerAuth('JWT-auth')
  getAll() {
    return this.weekService.getAll();
  }

  @ApiOperation({ summary: 'Update week by ID' })
  @UseGuards(AuthGuard)
  @Put('/:id')
  @ApiBearerAuth('JWT-auth')
  update(
    @Param('id') id: number,
    @Body() weekDto: WeekDto,
  ) {
    return this.weekService.update(id, weekDto);
  }

  @ApiOperation({ summary: 'Delete week' })
  @UseGuards(AuthGuard)
  @Delete('/:id')
  @ApiBearerAuth('JWT-auth')
  deleteWeek(@Param('id') id: number) {
    return this.weekService.delete(id);
  }
}
