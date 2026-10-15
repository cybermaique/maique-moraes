/** Long enough for the opening sequence (≈1.4 s) to finish before its styles are released. */
export const introDurationMs = 2600;

/** Failsafe: if the entrance screen's script never runs, the page frees itself after this. */
const entranceFailsafeMs = 6000;

/**
 * Runs in <head> before first paint and decides how the page opens:
 *
 * - Arriving from outside the site, or reloading: show the entrance screen
 *   (`html[data-splash="show"]`, see components/layout/entrance-screen.tsx) and hold the
 *   page's opening effects in their first frame (`html[data-opening="hold"]`) until the
 *   screen has opened.
 * - Navigating between pages of the site: skip the entrance screen and play the opening
 *   sequence right away (`html[data-intro="play"]`), released once it has finished.
 *
 * Without JavaScript neither runs, and the page is simply shown.
 */
export const entranceInitScript = `try{var r=document.documentElement,n=performance.getEntriesByType("navigation")[0],reload=!!n&&n.type==="reload",internal=false;try{internal=!!document.referrer&&new URL(document.referrer).origin===location.origin}catch(e){}var intro=function(){r.dataset.intro="play";setTimeout(function(){delete r.dataset.intro},${introDurationMs})};if(reload||!internal){r.dataset.splash="show";r.dataset.opening="hold";setTimeout(function(){if(r.dataset.splash){delete r.dataset.splash;delete r.dataset.opening;intro()}},${entranceFailsafeMs})}else{intro()}}catch(e){}`;
