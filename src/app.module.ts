import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocalizationModule } from '@squareboat/nestjs-localization';

@Module({
  imports: [
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
