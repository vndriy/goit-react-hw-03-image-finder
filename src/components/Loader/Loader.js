import { ThreeDots } from 'react-loader-spinner';

import { LoaderContainer } from './Loader.styled';

export const Loader = ({ isLoading }) => {
  return (
    <LoaderContainer>
      {isLoading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4d72a9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
    </LoaderContainer>
  );
};
