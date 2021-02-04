const showcase = document.getElementById('showcase') as HTMLIFrameElement;
const key = 'tfgif0bywx48mp1wadg96x43a';

// declare this file is a module
export {};

// augment window with the MP_SDK property
declare global {
  interface Window {
    MP_SDK: any;
  }
}

showcase.addEventListener('load', async function() {
  let sdk;
  try {
      sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, '3.6');
      console.log("Try was successful");
  }
  catch(e) {
    console.error("this is the error I'm returning ", e);
    return;
  }

  console.log('%c  Hello Bundle SDK! ', 'background: #333333; color: #00dd00');
  console.log(sdk);
});