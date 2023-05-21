import { CombinedSelector } from '../components/CombinedSelector';
import { ConteinerTables } from '../components/ConteinerTables';
import { Header } from '../components/header';
import * as Styled from './styles';

import img from '../images/background-login.jpg';

export const Template = () => {
  return (
    <Styled.Conteiner img={img}>
      <Header />
      <CombinedSelector />
      <ConteinerTables />
    </Styled.Conteiner>
  );
};
