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
  },
  render: function() {
    return remark().use(reactRenderer).process(this.props.children);
  }
});

module.exports = RemarkComponent;
