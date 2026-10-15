/** Long enough for the opening sequence (≈1.4 s) to finish before its styles are released. */
const introDurationMs = 2600;

/**
 * Runs in <head> before first paint, on every full page load (first visit, reload, or an
 * opened link): it turns on the "drafting" opening sequence (see globals.css,
 * `html[data-intro="play"]`) and releases it once the sequence has finished, so client-side
 * navigations never replay it mid-visit. Without JavaScript there is simply no intro.
 */
export const introInitScript = `try{var r=document.documentElement;r.dataset.intro="play";setTimeout(function(){delete r.dataset.intro},${introDurationMs})}catch(e){}`;
