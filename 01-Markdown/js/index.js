'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header() {
  return React.createElement(
    'header',
    null,
    React.createElement(
      'h1',
      { className: 'text-center title-text' },
      'Markdown Previewer'
    ),
    React.createElement(
      'h4',
      { className: 'text-center title-text' },
      'created for FreeCodeCamp'
    )
  );
};

var FCCMarkdown = function (_React$Component) {
  _inherits(FCCMarkdown, _React$Component);

  function FCCMarkdown() {
    _classCallCheck(this, FCCMarkdown);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      converter: new showdown.Converter(),
      value: 'Markdown Previewer\n===\n<br> \n## This markdown previewer has been created for FreeCodeCamp\n<br>\n Use the editBox on the left to write your markdown and see the HTML version on the right output pane (below if on mobile)'
    };
    return _this;
  }

  FCCMarkdown.prototype.createMarkup = function createMarkup() {
    return { __html: this.state.converter.makeHtml(this.state.value) };
  };

  FCCMarkdown.prototype.handleChange = function handleChange(event) {
    this.setState({ value: event.target.value });
  };

  FCCMarkdown.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'col-sm-6' },
        React.createElement('textarea', {
          type: 'text',
          defaultValue: this.state.value,
          onChange: this.handleChange.bind(this),
          id: 'editArea',
          className: 'col-xs-10 col-xs-offset-1 full-height' })
      ),
      React.createElement(
        'div',
        { className: 'col-sm-6' },
        React.createElement(
          'div',
          { id: 'outputArea',
            className: 'col-xs-10 col-xs-offset-1 full-height' },
          React.createElement('div', { dangerouslySetInnerHTML: this.createMarkup() })
        )
      )
    );
  };

  return FCCMarkdown;
}(React.Component);

;

var Footer = function Footer() {
  return React.createElement(
    'footer',
    null,
    React.createElement(
      'div',
      { className: 'container-fluid text-center' },
      React.createElement(
        'div',
        { className: 'text-center text-muted footer-text' },
        React.createElement(
          'h4',
          null,
          'Created by Sérgio Gaspar for freeCodeCamp Challenge: ',
          React.createElement(
            'a',
            { href: 'https://www.freecodecamp.com/challenges/build-a-markdown-previewer', target: '_blank' },
            'Markdown Previewer'
          ),
          '.'
        ),
        React.createElement('br', null),
        React.createElement(
          'h4',
          null,
          ' created using  ',
          React.createElement('img', { src: 'http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png', width: '100' }),
          ' '
        )
      ),
      React.createElement(
        'div',
        { className: 'social-icons' },
        React.createElement(
          'a',
          { href: 'http://www.sergiomgaspar.com', target: '_blank' },
          React.createElement('i', { id: 'github', className: 'fa fa-user-circle', 'aria-hidden': 'true' })
        ),
        React.createElement(
          'a',
          { href: 'https://github.com/sergiomgaspar', target: '_blank' },
          React.createElement('i', { id: 'github', className: 'fa fa-github', 'aria-hidden': 'true' })
        ),
        React.createElement(
          'a',
          { href: 'http://codepen.io/sergiomgaspar/', target: '_blank' },
          React.createElement('i', { id: 'codepen', className: 'fa fa-codepen', 'aria-hidden': 'true' })
        ),
        React.createElement(
          'a',
          { href: 'https://www.freecodecamp.com/sergiomgaspar', target: '_blank' },
          React.createElement('i', { id: 'freecodecamp', className: 'fa fa-free-code-camp', 'aria-hidden': 'true' })
        ),
        React.createElement(
          'a',
          { href: 'https://www.linkedin.com/in/sergiomgaspar', target: '_blank' },
          React.createElement('i', { id: 'linkedin', className: 'fa fa-linkedin-square', 'aria-hidden': 'true' })
        )
      )
    )
  );
};
var App = function App() {
  return React.createElement(
    'div',
    { className: 'container-fluid' },
    React.createElement(Header, null),
    React.createElement(FCCMarkdown, null),
    React.createElement(Footer, null)
  );
};

document.write('<div id="app"></div>');
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));