import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Signup from '../user-sessions/signup';

describe('Signup', () => {
  test('Signup page renders as expected', async () => {
    const snapHomepage = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
        ,
      </Provider>,
    )
      .toJSON();
    expect(snapHomepage).toMatchSnapshot();
  });
});
