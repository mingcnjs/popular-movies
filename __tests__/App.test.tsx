import {cleanup} from '@testing-library/react-native';
import 'react-native';
import * as React from 'react';
import AppNavigator from '../src/navigators/RootNavigator';
import {renderWithProviders} from '../src/utils/test-utils';

// Note: import explicitly to use the types shiped with jest.
import {it, describe, beforeEach, afterEach, jest, expect} from '@jest/globals';

// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Character App', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  afterEach(cleanup);

  describe('initial rendering', () => {
    it('renders App correctly', async () => {
      const container = renderWithProviders(<AppNavigator />);
      expect(container).not.toBeNull();
    });
  });
});
