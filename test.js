var test = require('tap').test,
  React = require('react/addons'),
  MdastComponent = require('./');

test('MdastComponent', function(t) {
  var renderer = React.addons.TestUtils.createRenderer();
  var html = React.renderToStaticMarkup(React.createElement(MdastComponent, {}, '# Hello world\n\nhi [there](http://google.com/)'));
  t.equal(html, '<div><h1><span>Hello world</span></h1><p><span>hi </span><a href="http://google.com/"><span>there</span></a></p></div>');
  t.end();
});
