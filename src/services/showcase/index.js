export const loaderShowcase = () => {
  const arrows = document.querySelectorAll('.arrows');
  const rotations = document.querySelectorAll('.rotations');
  const iframeMatterport = document.getElementById('showcase-iframe');
  const key = 'c6518f79da3d4dcaa185916fb6b8041e';
  let showcase;
  let maxX;
  let maxY;
  let minX;
  let minY;

  const loaderShowcase = () => {
    return win.MP_SDK.connect(iframeMatterport, key, '3.3').then(getShowcase).catch(returnError);
  };

  function returnMessage(message) {
    console.info(message);
    console.info(showcase);
  }

  function returnError(error) {
    console.error(error);
  }

  function getShowcase(result) {
    iframeMatterport.removeEventListener('load', loaderShowcase);
    showcase = result;
    showcase.Model.getData().then(loadedSpaceHandler);
  }

  function loadedSpaceHandler(metadata) {
    maxX = 0;
    maxY = 0;
    minX = 0;
    minY = 0;

    buildDirections();

    createMedia();
  }

  function createMedia() {
    const paramsMedia = [
      {
        anchorPosition: { x: 1.09, y: 1.0, z: 0.122 },
        stemVector: { x: 0.32, y: 0.55, z: 1.0 },
        color: {
          r: 0.0,
          g: 0.0,
          b: 0.0,
        },
        description: 'Deveria ter aqui o vídeo do Jon Gom',
        label: 'Jon Gom',
        media: {
          src: 'https://www.youtube.com/watch?v=nY7GnAq6Znw',
          type: 'mattertag.media.video',
        },
      },
      {
        anchorPosition: { x: 1.09, y: 1.0, z: 0.122 },
        stemVector: { x: 0.32, y: 0.55, z: 1.0 },
        color: {
          r: 0.5,
          g: 0.2,
          b: 0.3,
        },
        description: 'Mais um vídeo da música Ocean',
        label: 'John Buttler',
        media: {
          src: 'https://www.youtube.com/watch?v=jdYJf_ybyVo',
          type: 'mattertag.media.video',
        },
      },
    ];

    showcase.Mattertag.add(paramsMedia).then((matterId) => {
      console.info(matterId);
    });
  }

  function buildDirections() {
    arrows.forEach((arrow) => {
      arrow.addEventListener(
        'click',
        () => {
          const directions = arrow.getAttribute('data-directions');
          walking(directions, 'moveInDirection');
        },
        false
      );
    });

    rotations.forEach((element) => {
      element.addEventListener(
        'click',
        () => {
          const x = parseInt(element.getAttribute('data-x'));
          const y = parseInt(element.getAttribute('data-y'));

          turn(x, y);
        },
        false
      );
    });
  }

  function walking(direction) {
    return showcase.Camera.moveInDirection(direction).then(returnMessage).catch(returnError);
  }

  function turn(x, y) {
    return showcase.Camera.rotate(x, y).then(returnMessage).catch(returnError);
  }

  iframeMatterport.addEventListener('load', loaderShowcase, false);
};
