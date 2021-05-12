import styled, {keyframes} from 'styled-components';
import {Spinner9} from '@styled-icons/icomoon/Spinner9';

const spin = keyframes`
  0% { transform: rotate(0deg)}
  100% { transform: rotate(360deg)}
`;
export const SpinnerIcon = styled(Spinner9)`
  animation: ${spin} 1s linear infinite;
  color: #ffffff;
  max-width: 20vw;
`;

const Spinner = () => {
  return (
    <div
      style={{
        fontSize: '2em',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '8vw',
        margin: '0 auto',
      }}
    >
      <SpinnerIcon aria-label='loading' />
    </div>
  );
};

export default Spinner;
