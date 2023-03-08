import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Home from '../Home';

describe('Home', () => {
  test('Home page renders as expected', async () => {
    const snapHomePage = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    )
      .toJSON();
    expect(snapHomePage).toMatchSnapshot();
  });
});
