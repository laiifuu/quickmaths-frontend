import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import AddTutor from '../user-actions/AddTutor';

describe('AddTutor', () => {
  test('AddTutor page renders as expected', async () => {
    const snapHomepage = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <AddTutor />
        </BrowserRouter>
      </Provider>,
    )
      .toJSON();
    expect(snapHomepage).toMatchSnapshot();
  });
});
