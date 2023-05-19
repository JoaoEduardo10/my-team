import * as Styled from './styles';
import { BsFillInfoCircleFill } from 'react-icons/bs';

export type ErrorMessageProps = {
  message: string
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <Styled.ConteinerMessage>
      <Styled.Conteiner role='alert' errorMessage={message}>
        <Styled.Span>
          <BsFillInfoCircleFill />
        </Styled.Span>
        <Styled.Span role='log'>
          {
            message
          }
        </Styled.Span>
        <Styled.Stripe errorMessage={message}></Styled.Stripe>
      </Styled.Conteiner>
    </Styled.ConteinerMessage>
  );
};
