import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Reserve from '../Reserve';

describe('Home', () => {
  test('Reserve page renders as expected', async () => {
    const snapReservePage = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Reserve />
        </BrowserRouter>
      </Provider>,
    )
      .toJSON();
    expect(snapReservePage).toMatchSnapshot();
  });
});
