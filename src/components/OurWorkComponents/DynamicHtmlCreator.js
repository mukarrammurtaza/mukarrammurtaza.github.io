import React from 'react';

const DynamicHtmlCreator = ({ elements }) => {
  const createHtmlElement = ([tag, content, className], index) => {
    const props = { key: index };
    if (className) {
      props.className = className;
    }

    if (tag === 'ul' && Array.isArray(content)) {
      return React.createElement(tag, props, content.map((el, i) => createHtmlElement(el, i)));
    } else {
      return React.createElement(tag, props, content);
    }
  };

  return (
    <div className='owSection'>
      {elements.map((element, index) => createHtmlElement(element, index))}
    </div>
  );
};

export default DynamicHtmlCreator;
