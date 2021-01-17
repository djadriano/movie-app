import Components from '../components';

/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const initializeComponents = (context) => {
  const elements = Array.from(context.querySelectorAll('[data-module]:not([data-initialized])'));

  elements.forEach((element) => {
    const options = JSON.parse(JSON.stringify(element.dataset));

    element.dataset.module
      .split(',')
      .forEach((path) => {
        if (Components[path]) new Components[path](element, options); /* eslint no-new: 0 */
      });

    element.setAttribute('data-initialized', 'true');
  });
};

const ready = () => {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    return Promise.resolve();
  }

  return new Promise((resolve) => document.addEventListener('DOMContentLoaded', resolve));
};

ready().then(() => initializeComponents(document));
