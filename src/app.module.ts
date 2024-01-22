import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule,
    ConfigModule.forRoot({
    isGlobal:true
  }),
    DatabaseModule
  ],
  controllers: [],
  providers: [AppService, UserService],
})
export class AppModule {}
