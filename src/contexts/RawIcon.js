import { createContext, useState, useEffect } from 'react';
import { GoCheck, GoArrowBoth, GoArrowUp, GoArrowDown } from 'react-icons/go';
import { iconToSVGRaw } from '../utility/IconToSVGRaw';

const RawIconContext = createContext();

function RawIconProvider({ children }) {
    const [rawGoCheck, setRawGoCheck] = useState('');
    const [rawGoArrowBoth, setRawGoArrowBoth] = useState('');
    const [rawGoArrowUp, setRawGoArrowUp] = useState('');
    const [rawGoArrowDown, setRawGoArrowDown] = useState('');

    useEffect(() => {
        setRawGoCheck(iconToSVGRaw(<GoCheck style={{ fill: 'white' }} />));
        setRawGoArrowBoth(iconToSVGRaw(<GoArrowBoth />));
        setRawGoArrowUp(iconToSVGRaw(<GoArrowUp />));
        setRawGoArrowDown(iconToSVGRaw(<GoArrowDown />));
    }, []);

    return (
        <RawIconContext.Provider
            value={{ rawGoCheck, rawGoArrowBoth, rawGoArrowUp, rawGoArrowDown }}
        >
            {children}
        </RawIconContext.Provider>
    );
}

export { RawIconProvider };
export default RawIconContext;
