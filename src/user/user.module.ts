import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.models';
import { MailModule } from '../mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import { FilesModule } from 'src/files/files.module';
import { WeekModule } from 'src/week/week.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    MailModule,
    JwtModule,
    FilesModule,
    WeekModule,
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
