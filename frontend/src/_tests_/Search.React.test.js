import React from "react";
import { Search } from "../components/Search.js";
import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<Search />).toJSON();
  expect(tree).toMatchSnapshot();
});
