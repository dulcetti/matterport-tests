import styled from 'styled-components';
import media from 'styled-media-query';

export const MainWrapper = styled.main`
  max-width: 70rem;
  text-align: center;

  ${media.greaterThan('medium')`
    margin: 0 auto;
  `}
`;

export const MatterportIframe = styled.iframe`
  border: 0;
  margin-bottom: 2rem;
`;

export const BoxNavigation = styled.section``;

export const WrappButtons = styled.div``;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  font-size: 2rem;
  padding: 0.5rem 1rem;
`;
