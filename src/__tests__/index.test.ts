import { getInput } from '@actions/core';
import { mocked } from 'ts-jest/utils';

jest.mock('@actions/core');

describe('index.ts', () => {
  let mockedGetInput: jest.MockedFunction<typeof getInput>;

  beforeEach(() => {
    mockedGetInput = mocked(getInput, true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get the input "name"', () => {
    // Arrange
    const inputName = 'John Doe';
    mockedGetInput.mockReturnValue(inputName);

    // Act
    const name = getInput("name");

    // Assert
    expect(mockedGetInput).toHaveBeenCalledWith('name');
    expect(name).toBe(inputName);
  });
});
