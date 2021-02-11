import React from 'react';
import { Icon } from '@iconify/react';
import java from '@iconify/icons-logos/java';
import javascriptIcon from '@iconify/icons-logos/javascript';
import { HighlightedTextIcon } from 'components/molecules';

const Text = () => (
  <>
    I’ve spent about two years on improving my skills in{' '}
    <span className="font-bold text-gray-800">website development</span> using{' '}
    <HighlightedTextIcon
      as="a"
      href="https://www.oracle.com/java/technologies/"
      className="mx-2"
      icon={<Icon icon={java} />}
    >
      Java
    </HighlightedTextIcon>{' '}
    and{' '}
    <HighlightedTextIcon className="mx-2" icon={<Icon icon={javascriptIcon} />}>
      Javascript
    </HighlightedTextIcon>{' '} and embedded systems with deep learning.{' '}
     I’m now pretty confident in building apps using these tools:
  </>
);

const skills = {
  text: <Text />,
};

export default skills;
