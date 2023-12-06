import { Hearts } from 'react-loader-spinner';
import { Container } from 'components/Container';

export const Loader = () => {
  return (
    <>
<Container>
<Hearts 
  height="200"
  width="500"
  color="#BFC0C0"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</Container>
</>
  );
};
