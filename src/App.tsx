import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <ToastContainer />
    <AuthProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AuthProvider>
  </>
);

export default App;
