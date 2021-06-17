import { render, screen, waitFor } from '@testing-library/vue';
import userEvent from '@testing-library/user-event'

import ListItem from '../../src/components/ListItem.vue';

describe('Test ListItem ', () => {
  const updateTaskMock = jest.fn();
  const deleteTaskMock = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test('test initial load', async () => {
    render(ListItem, {
      props: {
        id: 1,
        task: 'Buy milk',
        updateTask: updateTaskMock,
        deleteTask: deleteTaskMock
      }
    });

    expect(screen.getByText('Buy milk')).toBeDefined();
  });

  test('test delete functionality', async () => {
    render(ListItem, {
      props: {
        id: 1,
        task: 'Buy milk',
        updateTask: updateTaskMock,
        deleteTask: deleteTaskMock
      }
    });

    expect(screen.getByText('Buy milk')).toBeDefined();
    const deleteButton = screen.getByRole('button', {
      name: /delete/i
    });

    userEvent.click(deleteButton);

    await waitFor(() => {
      expect(deleteTaskMock).toHaveBeenCalledWith(1);
    });
  });

  test('test edit functionality', async () => {
    render(ListItem, {
      props: {
        id: 1,
        task: 'get pencil',
        updateTask: updateTaskMock,
        deleteTask: deleteTaskMock
      }
    });

    // test initial state
    screen.getByText('get pencil');

    // click edit and check the intermediate state
    userEvent.click(screen.getByRole('button', {
      name: /edit/i
    }));
    await screen.findByText(/save/i);

    // update the text and save
    const inputBox = screen.getByRole('textbox');
    userEvent.clear(inputBox);
    userEvent.type(inputBox, 'buy pen');
    userEvent.click(screen.getByText(/save/i));
    await waitFor(() => {
      expect(updateTaskMock).toHaveBeenCalledWith(1, 'buy pen');
    });
  });
});
