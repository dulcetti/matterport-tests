import React from 'react';
import { loaderShowcase } from '../services/showcase/';

import * as S from './styles';

export default function App(props) {
  const loaderShowcase = (iframe) => {
    console.info(iframe);
    // const key = 'c6518f79da3d4dcaa185916fb6b8041e';
    // iframe_matterport.addEventListener('load', loaderShowcase, false);

    // try {
    //   window.MP_SDK.connect(iframe_matterport, key, '3.2')
    //     .then((result) => {
    //       iframe_matterport.removeEventListener('load', loaderShowcase);
    //       return result;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // } catch (error) {
    //   console.error(error);
    //   throw new Error(error);
    // }
  };
  // const iframe_matterport = document.getElementById('tests-matterport');
  // iframe_matterport.addEventListener('load', loaderShowcase, false);
  // console.info(iframe_matterport);
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
    </S.MainWrapper>
  );
}
