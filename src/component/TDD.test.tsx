/*
TDD should render text Hello/hello if the name is passed into the component 
It should render hello followed by the name
*/

import { render, screen } from "@testing-library/react"
import TDD from "./TDD"

test('Should render Hello',()=>{
  render(<TDD/>)
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();

})

test('Should render Hello followed by name',()=>{
  render(<TDD name={'ibad'} />)
  const textElement = screen.getByText(/hello ibad/i);
  expect(textElement).toBeInTheDocument();

})