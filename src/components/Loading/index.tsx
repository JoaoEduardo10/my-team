import * as Styled from './styles';

export const Loading = () => {
  return (
    <Styled.Loading aria-label='Loading'>
      <Styled.CircleOne>
        <Styled.CircleTwo></Styled.CircleTwo>
      </Styled.CircleOne>
    </Styled.Loading>
  );
};
