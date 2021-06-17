import { render, screen } from '@testing-library/vue';
import ToDoList from '../../src/components/ToDoList.vue';

describe('Test ToDoList', () => {
  test('test add functionality', async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({
                todos: [
                    { id: 1, task: 'buy running shoes'},
                    { id: 2, task: 'watch batman' }
                ]
            }),
        })
    );

    render(ToDoList);

    await screen.findByText('buy running shoes');
    screen.getByText('watch batman');
  });
});
