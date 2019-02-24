import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ImageItem from "../ImageItem";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
    shallow(<ImageItem />);
});

test("accepts props and displays them", () => {
    const wrapper = shallow(<ImageItem id="22222" likes="100" description="a black cat" imageUrl="https://test.com" downloadLink="https://test.com/dl" />);

    const image = wrapper.find(`[data-test='image']`);
    const download = wrapper.find(`[data-test='download-url']`);

    expect(wrapper.text()).toContain("100");
    expect(wrapper.text()).toContain("a black cat");
    expect(image.prop('src')).toEqual('https://test.com');
    expect(image.prop('alt')).toEqual('a black cat');
    expect(download.prop('href')).toEqual('https://test.com/dl');

});