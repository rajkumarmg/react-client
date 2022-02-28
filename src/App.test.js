import React from "react";
import {cleanup, waitForElement } from '@testing-library/react'

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

// https://reactjs.org/docs/testing-recipes.html
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  cleanup();
});

it("renders the todo widget", async () => {

  await act(async () => {
    await render(<App />, container);
  });
  expect(container.querySelector("div")).toBeDefined();
  expect(container.querySelector("h1").textContent).toBe("Todo List");
});

it("renders the todo title", async () => {

  await act(async () => {
    await render(<App />, container);
  });
  expect(container.querySelector("h1").textContent).toBe("Todo List");
});

it("renders the todo list", async () => {

  await act(async () => {
    await render(<App />, container);
  });
  expect(container.querySelector("ul")).toBeDefined();
});

it("renders the todo input text box inside the form", async () => {

  await act(async () => {
    await render(<App />, container);
  });
  expect(container.querySelector("form").querySelectorAll("input[value][type='text']")).toBeDefined();

});

it("renders the todo submit button inside the form", async () => {

  await act(async () => {
    await render(<App />, container);
  });
  expect(container.querySelector("form").querySelectorAll("input[value][type='submit']")).toBeDefined();
});

it("renders the saved todo items", async () => {

  await act(async () => {
    await render(<App />, container);
  });
  expect(container.querySelector("ul").querySelectorAll("li").length).toBeGreaterThan(1);
});


/*
import {render, screen, cleanup, waitForElement } from '@testing-library/react'
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './App';
import todoJson  from "./todoMock";

afterEach(() => {
  cleanup();
});

test('to see if the todo list view data is dispayed', () => {
  // expect(true).toBe(true);
  
  render(<App todo={todoJson}/>);
  const todoListViewEle = screen.getByTestId('todoView');
  expect(todoListViewEle).toBeInTheDocument();
  expect(todoListViewEle).toHaveTextContent("one");
  expect(todoListViewEle).toHaveTextContent("two");
});
*/

