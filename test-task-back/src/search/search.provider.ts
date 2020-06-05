import { Injectable } from '@nestjs/common';

import { findKeyValue } from './search.helper';
import { MOCK_DATA } from '../mock/mock-data';
import { responseType } from '../responseType';

@Injectable()
export class SearchProvider {
  findIssue(query: string): responseType {
    return findKeyValue(MOCK_DATA, query) || `key isn't available`;
  }
}
