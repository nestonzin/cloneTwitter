import React from 'react';
import { Container, Header, BackIcon, ProfileInfo } from './styles';

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Neston</strong>
          <span>18 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

      {/* <ButtonMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </ButtonMenu> */}
    </Container>
  );
};

export default Main;
