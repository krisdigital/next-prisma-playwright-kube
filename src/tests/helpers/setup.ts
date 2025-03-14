import resetDb from './reset-db';
import { beforeEach } from 'vitest';

import '@testing-library/jest-dom';

beforeEach(async () => {
  await resetDb()
})