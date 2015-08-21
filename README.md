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
<MdastComponent>
# This is Markdown

And will be magically turned into a React DOM.
</MdastComponent>
```
