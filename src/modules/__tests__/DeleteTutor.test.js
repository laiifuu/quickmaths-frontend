import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import DeleteItem from '../user-actions/DeleteTutor';

describe('DeleteItem', () => {
  test('DeleteItem page renders as expected', async () => {
    const snapHomepage = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <DeleteItem />
        </BrowserRouter>
      </Provider>,
    )
      .toJSON();
    expect(snapHomepage).toMatchSnapshot();
  });
});
