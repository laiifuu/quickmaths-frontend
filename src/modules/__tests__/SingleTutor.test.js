import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import SingleTutor from '../SingleTutor';

describe('Show one tutor', () => {
  test('Show redirection', async () => {
    const singleTutor = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <SingleTutor />
        </BrowserRouter>
        ,
      </Provider>,
    )
      .toJSON();
    expect(singleTutor).toMatchSnapshot();
  });
});
