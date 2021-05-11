import styled, {keyframes} from 'styled-components';
import {Spinner9} from '@styled-icons/icomoon/Spinner9';

const spin = keyframes`
  0% { transform: rotate(0deg)}
  100% { transform: rotate(360deg)}
`;
export const Spinner = styled(Spinner9)`
  animation: ${spin} 1s linear infinite;
  color: #ffffff;
  max-width: 20vw;
`;

const FullSpinner = () => {
  return (
    <div
      style={{
        fontSize: '4em',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spinner aria-label='loading' />
    </div>
  );
};

export default FullSpinner;
