import { useState } from 'react';
import { isMobile } from 'react-device-detect';

function GraphVertex({
    onClick,
    name,
    index,
    size,
    isSelected,
    isTouchMarkRed
}) {
    const [isMarkedRed, setIsMarkedRed] = useState(false);

    const transform = `translate(0,-43) rotate(${
        (index * 360) / size
    }, 0, 43) rotate(-${(index * 360) / size}, 0, 0)`;

    const handleClick = (event) => {
        if (isMobile) {
            if (isTouchMarkRed) {
                handleContextMenu();
            } else {
                onClick(index);
            }
        } else {
            onClick(index);
        }
    };

    const handleContextMenu = (event) => {
        event?.preventDefault();
        setIsMarkedRed(!isMarkedRed);
    };

    const color = isSelected ? 'yellow' : isMarkedRed ? 'red' : 'white';

    const textStyle = isMarkedRed ? { fill: 'white' } : { fill: 'black' };

    return (
        <g
            onClick={handleClick}
            onContextMenu={handleContextMenu}
            transform={transform}
        >
            <circle
                cx="0"
                cy="0"
                r="8"
                fill={color}
                stroke="black"
                strokeWidth={1}
            />
            <text className="node noTextHighlight" style={textStyle}>
                {name.substring(0, 3)}
            </text>
        </g>
    );
}

export default GraphVertex;
