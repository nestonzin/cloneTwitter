import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Cocaiasacademy</strong>
            <span>@cocaiasacademy</span>
            <Dot />
            <time>27 de jan</time>
          </Header>

          <Description>Foguete não tem ré🚀</Description>

          <ImageContent />
          
          <Icons>
            <Status>
              <CommentIcon />
              420
            </Status>
            <Status>
              <RetweetIcon />
              420
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;