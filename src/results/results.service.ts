import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Results } from './models/results.models';
import { InjectModel } from '@nestjs/sequelize';
import { ResultsDto } from './dto/results.dto';
import { User } from 'src/user/models/user.models';

@Injectable()
export class ResultsService {
  constructor(
    @InjectModel(Results) private resultsRepository: typeof Results,
  ) { }

  async create(
    resultsDto: ResultsDto,
  ): Promise<object> {
    try {
      const { test_id, user_id } = resultsDto;
      const exist = await this.resultsRepository.findOne({
        where: { test_id, user_id },
      });
      if (exist) {
        throw new BadRequestException('Already created');
      }
      const results = await this.resultsRepository.create(resultsDto);
      return results;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getAll(): Promise<object> {
    try {
      return this.resultsRepository.findAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getById(id: number): Promise<object> {
    try {
      const resultss = await this.resultsRepository.findOne({
        where: { id },
      });
      if (!resultss) {
        throw new NotFoundException('Results not found');
      }
      return resultss;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getResultsUsers(id: number): Promise<object> {
    try {
      const resultss = await this.resultsRepository.findOne({
        where: { id },
        include: { model: User }
      });
      if (!resultss) {
        throw new NotFoundException('Results not found');
      }
      return resultss;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(
    id: number,
    resultsDto: ResultsDto,
  ): Promise<object> {
    try {
      const results = await this.resultsRepository.findByPk(id);
      if (!results) {
        throw new NotFoundException('Results not found');
      } 
      const update = await this.resultsRepository.update(
        resultsDto,
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
      const results = await this.resultsRepository.findByPk(id);
      if (!results) {
        throw new NotFoundException('Results not found');
      }
      results.destroy();
      return {
        statusCode: HttpStatus.OK,
        message: 'Deleted successfully',
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
