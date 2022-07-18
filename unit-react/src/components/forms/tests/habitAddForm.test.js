import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HabitAddForm from '../habitAddForm';

describe('HabitAddForm', () => {
  let input;
  let button;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    render(<HabitAddForm onAdd={onAdd} />);
    input = screen.getByPlaceholderText('Habit');
    button = screen.getByText('Add');
  });

  it('calls onAdd when button is clicked and valid habit is entered', () => {
    // When: input에 원하는 습관의 이름 타이핑 -> add 버튼 클릭
    userEvent.type(input, 'New Habit');
    userEvent.click(button);

    // Then: onAdd가 input에 입력된 이름과 함께 호출되어야 함
    expect(onAdd).toHaveBeenCalledWith('New Habit');
  });

  it('does not call onAdd when the habit is empty', () => {
    userEvent.type(input, '');
    userEvent.click(button);

    expect(onAdd).toHaveBeenCalledTimes(0);
  });
});
