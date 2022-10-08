import { render, screen,act } from "@testing-library/react";
import React from 'react';
import Home from "../pages/main";
import "@testing-library/jest-dom";

describe("Main Test", () => {
  it("renders correct amount", () => {
    render(<Home />);

    const cards = screen.getAllByTestId("card-item");

    expect(cards.length).toBe(500);
  });

  it("should re-render in 100ms",async ()=>{
    const {rerender} = render(<Home />);

    let cards = screen.getAllByTestId("card-item");

    const timeStart = new Date().getMilliseconds();

    act(()=> cards[0].click());
    
    await rerender();

    const timeEnd = new Date().getMilliseconds();
    
    const timer = timeEnd-timeStart;

    expect(timer).toBeLessThan(100);

  })
});
