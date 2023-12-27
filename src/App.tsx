import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import store from './Redux/store';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
