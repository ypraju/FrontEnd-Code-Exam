import { render, screen, waitFor } from '@testing-library/vue';
import userEvent from '@testing-library/user-event'

import UserInput from '../../src/components/UserInput.vue';

describe('Test UserInput ', () => {
  const addTaskMock = jest.fn();

  test('test add functionality', async () => {
    render(UserInput, {
      props: {
        addTask: addTaskMock,
      }
    });

    userEvent.type(screen.getByRole('textbox'), 'buy milk');
    userEvent.click(screen.getByText(/add/i));

    await waitFor(() => {
      expect(addTaskMock).toHaveBeenLastCalledWith('buy milk');
    });
  });
});
