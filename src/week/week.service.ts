import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Week } from './models/week.models';
import { InjectModel } from '@nestjs/sequelize';
import { WeekDto } from './dto/week.dto';
import { User } from 'src/user/models/user.models';

@Injectable()
export class WeekService {
  constructor(
    @InjectModel(Week) private weekRepository: typeof Week,
  ) { }

  async create(
    weekDto: WeekDto,
  ): Promise<object> {
    try {
      const week = await this.weekRepository.create(weekDto);
      return week;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getAll(): Promise<object> {
    try {
      return this.weekRepository.findAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getById(id: number): Promise<object> {
    try {
      const weeks = await this.weekRepository.findOne({
        where: { id },
      });
      if (!weeks) {
        throw new NotFoundException('Week not found');
      }
      return weeks;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getWeekUsers(id: number): Promise<object> {
    try {
      const weeks = await this.weekRepository.findOne({
        where: { id },
        include: { model: User }
      });
      if (!weeks) {
        throw new NotFoundException('Week not found');
      }
      return weeks;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(
    id: number,
    weekDto: WeekDto,
  ): Promise<object> {
    try {
      const week = await this.weekRepository.findByPk(id);
      if (!week) {
        throw new NotFoundException('Week not found');
      } 
      const update = await this.weekRepository.update(
        weekDto,
        {
          where: { id },
          returning: true,
        },
      );
      return update[1][0];
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async delete(id: number): Promise<object> {
    try {
      const week = await this.weekRepository.findByPk(id);
      if (!week) {
        throw new NotFoundException('Week not found');
      }
      week.destroy();
      return {
        statusCode: HttpStatus.OK,
        message: 'Deleted successfully',
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
