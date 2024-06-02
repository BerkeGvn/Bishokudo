export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement('script');
    script.src = 'https://use.typekit.net/sfz4fvw.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = script.onreadystatechange = function () {
      const readyState = this.readyState;
      if (readyState && readyState !== 'complete' && readyState !== 'loaded') return;
      try {
        Typekit.load({ async: true });
      } catch (e) {
        console.error(e);
      }
    };
  }
});
