import { renderToStaticMarkup } from 'react-dom/server';

function iconToSVGRaw(icon) {
    return encodeURIComponent(renderToStaticMarkup(icon));
}

export { iconToSVGRaw };
