import React from 'react';
// views
import { Title, Wrapper } from './views';

interface Props {
  title?: string | undefined;
  subTitle?: string;
  content: string | number | number[] | string[] | undefined;
}

const DescriptionSection: React.FC<Props> = ({ content, title, subTitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <span>
        {`${subTitle}:`} {Array.isArray(content) ? content.map((i: number | string) => i) : content}
      </span>
    </Wrapper>
  );
};

export default DescriptionSection;
