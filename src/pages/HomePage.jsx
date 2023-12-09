import { Home } from '../components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />
      </HelmetProvider> 
  );
};

export default HomePage;