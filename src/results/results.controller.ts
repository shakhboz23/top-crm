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
import { ResultsService } from './results.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ResultsDto } from './dto/results.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/guard/auth.guard';

@ApiTags('Results')
@Controller('results')
export class ResultsController {
  constructor(
    private readonly resultsService: ResultsService,
    private readonly jwtService: JwtService,
  ) { }

  @ApiOperation({ summary: 'Create a new results' })
  // @UseGuards(AuthGuard)
  @Post('/create')
  // @ApiBearerAuth('JWT-auth')
  async create(
    @Body() resultsDto: ResultsDto,
    @Headers() headers: Record<string, string>,
  ) {
    return this.resultsService.create(resultsDto);
  }

  // @ApiOperation({ summary: 'Get results by ID' })
  // @UseGuards(AuthGuard)
  // @Get('/getById/:id')
  // @ApiBearerAuth('JWT-auth')
  // getById(@Param('id') id: number) {
  //   return this.resultsService.getById(id);
  // }

  // @ApiOperation({ summary: 'Get results users by results ID' })
  // @UseGuards(AuthGuard)
  // @Get('/getResultsUsers/:id')
  // @ApiBearerAuth('JWT-auth')
  // getResultsUsers(@Param('id') id: number) {
  //   return this.resultsService.getResultsUsers(id);
  // }

  @ApiOperation({ summary: 'Get all resultss' })
  @UseGuards(AuthGuard)
  @Get('/')
  @ApiBearerAuth('JWT-auth')
  getAll() {
    return this.resultsService.getAll();
  }
  
  // @ApiOperation({ summary: 'Update results by ID' })
  // @UseGuards(AuthGuard)
  // @Put('/:id')
  // @ApiBearerAuth('JWT-auth')
  // update(
  //   @Param('id') id: number,
  //   @Body() resultsDto: ResultsDto,
  // ) {
  //   return this.resultsService.update(id, resultsDto);
  // }

  @ApiOperation({ summary: 'Delete results' })
  @UseGuards(AuthGuard)
  @Delete('/:id')
  @ApiBearerAuth('JWT-auth')
  deleteResults(@Param('id') id: number) {
    return this.resultsService.delete(id);
  }
}
