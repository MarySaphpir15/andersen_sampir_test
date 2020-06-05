import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { SearchModule } from './search/search.module';

@Module({
  controllers: [AppController],
  imports: [SearchModule]
})
export class AppModule {}
