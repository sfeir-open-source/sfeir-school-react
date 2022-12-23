import { SfeirThemeInitializer } from "../web_modules/sfeir-school-theme/sfeir-school-theme.mjs";

const getPathToFile = (directory) => (file) => ({ path: `${directory}/${file}.md` });
const pathReducer = (paths, [directory, files]) => { paths.push(...files.map(getPathToFile(directory))); return paths; };

export const initTheme = (slides) => SfeirThemeInitializer.init(() => slides.reduce(pathReducer, []));