var React = require('react'),
  remark = require('remark'),
  reactRenderer = require('remark-react');

/**
 * This component is wrapped around any part of a page.
 * When that part of the page is clicked, it selects
 * the text within.
 */
var RemarkComponent = React.createClass({
  displayName: 'RemarkComponent',
  propTypes: {
    children: React.PropTypes.any.isRequired
    sanitize: React.PropTypes.bool,
    prefix: React.PropTypes.string,
    createElement: React.PropTypes.func,
    components: React.PropTypes.objectOf(React.PropTypes.element),
    toHast: React.PropTypes.object,
  },
  render: function() {
    var options = {
      sanitize: this.props.sanitize,
      prefix: this.props.prefix,
      createElement: this.props.createElement,
      remarkReactComponents: this.props.components,
      toHast: this.props.toHast
    };

    return remark().use(reactRenderer, options).process(this.props.children);
  }
});

module.exports = RemarkComponent;
