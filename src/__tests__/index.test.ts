import { getInput } from '@actions/core';
import { mocked } from 'jest-mock';

jest.mock('@actions/core');

describe('index.ts', () => {
	let mockedGetInput: jest.MockedFunction<typeof getInput>;

	beforeEach(() => {
		mockedGetInput = mocked(getInput, { shallow: true });
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should get the input "name"', async () => {
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
