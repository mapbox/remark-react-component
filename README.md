# MdastComponent

**Render Markdown in React, in a component.**

This uses [mdast-react](https://github.com/mapbox/mdast-react)
under the hood, so it **does not use dangerouslySetInnerHTML**, which means
it doesn't do any innerHTML and has a smaller surface for security vulnerabilities
than other approaches: its HTML output is guided by React's strict rules.

## Installation

    npm install --save mdast-react-component

## Usage

```jsx
var React = require('react'),
    MdastComponent = require('mdast-react-component');

var App = React.createClass({
    getInitialState() {
      return { text: '# hello world' };
    },
    onChange(e) {
      this.setState({ text: e.target.value });
    },
    render() {
      return (<div>
        <textarea
          value={this.state.text}
          onChange={this.onChange} />
        <div id='preview'>
          <MdastComponent>
            {this.state.text}
          </MdastComponent>
        </div>
      </div>);
    }
});

React.render(<App />, document.getElementById('app'));
```
