import { render, screen } from '@testing-library/vue';

import UserInput from '../../src/components/UserInput.vue';

describe('Test UserInput ', () => {

  test('test initial render', async () => {
    render(UserInput, {
      props: {
        addTask: () => { },
      }
    });

    screen.getByPlaceholderText(/enter your task/i);
    screen.getByRole('button', {
      name: /add/i
    });
  });
});
