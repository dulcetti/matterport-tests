import styled from 'styled-components';
import media from 'styled-media-query';

export const MainWrapper = styled.main`
  max-width: 70rem;

  ${media.greaterThan('medium')`
    margin: 0 auto;
  `}
`;

export const Title = styled.h1``;

export const MatterportIframe = styled.iframe`
  border: 0;
`;
