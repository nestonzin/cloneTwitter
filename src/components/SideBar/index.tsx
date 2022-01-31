import React from 'react';
import StickyBox from 'react-sticky-box';

import FollowSuggestion from '../FollowSuggestion';

import News from '../News';

import List from '../List';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder = "Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
<StickyBox>
      <Body>
        <List 
        title='Talvez você curta'
        elements={[
          <FollowSuggestion 
          name="Felipe austriaco"
          nickname="@weridlilo"
          />,
          <FollowSuggestion 
          name="Austriaco Felipe"
          nickname="@lilowerid"
          />,
          <FollowSuggestion 
          name="kkkkocaranemédaaustria"
          nickname="@bigmonkey"
          />,
        ]}
        />
        <List 
        title='O que está acontecendo'
        elements={[
        <News />,
        <News />,
        <News />,
        ]}
        />
      </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;