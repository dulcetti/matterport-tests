import React from 'react';
import { loaderShowcase } from '../services/showcase/';

import * as S from './styles';

export default function App(props) {
  const loaderShowcase = (iframe) => {
    console.info(iframe);
  };
  const iframeRef = React.createRef();
  const showcase = loaderShowcase(iframeRef);
  console.info(iframeRef);

  return (
    <S.MainWrapper class="container">
      <S.Title>Matterport tests</S.Title>
      <S.MatterportIframe
        allow="vr"
        allowfullscreen
        frameborder="0"
        height="480"
        id="tests-matterport"
        ref={props.iframeRef}
        src="https://my.matterport.com/show?m=SxQL3iGyoDo&play=1"
        title="tests-matterport"
        width="853"></S.MatterportIframe>

      <hr />

      <h2>Direcionamento</h2>
      <div>
        <button class="buttons arrows" data-directions="LEFT" id="left">
          &lArr;
        </button>
        <button class="buttons arrows" data-directions="FORWARD" id="up">
          &uArr;
        </button>
        <button class="buttons arrows" data-directions="BACK" id="down">
          &dArr;
        </button>
        <button class="buttons arrows" data-directions="RIGHT" id="right">
          &rArr;
        </button>
      </div>

      <div>
        <button class="buttons rotations" data-x="-15" data-y="0" id="left">
          &#10553;
        </button>
        <button class="buttons rotations" data-x="15" data-y="0" id="right">
          &#10552;
        </button>
        <button class="buttons rotations" data-x="0" data-y="15" id="up">
          &#10555;
        </button>
        <button class="buttons rotations" data-x="0" data-y="-15" id="down">
          &#10554;
        </button>
      </div>
    </S.MainWrapper>
  );
}
