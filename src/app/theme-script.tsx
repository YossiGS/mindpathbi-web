const THEME_INIT = 'try{document.documentElement.className="light"}catch(e){}';

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />;
}
