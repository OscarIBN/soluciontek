import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Login from './components/Login';
import Home from './components/Home';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      {isAuthenticated ? <Home /> : <Login />}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
