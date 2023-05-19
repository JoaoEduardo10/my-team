import * as Styled from './styles';

export type ButtonProps = {
  text: string
  onClick?: () => void
}

export const Button = ({ text, onClick }: ButtonProps) => {

  const handleButtonClick = () => {
    if(onClick) {
      onClick();
    }
  };

  return (
    <Styled.Button onClick={handleButtonClick}>{ text }</Styled.Button>
  );
};
