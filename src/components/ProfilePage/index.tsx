import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Neston</h1>
        <h2>@Neston</h2>

        <p>
          Developer at <a>@cocaiasacademy</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 28 de dezembro de 1995
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>420</strong>
          </span>
          <span>
           <strong>4200 </strong> seguidores 
          </span>
        </Followage>
      </ProfileData>

      <Feed /> 
    </Container>
  );
}

export default ProfilePage;