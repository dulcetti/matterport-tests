export const loaderShowcase = () => {
  const key = 'c6518f79da3d4dcaa185916fb6b8041e';
  iframe_matterport.addEventListener('load', loaderShowcase, false);

  try {
    window.MP_SDK.connect(iframe_matterport, key, '3.2')
      .then((result) => {
        iframe_matterport.removeEventListener('load', loaderShowcase);
        return result;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
