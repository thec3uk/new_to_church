import React from 'react';
import Hexagon from 'react-hexagon';

const HtmlHexagon = ({ children, containerClassName, onClick, ...props }) => {
  return (
  <Hexagon
    style={{ stroke: 'inherit', fill: 'inherit' }}
    flatTop={true}
    onClick={onClick}
    {...props}
  >
    <foreignObject className={containerClassName} onClick={onClick} x="0%" y="00%" width="100%" height="100%">
        { children }
    </foreignObject>
  </Hexagon>
)}

export default HtmlHexagon;
