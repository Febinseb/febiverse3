'use client';

import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  const phrases = [
    "Editor",
    1000,
    "Developer",
    1000,
    "Engineer",
    1000,
    "Musician",
    1000
  ];

  return (
    <div className="text-2xl font-semibold typing-effect">
      <span>I&apos;m a</span>
      <TypeAnimation
        sequence={phrases}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        cursor={true}
        preRenderFirstString={true}
        className="subject ml-2" 
      />
    </div>
  );
};

export default TypingEffect;