import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import SearchResults from "../SearchResults";

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
    shallow(<SearchResults data={data} resultsNumber="10 results" />);
});

test("renders a number of ImageItem components, depending on length of props.data", () => {

    const wrapper = shallow(<SearchResults data={data} resultsNumber="10 results" />);
    expect(wrapper.find('ImageItem').length).toBe(1);
});

test("displays number of images displayed, depending on props.resultsNumber", () => {

    const wrapper = shallow(<SearchResults data={data} resultsNumber="Found 10 results" />);
    expect(wrapper.text()).toContain('10 results');
});

