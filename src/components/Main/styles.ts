import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px;) {
    border-left: 1px solid var(--gray);
    border-right: 1px solid var(--gray);
  }

  background-color: red;
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
`;

export const BackIcon = styled.div``;

export const ProfileInfo = styled.div``;
