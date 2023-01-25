import { useContext } from 'react';
import TranslationContext from '../contexts/translation';

function useTranslation() {
    return useContext(TranslationContext);
}

export default useTranslation;
