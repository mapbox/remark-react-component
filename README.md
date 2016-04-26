# RemarkComponent

**Render Markdown in React, in a component.**

This uses [remark-react](https://github.com/mapbox/remark-react)
under the hood, so it **does not use dangerouslySetInnerHTML**, which means
it doesn't do any innerHTML and has a smaller surface for security vulnerabilities
than other approaches: its HTML output is guided by React's strict rules.

## Installation

    npm install --save remark-react-component

## Usage

```jsx
var React = require('react'),
    RemarkComponent = require('remark-react-component');

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
          <RemarkComponent>
            {this.state.text}
          </RemarkComponent>
        </div>
      </div>);
    }
});

React.render(<App />, document.getElementById('app'));
```
