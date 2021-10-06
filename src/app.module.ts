import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './api/auth/auth.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('auth');
  }
}
