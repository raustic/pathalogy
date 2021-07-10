import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { user } from './entities/user.entity';
import { UserService } from './services/user/user.service';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([user])
  ],
  controllers: [AppController],
  providers: [AppService,UserService]
})
export class AppModule {}
