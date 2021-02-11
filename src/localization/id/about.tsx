import React from 'react';
import { Icon } from '@iconify/react';
import { HighlightedTextIcon } from 'components/molecules';
import { AboutSectionContentProps } from 'components/organisms/About/types';
import reactIcon from '@iconify/icons-logos/react';
import javaIcon from '@iconify/icons-logos/java';

const Text = () => (
  <>
    I’m currently studing   {' '}
    <span className="font-bold text-gray-800">software development </span> and{' '}
    <span className="font-bold text-gray-800">embedded systems</span>. I enjoy building web apps using
    <HighlightedTextIcon
      as="a"
      href="https://www.oracle.com/java/technologies/"
      className="mx-2"
      icon={<Icon icon={javaIcon} />}
    >
      Java
    </HighlightedTextIcon>{' '}
    and{' '}
    <HighlightedTextIcon
      as="a"
      href="https://reactjs.org"
      className="mx-2"
      icon={<Icon icon={reactIcon} />}
    >
      React
    </HighlightedTextIcon>
    . I'm also an active student in Thuy Loi University.
  </>
);

const about: AboutSectionContentProps = {
  text: <Text />,
};

export default about;
