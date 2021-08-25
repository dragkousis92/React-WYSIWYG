import React from 'react';

type Props = {
  title: string,
};

const TitleRenderedView = ({ title }: Props) => <h1>{title}</h1>;

TitleRenderedView.defaultProps = { content: '' };

export { TitleRenderedView };
export default TitleRenderedView;
