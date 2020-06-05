import { Get, Controller, Query, Header } from '@nestjs/common';
import { SearchProvider } from './search.provider';

@Controller('items')
export class SearchController {
  constructor(private searchProvider: SearchProvider) {}

  @Get()
  @Header('Content-Type', 'text/plain')
  async findWithQuery(@Query() { query }: {[key: string]: string}): Promise<string> {
    return this.searchProvider.findIssue(query);
  }
}
