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
    shallow(<SearchResults data={data} />);
});

test("renders a number of ImageItem components, depending on length of props.data", () => {

    const wrapper = shallow(<SearchResults data={data} />);
    expect(wrapper.find('ImageItem').length).toBe(1);
});

