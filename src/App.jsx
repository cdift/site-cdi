import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import { AgoraProvider } from './context/AgoraProvider.jsx';
import AppRoutes from './routes/index.jsx';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AgoraProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AgoraProvider>
    </BrowserRouter>
  );
}

export default App;
