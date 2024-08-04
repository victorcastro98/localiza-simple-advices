import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from '../../pages/Main';



describe('Main Component functionality', () => {
    it(`Search for term "advice" and display an "advice" advice, then search for "night" and "advice" advice to be gone`, () => {
      render(<Main />);
      const input = screen.getByPlaceholderText("Search for advice");
      const goButton = screen.getByText("Go");
  
      fireEvent.change(input, { target: { value: 'advice' } });
  
      fireEvent.click(goButton);
  
      expect(screen.getAllByDisplayValue("advice")).toHaveLength(1);

      fireEvent.change(input, { target: { value: 'night' } });
  
      fireEvent.click(goButton);

      expect(screen.queryAllByText("advice")).toHaveLength(0);
    });
  });