import { IMatterportShowcase } from './interfaces';
import { paramsMedia } from './medias';

let showcase: IMatterportShowcase;

export const loaderShowcase = (iframe: HTMLIFrameElement) => {
  const key = 'c6518f79da3d4dcaa185916fb6b8041e';

  const _getShowcase = (result: IMatterportShowcase) => {
    iframe.removeEventListener('load', loaderShowcase);
    showcase = result;
    showcase.Model.getData().then(loadedSpaceHandler);
  };

  const loaderShowcase = () => {
    return window.MP_SDK.connect(iframe, key, '3.3').then(_getShowcase).catch(_returnError);
  };

  iframe.addEventListener('load', loaderShowcase, false);
};

export const walking = (direction: string) => {
  return showcase.Camera.moveInDirection(direction).then(_returnMessage).catch(_returnError);
};

export const turn = (x: number, y: number) => {
  return showcase.Camera.rotate(x, y).then(_returnMessage).catch(_returnError);
};

const _returnMessage = (message: string) => {
  console.info(message);
};

const _returnError = (error: string) => {
  console.error(error);
};

function loadedSpaceHandler() {
  createMedia();
}

function createMedia() {
  showcase.Mattertag.add(paramsMedia).then((matterId: Array<string>) => {
    console.info(matterId);
  });
}
