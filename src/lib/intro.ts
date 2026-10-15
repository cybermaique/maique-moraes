export const introStorageKey = "intro-seen";

/** Long enough for the opening sequence (≈1.4 s) to finish before its styles are released. */
const introDurationMs = 2600;

/**
 * Runs in <head> before first paint. The first page view of a browser session gets the
 * "drafting" opening (see globals.css, `html[data-intro="play"]`); reloads and later
 * navigations in the same session do not. Without JavaScript there is simply no intro.
 */
export const introInitScript = `try{if(!sessionStorage.getItem("${introStorageKey}")){sessionStorage.setItem("${introStorageKey}","1");var r=document.documentElement;r.dataset.intro="play";setTimeout(function(){delete r.dataset.intro},${introDurationMs})}}catch(e){}`;
