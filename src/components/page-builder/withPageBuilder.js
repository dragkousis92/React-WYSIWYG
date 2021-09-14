import React, { useRef } from 'react';
import orderBy from 'lodash/orderBy';

type Props = {
  editors: {},
};
const withPageBuilder = Component => (props: Props) => {
  const { editors } = props;

  const orderedEditors = orderBy(Object.values(editors), ['weight']);
  const HTMLWrapperRef = useRef(null);
  const getGeneratedHTML = () => HTMLWrapperRef.current.outerHTML;

  return (
    <Component
      {...props}
      orderedEditors={orderedEditors}
      generateHTML={getGeneratedHTML}
      HTMLWrapperRef={HTMLWrapperRef}
    />
  );
};

export default withPageBuilder;
export { withPageBuilder };
