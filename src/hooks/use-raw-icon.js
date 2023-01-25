import { useContext } from 'react';
import RawIconContext from '../contexts/RawIcon';

function useRawIcon() {
    return useContext(RawIconContext);
}

export default useRawIcon;
