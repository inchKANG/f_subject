import React from 'react';

export function CustomButton({ text, color, hover, ...args }) {
  if (!color) {
    color = 'none';
  }
  if (!hover) {
    hover = color;
  }
  return (
    <button
      {...args}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = hover;
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = color;
      }}
      style={{ background: color }}
    >
      {text}
    </button>
  );
}

export function BlueButton({ ...args }) {
  return <button {...args}></button>;
}

// export default CustomButton;
