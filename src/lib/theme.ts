export type Theme = "dark" | "light";

export const defaultTheme: Theme = "dark";
export const themeStorageKey = "theme";

/**
 * Runs in <head> before first paint: applies a saved preference so visitors
 * who chose the light theme never see a flash of the dark default.
 */
export const themeInitScript = `try{var t=localStorage.getItem("${themeStorageKey}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
