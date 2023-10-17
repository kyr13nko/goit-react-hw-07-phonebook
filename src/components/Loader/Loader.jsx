import { RevolvingDot } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <RevolvingDot
        radius="24"
        strokeWidth="8"
        color="rgb(57, 95, 58)"
        secondaryColor="rgb(84, 76, 122)"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default Loader;
