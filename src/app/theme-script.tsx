const THEME_INIT = 'try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.className=t}else if(window.matchMedia("(prefers-color-scheme:light)").matches){document.documentElement.className="light"}}catch(e){}';

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />;
}
