import { render, screen } from '@testing-library/vue';
import List from '../../src/components/List.vue';

describe('Test List ', () => {
  test('should render items provided.', () => {
    render(List, {
      props: {
        list: [
            { id: 1, task: 'go run'},
            { id: 2, task: 'grocery shopping'}
        ],
        deleteTask: () => {},
        updateTask: () => {}
      }
    });

    screen.getByText('go run');
    screen.getByText('grocery shopping');
  });
});
