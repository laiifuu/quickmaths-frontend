import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Login from '../user-sessions/login';

describe('Login', () => {
  test('Login page renders as expected', async () => {
    const snapHomepage = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
        ,
      </Provider>,
    )
      .toJSON();
    expect(snapHomepage).toMatchSnapshot();
  });
});
