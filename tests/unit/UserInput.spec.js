import { render, screen } from '@testing-library/vue';

import UserInput from '../../src/components/UserInput.vue';

describe('Test UserInput ', () => {

  test('test initial render', async () => {
    render(UserInput, {
      props: {
        addTask: () => { },
      }
    });

    screen.getByPlaceholderText(/add a new task/i);
    screen.getByTestId('add-task-button');
  });
});
