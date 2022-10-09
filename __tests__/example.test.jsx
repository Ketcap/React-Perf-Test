import { render, screen,act } from "@testing-library/react";
import React, { Profiler } from 'react';
import Home from "../pages/main";
import "@testing-library/jest-dom";

describe("Main Test", () => {
  it("renders correct amount", () => {
    render(<Home />);

    const cards = screen.getAllByTestId("card-item");

    expect(cards.length).toBe(500);
  });

  it("re-render under 16ms to have 60fps",()=>{
    let timers = [] ;
    const page = render(<Profiler id="Home" onRender={(_,phase,duration)=> timers = [phase,duration]}><Home/></Profiler>)

    let cards = screen.getAllByTestId("card-item");

    act(()=> cards[0].click());
    
    page.rerender();

    expect(timers[1]).toBeLessThan(16);
  })

});
