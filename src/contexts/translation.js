import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { parseTranslationConfig } from '../config/ParseTranslationConfig';

const TranslationContext = createContext();

function TranslationProvider({ language, children }) {
    const [translation, setTranslation] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get('./js/Wolf, Goat, and Cabbage/json/translation.json')
            .then((res) => {
                const config = res.data;
                parseTranslationConfig(config);
                setTranslation(config[language]);
                setIsLoaded(true);
            })
            .catch((err) => console.log(err));
    }, [language]);

    return (
        <TranslationContext.Provider value={{ translation, isLoaded }}>
            {children}
        </TranslationContext.Provider>
    );
}

export { TranslationProvider };
export default TranslationContext;
