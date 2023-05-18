import * as S from './styles';

export type BackgroundConteinerProps = {
  img?: string
  children: React.ReactNode
}

export const BackgroundConteiner = ({ img, children }: BackgroundConteinerProps) => {
  return (
    <S.Conteiner img={img}>{children}</S.Conteiner>
  );
};
