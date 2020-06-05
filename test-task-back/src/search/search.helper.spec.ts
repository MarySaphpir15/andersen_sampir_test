import { findKeyValue } from './search.helper';
import { MOCK_DATA } from '../mock/mock-data';

describe('SearchController', () => {
  const searchHelper = findKeyValue;

  describe('Check search function', () => {
    it('should return text undefined', async() => {
      expect(searchHelper(MOCK_DATA, 'cofaxCDSS')).toBe(undefined);
    });
    it('should return slash', async() => {
      expect(searchHelper(MOCK_DATA, 'cofaxCDS')).toBe('/');
    });
    it('should return object', async () => {
      expect(searchHelper(MOCK_DATA, 'taglib').toString()).toBe({"taglib-uri":"cofax.tld","taglib-location":"/WEB-INF/tlds/cofax.tld"}.toString());
    });
  });
});
