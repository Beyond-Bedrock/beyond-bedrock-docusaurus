import React from 'react';

/*
title: The text to show in the spacer
textColor: The color of the text (default: #000). Can be a gradient.
color: The color of the spacer line (default: #000). Can be a gradient.
underline: Whether there is an underline below the text (default: false)
align: The alignment of the text: 'left', 'center', or 'right' (default: 'center')
type: The design type of the spacer.
font: The font family of the text (default: 'Minecraft Ten')
thickness: The thickness of the spacer line in pixels (default: 4)
spacing: The spacing between the text and the spacer lines in pixels (default: 20)

Usage Examples:

<SectionSpacer 
  title="Info"
  type="plain"
  thickness={8}
  font= "Minecraft Ten"
  color="linear-gradient(90deg, #80fe7e, #4a9b47)"
  textColor="linear-gradient(90deg, #80fe7e, #4a9b47)"
/>

<SectionSpacer 
  title="Features"
  type="dots"
  align="left"
  color="#ff5733"
  textColor="#ff5733"
/>


*/

const types = [
  'plain',         // simple lines
  'dots',          // dotted pattern
  'diamonds',      // diamond shapes
  'stars',         // star shapes
  'circles',       // circular pattern
  'triangles',     // triangle pattern
  'waves',         // wavy lines
  'zigzag',        // zigzag pattern
  'brackets',      // bracket style
  'underline',     // text with underline
  'double',        // double lines
  'gradient-fade', // fading gradient
  'dashed',        // dashed lines
  'ornamental'     // decorative scrollwork
];

export default function SectionSpacers({
  title = 'TEXT',       // the text to show in the spacer
  textColor = '#000', // allow gradient colors too
  color = '#000',     // the spacer color. allow gradient colors too
  underline = false,    // whether there is an underline below the text
  align = 'center',     // is the text in the center of the line spacer or to the left or right
  type = 'plain',       // the design type of the spacer from the types array above
  font = 'Minecraft Ten',
  thickness = 4,
  spacing = 20
}) {
  
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
    gap: `${spacing}px`,
    margin: '2rem 0',
    width: '100%'
  };

  const isTextGradient = textColor.includes('gradient');
  
  const textStyle = {
    ...(isTextGradient ? {
      background: textColor,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    } : {
      color: textColor
    }),
    fontFamily: font,
    fontSize: '2rem',
    fontWeight: 'bold',
    textDecoration: underline ? 'underline' : 'none',
    whiteSpace: 'nowrap',
    padding: '0 10px',
    flexShrink: 0
  };

  const lineStyle = {
    height: `${thickness}px`,
    background: color,
    flex: 1,
    minWidth: '50px'
  };

  const spacerContainerStyle = {
    flex: 1,
    minWidth: '50px',
    height: '20px',
    position: 'relative',
    overflow: 'hidden'
  };

  // Arrow with dots spacer
  const ArrowDots = ({ side }) => (
    <div style={spacerContainerStyle}>
      <svg width="100%" height="20" preserveAspectRatio="none" style={{ display: 'block' }}>
        {side === 'left' ? (
          <>
            <polygon points="0,10 15,0 15,5 10,10 15,15 15,20" fill={color} vectorEffect="non-scaling-stroke" />
            <circle cx="30" cy="10" r="4" fill={color} />
            <circle cx="50" cy="10" r="4" fill={color} />
            <rect x="65" y={10 - thickness/2} width="100%" height={thickness} fill={color} />
          </>
        ) : (
          <>
            <rect x="0" y={10 - thickness/2} width="calc(100% - 65px)" height={thickness} fill={color} />
            <circle cx="calc(100% - 50px)" cy="10" r="4" fill={color} />
            <circle cx="calc(100% - 30px)" cy="10" r="4" fill={color} />
            <polygon points="100%,10 calc(100% - 15px),0 calc(100% - 15px),5 calc(100% - 10px),10 calc(100% - 15px),15 calc(100% - 15px),20" fill={color} vectorEffect="non-scaling-stroke" />
          </>
        )}
      </svg>
    </div>
  );

  // Dots pattern
  const Dots = () => {
    const patternId = `dots-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div style={spacerContainerStyle}>
        <svg width="100%" height="20" style={{ display: 'block' }}>
          <defs>
            <pattern id={patternId} x="0" y="0" width="14" height="20" patternUnits="userSpaceOnUse">
              <circle cx="7" cy="10" r="3" fill={color} />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="20" fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  };

  // Diamonds pattern
  const Diamonds = () => {
    const patternId = `diamonds-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div style={spacerContainerStyle}>
        <svg width="100%" height="20" style={{ display: 'block' }}>
          <defs>
            <pattern id={patternId} x="0" y="0" width="22" height="20" patternUnits="userSpaceOnUse">
              <polygon points="11,10 16,5 21,10 16,15" fill={color} />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="20" fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  };

  // Stars pattern
  const Stars = () => {
    const patternId = `stars-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div style={spacerContainerStyle}>
        <svg width="100%" height="20" style={{ display: 'block' }}>
          <defs>
            <pattern id={patternId} x="0" y="0" width="26" height="20" patternUnits="userSpaceOnUse">
              <polygon 
                points="13,3 15,8 20,8 16,12 18,17 13,14 8,17 10,12 6,8 11,8"
                fill={color}
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="20" fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  };

  // Circles pattern
  const Circles = () => {
    const patternId = `circles-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div style={spacerContainerStyle}>
        <svg width="100%" height="20" style={{ display: 'block' }}>
          <defs>
            <pattern id={patternId} x="0" y="0" width="18" height="20" patternUnits="userSpaceOnUse">
              <circle cx="9" cy="10" r="5" fill="none" stroke={color} strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="20" fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  };

  // Triangles pattern
  const Triangles = () => {
    const patternId = `triangles-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div style={spacerContainerStyle}>
        <svg width="100%" height="20" style={{ display: 'block' }}>
          <defs>
            <pattern id={patternId} x="0" y="0" width="22" height="20" patternUnits="userSpaceOnUse">
              <polygon points="0,15 11,5 22,15" fill={color} />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="20" fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  };

  // Waves pattern
  const Waves = () => {
    const patternId = `waves-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div style={spacerContainerStyle}>
        <svg width="100%" height="20" style={{ display: 'block' }}>
          <defs>
            <pattern id={patternId} x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <path 
                d="M0,10 Q10,0 20,10 T40,10" 
                fill="none" 
                stroke={color} 
                strokeWidth={thickness}
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="20" fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  };

  // Zigzag pattern
  const Zigzag = () => {
    const patternId = `zigzag-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div style={spacerContainerStyle}>
        <svg width="100%" height="20" style={{ display: 'block' }}>
          <defs>
            <pattern id={patternId} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path 
                d="M0,15 L10,5 L20,15" 
                fill="none" 
                stroke={color} 
                strokeWidth={thickness}
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="20" fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  };

  // Brackets pattern
  const Brackets = () => (
    <div style={spacerContainerStyle}>
      <svg width="100%" height="20" style={{ display: 'block' }}>
        <path d="M5,5 L0,10 L5,15" fill="none" stroke={color} strokeWidth={thickness} />
        <rect x="10" y={10 - thickness/2} width="calc(100% - 20px)" height={thickness} fill={color} />
        <path d="M calc(100% - 5px),5 L100%,10 L calc(100% - 5px),15" fill="none" stroke={color} strokeWidth={thickness} />
      </svg>
    </div>
  );

  // Double lines
  const Double = () => (
    <div style={spacerContainerStyle}>
      <svg width="100%" height="20" style={{ display: 'block' }}>
        <rect x="0" y="6" width="100%" height={thickness} fill={color} />
        <rect x="0" y="14" width="100%" height={thickness} fill={color} />
      </svg>
    </div>
  );

  // Dashed lines
  const Dashed = () => (
    <div style={spacerContainerStyle}>
      <svg width="100%" height="20" style={{ display: 'block' }}>
        <line x1="0" y1="10" x2="100%" y2="10" stroke={color} strokeWidth={thickness} strokeDasharray="10,5" />
      </svg>
    </div>
  );

  // Ornamental scrollwork
  const Ornamental = () => {
    const patternId = `ornamental-${Math.random().toString(36).substr(2, 9)}`;
    return (
      <div style={spacerContainerStyle}>
        <svg width="100%" height="20" style={{ display: 'block' }}>
          <defs>
            <pattern id={patternId} x="0" y="0" width="50" height="20" patternUnits="userSpaceOnUse">
              <path 
                d="M0,10 Q5,5 10,10 T20,10 Q25,10 30,5 Q35,0 40,5 Q45,10 50,10" 
                fill="none" 
                stroke={color} 
                strokeWidth={thickness}
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="20" fill={`url(#${patternId})`} />
        </svg>
      </div>
    );
  };

  const renderSpacer = () => {
    const validateType = types.includes(type) ? type : 'plain';
    switch(validateType) {
      case 'arrow-dots':
        return (
          <>
            {align !== 'right' && <ArrowDots side="left" />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <ArrowDots side="right" />}
          </>
        );
      
      case 'plain':
        return (
          <>
            {align !== 'right' && <div style={lineStyle} />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <div style={lineStyle} />}
          </>
        );
      
      case 'dots':
        return (
          <>
            {align !== 'right' && <Dots />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Dots />}
          </>
        );
      
      case 'diamonds':
        return (
          <>
            {align !== 'right' && <Diamonds />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Diamonds />}
          </>
        );
      
      case 'stars':
        return (
          <>
            {align !== 'right' && <Stars />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Stars />}
          </>
        );
      
      case 'circles':
        return (
          <>
            {align !== 'right' && <Circles />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Circles />}
          </>
        );
      
      case 'triangles':
        return (
          <>
            {align !== 'right' && <Triangles />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Triangles />}
          </>
        );
      
      case 'waves':
        return (
          <>
            {align !== 'right' && <Waves />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Waves />}
          </>
        );
      
      case 'zigzag':
        return (
          <>
            {align !== 'right' && <Zigzag />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Zigzag />}
          </>
        );
      
      case 'brackets':
        return (
          <>
            {align !== 'right' && <Brackets />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Brackets />}
          </>
        );
      
      case 'underline':
        return (
          <>
            {align !== 'right' && <div style={lineStyle} />}
            <span style={{...textStyle, textDecoration: 'underline'}}>{title}</span>
            {align !== 'left' && <div style={lineStyle} />}
          </>
        );
      
      case 'double':
        return (
          <>
            {align !== 'right' && <Double />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Double />}
          </>
        );
      
      case 'dashed':
        return (
          <>
            {align !== 'right' && <Dashed />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Dashed />}
          </>
        );
      
      case 'ornamental':
        return (
          <>
            {align !== 'right' && <Ornamental />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <Ornamental />}
          </>
        );
      
      case 'gradient-fade':
        const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
        return (
          <>
            {align !== 'right' && (
              <div style={spacerContainerStyle}>
                <svg width="100%" height="20" style={{ display: 'block' }}>
                  <defs>
                    <linearGradient id={`${gradientId}-left`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: 'transparent', stopOpacity: 0}} />
                      <stop offset="100%" style={{stopColor: color, stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <rect x="0" y={10 - thickness/2} width="100%" height={thickness} fill={`url(#${gradientId}-left)`} />
                </svg>
              </div>
            )}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && (
              <div style={spacerContainerStyle}>
                <svg width="100%" height="20" style={{ display: 'block' }}>
                  <defs>
                    <linearGradient id={`${gradientId}-right`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: color, stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: 'transparent', stopOpacity: 0}} />
                    </linearGradient>
                  </defs>
                  <rect x="0" y={10 - thickness/2} width="100%" height={thickness} fill={`url(#${gradientId}-right)`} />
                </svg>
              </div>
            )}
          </>
        );
      
      default:
        return (
          <>
            {align !== 'right' && <div style={lineStyle} />}
            <span style={textStyle}>{title}</span>
            {align !== 'left' && <div style={lineStyle} />}
          </>
        );
    }
  };

  return (
    <div style={containerStyle}>
      {renderSpacer()}
    </div>
  );
}