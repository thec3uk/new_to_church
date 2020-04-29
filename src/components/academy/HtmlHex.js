import React from 'react';
import Hexagon from 'react-hexagon';

const HtmlHexagon = ({ children, containerClassName, ...props }) => (
  <Hexagon
    style={{ stroke: 'inherit', fill: 'inherit' }}
    flatTop={true}
    {...props}
  >
    <foreignObject className={containerClassName} x="0%" y="00%" width="100%" height="100%">
        { children }
    </foreignObject>
  </Hexagon>
)

export default HtmlHexagon;
