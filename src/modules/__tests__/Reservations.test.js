import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Reservations from '../Reservations';

describe('Show all reservations', () => {
  test('Show redirection', async () => {
    const reservations = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Reservations />
        </BrowserRouter>
        ,
      </Provider>,
    )
      .toJSON();
    expect(reservations).toMatchSnapshot();
  });
});
