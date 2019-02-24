import React from "react";
import unsplash from "../../api/unsplash";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from '../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const data = [{
  id: '123',
  likes: 200,
  description: 'cat',
  urls: {
    small: 'https://smallurl.com'
  },
  links: {
    download: 'https://downloadme.com'
  }
}]

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

test("renders an instance of SearchBar component", () => {

  const wrapper = shallow(<App />);
  wrapper.setState({ images: data })
  wrapper.update()
  const searchBar = wrapper.find('SearchBar')
  expect(searchBar.length).toEqual(1);
});

test("renders an instance of SearchResults component", () => {

  const wrapper = shallow(<App />);
  wrapper.setState({ images: data })
  wrapper.update()
  const searchResults = wrapper.find('SearchResults')
  expect(searchResults.length).toEqual(1);
});

