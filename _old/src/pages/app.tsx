import React, { useEffect, useRef } from 'react';
import { loaderShowcase, turn, walking } from '../services/showcase';

import * as S from './styles';

export default function App() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    iframeRef?.current && loaderShowcase(iframeRef.current);
  }, [iframeRef]);

  return (
    <S.MainWrapper>
      <S.Title>Matterport tests</S.Title>
      <S.MatterportIframe
        allow="vr"
        allowFullScreen
        frameBorder="0"
        height="480"
        id="tests-matterport"
        ref={iframeRef}
        src="https://my.matterport.com/show?m=SxQL3iGyoDo&amp;play=1"
        title="tests-matterport"
        width="853"></S.MatterportIframe>

      <S.BoxNavigation>
        <S.Subtitle>Direcionamento</S.Subtitle>
        <S.WrappButtons>
          <S.Button onClick={() => walking('LEFT')}>&lArr;</S.Button>
          <S.Button onClick={() => walking('FORWARD')}>&uArr;</S.Button>
          <S.Button onClick={() => walking('BACK')}>&dArr;</S.Button>
          <S.Button onClick={() => walking('RIGHT')}>&rArr;</S.Button>
        </S.WrappButtons>

        <S.WrappButtons>
          <S.Button onClick={() => turn(-15, 0)}>&#10553;</S.Button>
          <S.Button onClick={() => turn(15, 0)}>&#10552;</S.Button>
          <S.Button onClick={() => turn(0, 15)}>&#10555;</S.Button>
          <S.Button onClick={() => turn(0, -15)}>&#10554;</S.Button>
        </S.WrappButtons>
      </S.BoxNavigation>
    </S.MainWrapper>
  );
}
