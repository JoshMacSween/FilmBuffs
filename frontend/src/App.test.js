// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { shallow } from "enzyme";
import App from "./App";
import MainContent from "./components/MainContent";

describe("Main Content Tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainContent />);
  });
  test("Renders welcome", () => {
    expect(wrapper.find("h1").text()).toContain("Welcome to FilmBuffs");
  });
});
