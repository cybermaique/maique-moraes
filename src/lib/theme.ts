export type Theme = "dark" | "light";

/** Server-rendered fallback, used only if the init script cannot run. */
export const defaultTheme: Theme = "dark";
export const themeStorageKey = "theme";

/**
 * Runs in <head> before first paint. A saved choice wins; otherwise the
 * visitor's operating-system preference decides, so there is never a flash.
 */
export const themeInitScript = `try{var t=localStorage.getItem("${themeStorageKey}");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";document.documentElement.dataset.theme=t}catch(e){}`;
