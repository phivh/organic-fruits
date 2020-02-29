import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import App from './App';


configure({ adapter: new Adapter() });
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Organic Fruits/i);
  expect(linkElement).toBeInTheDocument();
});
describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });
}); 