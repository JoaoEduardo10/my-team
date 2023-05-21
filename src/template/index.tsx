import { CombinedSelector } from '../components/CombinedSelector';
import { ConteinerTables } from '../components/ConteinerTables';
import { Header } from '../components/header';
import * as Styled from './styles';

export const Template = () => {
  return (
    <Styled.Conteiner>
      <Header />
      <CombinedSelector />
      <ConteinerTables />
    </Styled.Conteiner>
  );
};
