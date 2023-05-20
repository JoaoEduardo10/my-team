import { CombinedSelector } from '../components/CombinedSelector';
import { Header } from '../components/header';
import * as Styled from './styles';

export const Template = () => {
  return (
    <Styled.Conteiner>
      <Header />
      <CombinedSelector />
    </Styled.Conteiner>
  );
};
