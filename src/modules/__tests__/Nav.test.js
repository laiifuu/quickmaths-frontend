import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Nav from '../Nav';

describe('Nav', () => {
  test('Snap the Nav', async () => {
    const snapNav = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(snapNav).toMatchSnapshot();
  });
});
