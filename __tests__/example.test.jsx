import { render, screen } from "@testing-library/react";
import React from 'react';
import Home from "../pages/main";
import "@testing-library/jest-dom";

describe("Main Test", () => {
  it("renders correct amount", () => {
    render(<Home />);

    const cards = screen.getAllByTestId("card-item");

    expect(cards.length).toBe(500);
  });

});
