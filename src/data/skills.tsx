import React from 'react';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';
import postCssIcon from '@iconify/icons-logos/postcss';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import javaIcon from '@iconify/icons-logos/java';
import tsIcon from '@iconify/icons-logos/typescript-icon';

const skills = [
  <a href="https://reactjs.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={reactIcon} />
  </a>,
  <a href="https://tailwindcss.com" className="focus:outline-none">
    <Icon className="text-4xl" icon={tailwindcssIcon} />
  </a>,
  <a href="https://postcss.org" className="focus:outline-none">
    <Icon className="text-5xl" icon={postCssIcon} />
  </a>,
  <a href="https://getboostrap.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={bootstrapIcon} />
  </a>,
  <a href="https://getboostrap.com" className="focus:outline-none">
    <Icon className="text-5xl" icon={javaIcon} />
  </a>,
  <a href="https://getboostrap.com" className="focus:outline-none">
  <Icon className="text-5xl" icon={tsIcon} />
</a>,
  
];

export default skills;
