import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TranslationProvider } from './contexts/translation';
import { RawIconProvider } from './contexts/RawIcon';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <TranslationProvider language={el.getAttribute('language')}>
        <RawIconProvider>
            <App />
        </RawIconProvider>
    </TranslationProvider>
);
