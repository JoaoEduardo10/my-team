import * as Styled from './styles';

export type BackgroundConteinerProps = {
  img?: string
  children: React.ReactNode
}

export const BackgroundConteiner = ({ img, children }: BackgroundConteinerProps) => {
  return (
    <Styled.Conteiner img={img} >{children}</Styled.Conteiner>
  );
};
