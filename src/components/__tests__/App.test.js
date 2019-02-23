import React from "react";
import unsplash from "../../api/unsplash";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from '../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  shallow(<App />);
});

it("fetches data from unsplash", async () => {

  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  await instance.onSearchSubmit("cats")

  expect(unsplash.get).toHaveBeenCalledTimes(1);
  expect(unsplash.get).toHaveBeenCalledWith('/search/photos', {
    params: {
      query: "cats"
    }
  });
});