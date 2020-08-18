import { shallow } from 'enzyme';
import checkPropTypes from 'check-prop-types';

/**
 * Utilities module
 * @module utils
 */

/**
 * Set up component - for writing tests
 * @param component
 * @returns component - a "ShallowWrapper" usually called "wrapper" from "Enzyme.shallow(<component>)"
 *
 * @example
 * const wrapper = setUpComponent(<MyComponent />);
 * ...//
 * @example
 * let wrapper;
 * beforeEach(() => {
 *  wrapper = setUpComponent(<MyComponent />);
 * })
 * ...
 */
export const setUpComponent = (component) => shallow(component);

/**
 * Find an Element/s or Component/s by "data-test" attr - for writing tests
 * @param wrapper - from "Enzyme.shallow() | Enzyme.mount()"
 * @param {string} attr - the attribute
 * @returns the matched Element/s or Component/s as a "ShallowWrapper"
 *
 * @example
 * const wrapper = setUpComponent(<MyComponent />);
 * ...//
 * findByTestAttr(wrapper, 'cta-link');
 * @example
 * ...
 * const link = findByTestAttr(wrapper, 'cta-link');
 * expect(link.length).toBe(1);
 * ...//
 * @example
 * ...
 * const button = findByTestAttr(wrapper, 'my-btn');
 * expect(button.text()).toBe('please click me!');
 */
export const findByTestAttr = (wrapper, attr) =>
   wrapper.find(`[data-test='${attr}']`);

/**
 * Find an Element/s or Component/s by its name selector - for writing tests
 * @param wrapper - from "Enzyme.shallow() | Enzyme.mount()"
 * @param {string} name - the selector eg: ("header" | "MyHeaderComponent") etc...
 * @returns the matched Element/s or Component/s as a "ShallowWrapper"
 *
 * @example
 * * const wrapper = setUpComponent(<MyComponent />);
 * ...
 * findByElemName(wrapper, 'cta-link');
 * ...//
 * @example
 * ...
 * const MyHeaderComponent = findByElemName(wrapper, 'MyHeaderComponent');
 * expect(MyHeaderComponent.length).toBe(2);
 * ...//
 * @example
 * ...
 * const header = findByElemName(wrapper, 'header');
 * expect(header.text()).toBe('the is the header element');
 */
export const findByElemName = (wrapper, name) => wrapper.find(name);

/**
 * Check propTypes of a component - for writing tests
 * @param {*} component - from "Enzyme.shallow().find() | Enzyme.mount().find()"
 * @param {object} props - the expected props for the component;
 * @returns "undefined" when the propTypes of the component doesn't throw a warning msg else "warning-msg<string>"
 *
 * @example
 *  import Modal from "./"
 *  ...
 *  const props = { isOpen: false, ...};
 *  checkProps(Modal, props);
 * ...//
 * @example
 * desc('--> checking props', () => {
 *  const props = { isOpen: false, ...};
 *  const propsErr = checkProps(Modal, props);
 *
 *  expect(propsErr).toBeUndefined();
 * })
 */
export const checkProps = (component, props) => {
   // eslint-disable-next-line react/forbid-foreign-prop-types
   const { propTypes: typeSpecs, name: componentName } = component,
      values = props,
      location = 'props';

   return checkPropTypes(typeSpecs, values, location, componentName);
};
