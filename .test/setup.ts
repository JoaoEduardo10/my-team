import "@testing-library/jest-dom";
import "jest-styled-components";
import "vitest"
import { beforeAll, vi } from 'vitest'

const mockRequest = vi.fn();



afterAll(() => {
  global.Request = mockRequest ;
});

beforeAll(() => {
  global.Request = mockRequest;

  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve({errors: {token: 'Error/Missing application key. Go to https://www.api-football.com/documentation-v3 to learn how to get your API application key.'} })
  });
})


