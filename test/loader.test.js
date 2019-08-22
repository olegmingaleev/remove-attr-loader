const loader = require('../');

test('should remove [class] attribute', () => {
  expect(
    loader.call(
      {
        query: {
          attributes: [/class/]
        }
      },
      '<div class="foo"></div>'
    )
  ).toBe('<div></div>');
});

test('should remove all [data-] attributes', () => {
  expect(
    loader.call(
      {
        query: {
          attributes: [/data-.+/]
        }
      },
      '<div data-id="foo" data-set="foo"></div>'
    )
  ).toBe('<div></div>');
});

test('should remove only [id] attribute', () => {
  expect(
    loader.call(
      {
        query: {
          attributes: [/id/]
        }
      },
      '<div id="foo" class="foo"></div>'
    )
  ).toBe('<div class="foo"></div>');
});

test('should remove [id, class] attributes', () => {
  expect(
    loader.call(
      {
        query: {
          attributes: [/id/, /class/]
        }
      },
      '<div id="foo" class="foo"></div>'
    )
  ).toBe('<div></div>');
});

test('without query return source', () => {
  expect(loader.call({}, '<div id="foo" class="foo"></div>')).toBe(
    '<div id="foo" class="foo"></div>'
  );
});
