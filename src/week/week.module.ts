import { Module } from '@nestjs/common';
import { WeekService } from './week.service';
import { WeekController } from './week.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Week } from './models/week.models';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    SequelizeModule.forFeature([Week]), JwtModule,
  ],
  controllers: [WeekController],
  providers: [WeekService],
  exports: [WeekService],
})
export class WeekModule {}
