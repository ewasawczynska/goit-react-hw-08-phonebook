import { Home } from 'components';
import { Helmet } from 'react-helmet';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />
    </>
  );
};