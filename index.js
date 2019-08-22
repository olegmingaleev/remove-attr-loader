const loaderUtils = require('loader-utils');

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);

  if (!options || !options.attributes) {
    return source;
  }

  options.attributes.forEach(reg => {
    const matcher = `[\\s\\n]${reg
      .toString()
      .replace(/[\/\\]/g, '')}=["']([^"']*)["']`;

    if (source.match(matcher)) {
      source = source.replace(new RegExp(matcher, 'g'), '');
    }
  });

  return source;
};
