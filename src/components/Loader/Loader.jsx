import { Hearts } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <>
<StyledLoader>
<Hearts 
  height="200"
  width="500"
  color="#BFC0C0"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</StyledLoader>
</>
  );
};
