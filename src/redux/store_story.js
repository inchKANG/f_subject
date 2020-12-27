import { Provider } from 'react-redux';
import store from './store';

//스토리북에서 리덕스 연동을 위해 사용.
const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
);

export const withProvider = (story) => (
  <ProviderWrapper store={store}>{story()}</ProviderWrapper>
);
