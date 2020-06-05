import { Module } from '@nestjs/common';
import { SearchProvider } from './search.provider';
import { SearchController } from './search.controller';

@Module({
  controllers: [SearchController],
  providers: [SearchProvider],
})
export class SearchModule {}
