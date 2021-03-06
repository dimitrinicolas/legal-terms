(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('react'), require('react-router-dom'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-router-dom', 'react-dom'], factory) :
  (factory(global.React,global.ReactRouterDOM,global.ReactDOM));
}(this, (function (React,reactRouterDom,ReactDOM) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav() {
      _classCallCheck(this, Nav);

      return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'nav',
          { className: 'nav nav--footer' },
          React.createElement(
            'a',
            { href: 'https://github.com/dimitrinicolas/legal-terms' },
            'Github repository'
          ),
          React.createElement('span', { className: 'hr' }),
          React.createElement(
            reactRouterDom.Link,
            { to: '/legal-terms-disclaimer' },
            'Legal Terms and Disclaimer'
          )
        );
      }
    }]);

    return Nav;
  }(React.Component);

  var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var LangPreview = function (_React$Component) {
    _inherits$1(LangPreview, _React$Component);

    function LangPreview() {
      _classCallCheck$1(this, LangPreview);

      return _possibleConstructorReturn$1(this, (LangPreview.__proto__ || Object.getPrototypeOf(LangPreview)).apply(this, arguments));
    }

    _createClass$1(LangPreview, [{
      key: 'render',
      value: function render() {
        var categoriesList = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.props.categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var categorie = _step.value;

            var templatesList = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = categorie.templates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var template = _step2.value;

                templatesList.push(React.createElement(
                  'li',
                  { key: template.code },
                  React.createElement(
                    reactRouterDom.Link,
                    { to: this.props.code + '/' + categorie.code + '/' + template.code },
                    template.name
                  )
                ));
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            categoriesList.push(React.createElement(
              'li',
              { key: categorie.code },
              categorie.name,
              React.createElement(
                'ul',
                null,
                templatesList
              )
            ));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return React.createElement(
          'div',
          { className: 'lang-preview' },
          React.createElement(
            'h2',
            null,
            this.props.name
          ),
          React.createElement(
            'ul',
            { className: 'lang-preview__main-list' },
            categoriesList
          )
        );
      }
    }]);

    return LangPreview;
  }(React.Component);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Home = function (_React$Component) {
    _inherits$2(Home, _React$Component);

    function Home() {
      _classCallCheck$2(this, Home);

      return _possibleConstructorReturn$2(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass$2(Home, [{
      key: 'render',
      value: function render() {
        var templates = this.props.templates;
        var langsList = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = templates.langs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var lang = _step.value;

            langsList.push(React.createElement(LangPreview, _extends({ key: lang.code }, lang)));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Open source Legal Notices and Terms templates'
          ),
          langsList
        );
      }
    }]);

    return Home;
  }(React.Component);

  var _createClass$3 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$3(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var LegalTermsDisclaimer = function (_React$Component) {
    _inherits$3(LegalTermsDisclaimer, _React$Component);

    function LegalTermsDisclaimer() {
      _classCallCheck$3(this, LegalTermsDisclaimer);

      return _possibleConstructorReturn$3(this, (LegalTermsDisclaimer.__proto__ || Object.getPrototypeOf(LegalTermsDisclaimer)).apply(this, arguments));
    }

    _createClass$3(LegalTermsDisclaimer, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Legal Terms and Disclaimer'
          ),
          React.createElement(
            'nav',
            { className: 'nav' },
            React.createElement(
              reactRouterDom.Link,
              { to: '/' },
              'Return to home'
            )
          ),
          React.createElement(
            'p',
            null,
            '\n              The information is provided "as is" without warranty of any kind. \n              None of the authors accept any responsibility or liability for \n              the accuracy, content, completeness, legality, or reliability of \n              the informations provided by this website. No warranties, \n              promises and/or representations of any kind, expressed or \n              implied, are given as to the nature, standard, accuracy or \n              otherwise of the information provided in this website nor to the \n              suitability or otherwise of the information to your particular \n              circumstances.\n            '
          ),
          React.createElement(
            'p',
            null,
            '\n              None of the authors shall be liable for any loss or damage of \n              whatever nature (direct, indirect, consequential, or other) \n              whether arising in contract, tort or otherwise, which may arise \n              as a result of your use of (or inability to use) this website, or \n              from your use of (or failure to use) the information on this site.\n            '
          )
        );
      }
    }]);

    return LegalTermsDisclaimer;
  }(React.Component);

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var marked = createCommonjsModule(function (module, exports) {
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
  (function (root) {

    /**
     * Block-Level Grammar
     */

    var block = {
      newline: /^\n+/,
      code: /^( {4}[^\n]+\n*)+/,
      fences: noop,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
      nptable: noop,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
      html: '^ {0,3}(?:' // optional indentation
      + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
      + '|comment[^\\n]*(\\n+|$)' // (2)
      + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
      + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
      + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
      + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
      + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
      + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
      + ')',
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      table: noop,
      lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
      paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
      text: /^[^\n]+/
    };

    block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
    block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();

    block.bullet = /(?:[*+-]|\d+\.)/;
    block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
    block.item = edit(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();

    block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();

    block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
    block._comment = /<!--(?!-?>)[\s\S]*?-->/;
    block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();

    block.paragraph = edit(block.paragraph).replace('hr', block.hr).replace('heading', block.heading).replace('lheading', block.lheading).replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();

    block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();

    /**
     * Normal Block Grammar
     */

    block.normal = merge({}, block);

    /**
     * GFM Block Grammar
     */

    block.gfm = merge({}, block.normal, {
      fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
      paragraph: /^/,
      heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
    });

    block.gfm.paragraph = edit(block.paragraph).replace('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|').getRegex();

    /**
     * GFM + Tables Block Grammar
     */

    block.tables = merge({}, block.gfm, {
      nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
      table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
    });

    /**
     * Pedantic grammar
     */

    block.pedantic = merge({}, block.normal, {
      html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
      + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
    });

    /**
     * Block Lexer
     */

    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = {};
      this.options = options || marked.defaults;
      this.rules = block.normal;

      if (this.options.pedantic) {
        this.rules = block.pedantic;
      } else if (this.options.gfm) {
        if (this.options.tables) {
          this.rules = block.tables;
        } else {
          this.rules = block.gfm;
        }
      }
    }

    /**
     * Expose Block Rules
     */

    Lexer.rules = block;

    /**
     * Static Lex Method
     */

    Lexer.lex = function (src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    };

    /**
     * Preprocessing
     */

    Lexer.prototype.lex = function (src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');

      return this.token(src, true);
    };

    /**
     * Lexing
     */

    Lexer.prototype.token = function (src, top) {
      src = src.replace(/^ +$/gm, '');
      var next, loose, cap, bull, b, item, space, i, tag, l, isordered, istask, ischecked;

      while (src) {
        // newline
        if (cap = this.rules.newline.exec(src)) {
          src = src.substring(cap[0].length);
          if (cap[0].length > 1) {
            this.tokens.push({
              type: 'space'
            });
          }
        }

        // code
        if (cap = this.rules.code.exec(src)) {
          src = src.substring(cap[0].length);
          cap = cap[0].replace(/^ {4}/gm, '');
          this.tokens.push({
            type: 'code',
            text: !this.options.pedantic ? cap.replace(/\n+$/, '') : cap
          });
          continue;
        }

        // fences (gfm)
        if (cap = this.rules.fences.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'code',
            lang: cap[2],
            text: cap[3] || ''
          });
          continue;
        }

        // heading
        if (cap = this.rules.heading.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'heading',
            depth: cap[1].length,
            text: cap[2]
          });
          continue;
        }

        // table no leading pipe (gfm)
        if (top && (cap = this.rules.nptable.exec(src))) {
          item = {
            type: 'table',
            header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
          };

          if (item.header.length === item.align.length) {
            src = src.substring(cap[0].length);

            for (i = 0; i < item.align.length; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }

            for (i = 0; i < item.cells.length; i++) {
              item.cells[i] = splitCells(item.cells[i], item.header.length);
            }

            this.tokens.push(item);

            continue;
          }
        }

        // hr
        if (cap = this.rules.hr.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'hr'
          });
          continue;
        }

        // blockquote
        if (cap = this.rules.blockquote.exec(src)) {
          src = src.substring(cap[0].length);

          this.tokens.push({
            type: 'blockquote_start'
          });

          cap = cap[0].replace(/^ *> ?/gm, '');

          // Pass `top` to keep the current
          // "toplevel" state. This is exactly
          // how markdown.pl works.
          this.token(cap, top);

          this.tokens.push({
            type: 'blockquote_end'
          });

          continue;
        }

        // list
        if (cap = this.rules.list.exec(src)) {
          src = src.substring(cap[0].length);
          bull = cap[2];
          isordered = bull.length > 1;

          this.tokens.push({
            type: 'list_start',
            ordered: isordered,
            start: isordered ? +bull : ''
          });

          // Get each top-level item.
          cap = cap[0].match(this.rules.item);

          next = false;
          l = cap.length;
          i = 0;

          for (; i < l; i++) {
            item = cap[i];

            // Remove the list item's bullet
            // so it is seen as the next token.
            space = item.length;
            item = item.replace(/^ *([*+-]|\d+\.) +/, '');

            // Outdent whatever the
            // list item contains. Hacky.
            if (~item.indexOf('\n ')) {
              space -= item.length;
              item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
            }

            // Determine whether the next list item belongs here.
            // Backpedal if it does not belong in this list.
            if (this.options.smartLists && i !== l - 1) {
              b = block.bullet.exec(cap[i + 1])[0];
              if (bull !== b && !(bull.length > 1 && b.length > 1)) {
                src = cap.slice(i + 1).join('\n') + src;
                i = l - 1;
              }
            }

            // Determine whether item is loose or not.
            // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
            // for discount behavior.
            loose = next || /\n\n(?!\s*$)/.test(item);
            if (i !== l - 1) {
              next = item.charAt(item.length - 1) === '\n';
              if (!loose) loose = next;
            }

            // Check for task list items
            istask = /^\[[ xX]\] /.test(item);
            ischecked = undefined;
            if (istask) {
              ischecked = item[1] !== ' ';
              item = item.replace(/^\[[ xX]\] +/, '');
            }

            this.tokens.push({
              type: loose ? 'loose_item_start' : 'list_item_start',
              task: istask,
              checked: ischecked
            });

            // Recurse.
            this.token(item, false);

            this.tokens.push({
              type: 'list_item_end'
            });
          }

          this.tokens.push({
            type: 'list_end'
          });

          continue;
        }

        // html
        if (cap = this.rules.html.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: this.options.sanitize ? 'paragraph' : 'html',
            pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
            text: cap[0]
          });
          continue;
        }

        // def
        if (top && (cap = this.rules.def.exec(src))) {
          src = src.substring(cap[0].length);
          if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
          tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
          if (!this.tokens.links[tag]) {
            this.tokens.links[tag] = {
              href: cap[2],
              title: cap[3]
            };
          }
          continue;
        }

        // table (gfm)
        if (top && (cap = this.rules.table.exec(src))) {
          item = {
            type: 'table',
            header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/(?: *\| *)?\n$/, '').split('\n') : []
          };

          if (item.header.length === item.align.length) {
            src = src.substring(cap[0].length);

            for (i = 0; i < item.align.length; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }

            for (i = 0; i < item.cells.length; i++) {
              item.cells[i] = splitCells(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
            }

            this.tokens.push(item);

            continue;
          }
        }

        // lheading
        if (cap = this.rules.lheading.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'heading',
            depth: cap[2] === '=' ? 1 : 2,
            text: cap[1]
          });
          continue;
        }

        // top-level paragraph
        if (top && (cap = this.rules.paragraph.exec(src))) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'paragraph',
            text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
          });
          continue;
        }

        // text
        if (cap = this.rules.text.exec(src)) {
          // Top-level should never reach here.
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'text',
            text: cap[0]
          });
          continue;
        }

        if (src) {
          throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
        }
      }

      return this.tokens;
    };

    /**
     * Inline-Level Grammar
     */

    var inline = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: noop,
      tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
      + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
      + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
      + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
      + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
      link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
      nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
      strong: /^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,
      em: /^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,
      code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
      br: /^ {2,}\n(?!\s*$)/,
      del: noop,
      text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
    };

    inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();

    inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

    inline.tag = edit(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();

    inline._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/;
    inline._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/;
    inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

    inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();

    inline.reflink = edit(inline.reflink).replace('label', inline._label).getRegex();

    /**
     * Normal Inline Grammar
     */

    inline.normal = merge({}, inline);

    /**
     * Pedantic Inline Grammar
     */

    inline.pedantic = merge({}, inline.normal, {
      strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
      link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
      reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
    });

    /**
     * GFM Inline Grammar
     */

    inline.gfm = merge({}, inline.normal, {
      escape: edit(inline.escape).replace('])', '~|])').getRegex(),
      url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace('email', inline._email).getRegex(),
      _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^~~(?=\S)([\s\S]*?\S)~~/,
      text: edit(inline.text).replace(']|', '~]|').replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|').getRegex()
    });

    /**
     * GFM + Line Breaks Inline Grammar
     */

    inline.breaks = merge({}, inline.gfm, {
      br: edit(inline.br).replace('{2,}', '*').getRegex(),
      text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
    });

    /**
     * Inline Lexer & Compiler
     */

    function InlineLexer(links, options) {
      this.options = options || marked.defaults;
      this.links = links;
      this.rules = inline.normal;
      this.renderer = this.options.renderer || new Renderer();
      this.renderer.options = this.options;

      if (!this.links) {
        throw new Error('Tokens array requires a `links` property.');
      }

      if (this.options.pedantic) {
        this.rules = inline.pedantic;
      } else if (this.options.gfm) {
        if (this.options.breaks) {
          this.rules = inline.breaks;
        } else {
          this.rules = inline.gfm;
        }
      }
    }

    /**
     * Expose Inline Rules
     */

    InlineLexer.rules = inline;

    /**
     * Static Lexing/Compiling Method
     */

    InlineLexer.output = function (src, links, options) {
      var inline = new InlineLexer(links, options);
      return inline.output(src);
    };

    /**
     * Lexing/Compiling
     */

    InlineLexer.prototype.output = function (src) {
      var out = '',
          link,
          text,
          href,
          title,
          cap;

      while (src) {
        // escape
        if (cap = this.rules.escape.exec(src)) {
          src = src.substring(cap[0].length);
          out += cap[1];
          continue;
        }

        // autolink
        if (cap = this.rules.autolink.exec(src)) {
          src = src.substring(cap[0].length);
          if (cap[2] === '@') {
            text = escape(this.mangle(cap[1]));
            href = 'mailto:' + text;
          } else {
            text = escape(cap[1]);
            href = text;
          }
          out += this.renderer.link(href, null, text);
          continue;
        }

        // url (gfm)
        if (!this.inLink && (cap = this.rules.url.exec(src))) {
          cap[0] = this.rules._backpedal.exec(cap[0])[0];
          src = src.substring(cap[0].length);
          if (cap[2] === '@') {
            text = escape(cap[0]);
            href = 'mailto:' + text;
          } else {
            text = escape(cap[0]);
            if (cap[1] === 'www.') {
              href = 'http://' + text;
            } else {
              href = text;
            }
          }
          out += this.renderer.link(href, null, text);
          continue;
        }

        // tag
        if (cap = this.rules.tag.exec(src)) {
          if (!this.inLink && /^<a /i.test(cap[0])) {
            this.inLink = true;
          } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
            this.inLink = false;
          }
          src = src.substring(cap[0].length);
          out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
          continue;
        }

        // link
        if (cap = this.rules.link.exec(src)) {
          src = src.substring(cap[0].length);
          this.inLink = true;
          href = cap[2];
          if (this.options.pedantic) {
            link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

            if (link) {
              href = link[1];
              title = link[3];
            } else {
              title = '';
            }
          } else {
            title = cap[3] ? cap[3].slice(1, -1) : '';
          }
          href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
          out += this.outputLink(cap, {
            href: InlineLexer.escapes(href),
            title: InlineLexer.escapes(title)
          });
          this.inLink = false;
          continue;
        }

        // reflink, nolink
        if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
          src = src.substring(cap[0].length);
          link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
          link = this.links[link.toLowerCase()];
          if (!link || !link.href) {
            out += cap[0].charAt(0);
            src = cap[0].substring(1) + src;
            continue;
          }
          this.inLink = true;
          out += this.outputLink(cap, link);
          this.inLink = false;
          continue;
        }

        // strong
        if (cap = this.rules.strong.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
          continue;
        }

        // em
        if (cap = this.rules.em.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
          continue;
        }

        // code
        if (cap = this.rules.code.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.codespan(escape(cap[2].trim(), true));
          continue;
        }

        // br
        if (cap = this.rules.br.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.br();
          continue;
        }

        // del (gfm)
        if (cap = this.rules.del.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.del(this.output(cap[1]));
          continue;
        }

        // text
        if (cap = this.rules.text.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.text(escape(this.smartypants(cap[0])));
          continue;
        }

        if (src) {
          throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
        }
      }

      return out;
    };

    InlineLexer.escapes = function (text) {
      return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
    };

    /**
     * Compile Link
     */

    InlineLexer.prototype.outputLink = function (cap, link) {
      var href = link.href,
          title = link.title ? escape(link.title) : null;

      return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
    };

    /**
     * Smartypants Transformations
     */

    InlineLexer.prototype.smartypants = function (text) {
      if (!this.options.smartypants) return text;
      return text
      // em-dashes
      .replace(/---/g, '\u2014')
      // en-dashes
      .replace(/--/g, '\u2013')
      // opening singles
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
      // closing singles & apostrophes
      .replace(/'/g, '\u2019')
      // opening doubles
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201C')
      // closing doubles
      .replace(/"/g, '\u201D')
      // ellipses
      .replace(/\.{3}/g, '\u2026');
    };

    /**
     * Mangle Links
     */

    InlineLexer.prototype.mangle = function (text) {
      if (!this.options.mangle) return text;
      var out = '',
          l = text.length,
          i = 0,
          ch;

      for (; i < l; i++) {
        ch = text.charCodeAt(i);
        if (Math.random() > 0.5) {
          ch = 'x' + ch.toString(16);
        }
        out += '&#' + ch + ';';
      }

      return out;
    };

    /**
     * Renderer
     */

    function Renderer(options) {
      this.options = options || marked.defaults;
    }

    Renderer.prototype.code = function (code, lang, escaped) {
      if (this.options.highlight) {
        var out = this.options.highlight(code, lang);
        if (out != null && out !== code) {
          escaped = true;
          code = out;
        }
      }

      if (!lang) {
        return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>';
      }

      return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
    };

    Renderer.prototype.blockquote = function (quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    };

    Renderer.prototype.html = function (html) {
      return html;
    };

    Renderer.prototype.heading = function (text, level, raw) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '">' + text + '</h' + level + '>\n';
      }
      // ignore IDs
      return '<h' + level + '>' + text + '</h' + level + '>\n';
    };

    Renderer.prototype.hr = function () {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };

    Renderer.prototype.list = function (body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    };

    Renderer.prototype.listitem = function (text) {
      return '<li>' + text + '</li>\n';
    };

    Renderer.prototype.checkbox = function (checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    };

    Renderer.prototype.paragraph = function (text) {
      return '<p>' + text + '</p>\n';
    };

    Renderer.prototype.table = function (header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';

      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    };

    Renderer.prototype.tablerow = function (content) {
      return '<tr>\n' + content + '</tr>\n';
    };

    Renderer.prototype.tablecell = function (content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    };

    // span level renderer
    Renderer.prototype.strong = function (text) {
      return '<strong>' + text + '</strong>';
    };

    Renderer.prototype.em = function (text) {
      return '<em>' + text + '</em>';
    };

    Renderer.prototype.codespan = function (text) {
      return '<code>' + text + '</code>';
    };

    Renderer.prototype.br = function () {
      return this.options.xhtml ? '<br/>' : '<br>';
    };

    Renderer.prototype.del = function (text) {
      return '<del>' + text + '</del>';
    };

    Renderer.prototype.link = function (href, title, text) {
      if (this.options.sanitize) {
        try {
          var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
        } catch (e) {
          return text;
        }
        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
          return text;
        }
      }
      if (this.options.baseUrl && !originIndependentUrl.test(href)) {
        href = resolveUrl(this.options.baseUrl, href);
      }
      try {
        href = encodeURI(href).replace(/%25/g, '%');
      } catch (e) {
        return text;
      }
      var out = '<a href="' + escape(href) + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</a>';
      return out;
    };

    Renderer.prototype.image = function (href, title, text) {
      if (this.options.baseUrl && !originIndependentUrl.test(href)) {
        href = resolveUrl(this.options.baseUrl, href);
      }
      var out = '<img src="' + href + '" alt="' + text + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += this.options.xhtml ? '/>' : '>';
      return out;
    };

    Renderer.prototype.text = function (text) {
      return text;
    };

    /**
     * TextRenderer
     * returns only the textual part of the token
     */

    function TextRenderer() {}

    // no need for block level renderers

    TextRenderer.prototype.strong = TextRenderer.prototype.em = TextRenderer.prototype.codespan = TextRenderer.prototype.del = TextRenderer.prototype.text = function (text) {
      return text;
    };

    TextRenderer.prototype.link = TextRenderer.prototype.image = function (href, title, text) {
      return '' + text;
    };

    TextRenderer.prototype.br = function () {
      return '';
    };

    /**
     * Parsing & Compiling
     */

    function Parser(options) {
      this.tokens = [];
      this.token = null;
      this.options = options || marked.defaults;
      this.options.renderer = this.options.renderer || new Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
    }

    /**
     * Static Parse Method
     */

    Parser.parse = function (src, options) {
      var parser = new Parser(options);
      return parser.parse(src);
    };

    /**
     * Parse Loop
     */

    Parser.prototype.parse = function (src) {
      this.inline = new InlineLexer(src.links, this.options);
      // use an InlineLexer with a TextRenderer to extract pure text
      this.inlineText = new InlineLexer(src.links, merge({}, this.options, { renderer: new TextRenderer() }));
      this.tokens = src.reverse();

      var out = '';
      while (this.next()) {
        out += this.tok();
      }

      return out;
    };

    /**
     * Next Token
     */

    Parser.prototype.next = function () {
      return this.token = this.tokens.pop();
    };

    /**
     * Preview Next Token
     */

    Parser.prototype.peek = function () {
      return this.tokens[this.tokens.length - 1] || 0;
    };

    /**
     * Parse Text Tokens
     */

    Parser.prototype.parseText = function () {
      var body = this.token.text;

      while (this.peek().type === 'text') {
        body += '\n' + this.next().text;
      }

      return this.inline.output(body);
    };

    /**
     * Parse Current Token
     */

    Parser.prototype.tok = function () {
      switch (this.token.type) {
        case 'space':
          {
            return '';
          }
        case 'hr':
          {
            return this.renderer.hr();
          }
        case 'heading':
          {
            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, unescape(this.inlineText.output(this.token.text)));
          }
        case 'code':
          {
            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
          }
        case 'table':
          {
            var header = '',
                body = '',
                i,
                row,
                cell,
                j;

            // header
            cell = '';
            for (i = 0; i < this.token.header.length; i++) {
              cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), { header: true, align: this.token.align[i] });
            }
            header += this.renderer.tablerow(cell);

            for (i = 0; i < this.token.cells.length; i++) {
              row = this.token.cells[i];

              cell = '';
              for (j = 0; j < row.length; j++) {
                cell += this.renderer.tablecell(this.inline.output(row[j]), { header: false, align: this.token.align[j] });
              }

              body += this.renderer.tablerow(cell);
            }
            return this.renderer.table(header, body);
          }
        case 'blockquote_start':
          {
            body = '';

            while (this.next().type !== 'blockquote_end') {
              body += this.tok();
            }

            return this.renderer.blockquote(body);
          }
        case 'list_start':
          {
            body = '';
            var ordered = this.token.ordered,
                start = this.token.start;

            while (this.next().type !== 'list_end') {
              body += this.tok();
            }

            return this.renderer.list(body, ordered, start);
          }
        case 'list_item_start':
          {
            body = '';

            if (this.token.task) {
              body += this.renderer.checkbox(this.token.checked);
            }

            while (this.next().type !== 'list_item_end') {
              body += this.token.type === 'text' ? this.parseText() : this.tok();
            }

            return this.renderer.listitem(body);
          }
        case 'loose_item_start':
          {
            body = '';

            while (this.next().type !== 'list_item_end') {
              body += this.tok();
            }

            return this.renderer.listitem(body);
          }
        case 'html':
          {
            // TODO parse inline content if parameter markdown=1
            return this.renderer.html(this.token.text);
          }
        case 'paragraph':
          {
            return this.renderer.paragraph(this.inline.output(this.token.text));
          }
        case 'text':
          {
            return this.renderer.paragraph(this.parseText());
          }
      }
    };

    /**
     * Helpers
     */

    function escape(html, encode) {
      return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function unescape(html) {
      // explicitly match decimal, hex, and named HTML entities
      return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (_, n) {
        n = n.toLowerCase();
        if (n === 'colon') return ':';
        if (n.charAt(0) === '#') {
          return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
        }
        return '';
      });
    }

    function edit(regex, opt) {
      regex = regex.source || regex;
      opt = opt || '';
      return {
        replace: function replace(name, val) {
          val = val.source || val;
          val = val.replace(/(^|[^\[])\^/g, '$1');
          regex = regex.replace(name, val);
          return this;
        },
        getRegex: function getRegex() {
          return new RegExp(regex, opt);
        }
      };
    }

    function resolveUrl(base, href) {
      if (!baseUrls[' ' + base]) {
        // we can ignore everything in base after the last slash of its path component,
        // but we might need to add _that_
        // https://tools.ietf.org/html/rfc3986#section-3
        if (/^[^:]+:\/*[^/]*$/.test(base)) {
          baseUrls[' ' + base] = base + '/';
        } else {
          baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
        }
      }
      base = baseUrls[' ' + base];

      if (href.slice(0, 2) === '//') {
        return base.replace(/:[\s\S]*/, ':') + href;
      } else if (href.charAt(0) === '/') {
        return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
      } else {
        return base + href;
      }
    }
    var baseUrls = {};
    var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

    function noop() {}
    noop.exec = noop;

    function merge(obj) {
      var i = 1,
          target,
          key;

      for (; i < arguments.length; i++) {
        target = arguments[i];
        for (key in target) {
          if (Object.prototype.hasOwnProperty.call(target, key)) {
            obj[key] = target[key];
          }
        }
      }

      return obj;
    }

    function splitCells(tableRow, count) {
      var cells = tableRow.replace(/([^\\])\|/g, '$1 |').split(/ +\| */),
          i = 0;

      if (cells.length > count) {
        cells.splice(count);
      } else {
        while (cells.length < count) {
          cells.push('');
        }
      }

      for (; i < cells.length; i++) {
        cells[i] = cells[i].replace(/\\\|/g, '|');
      }
      return cells;
    }

    /**
     * Marked
     */

    function marked(src, opt, callback) {
      // throw error in case of non string input
      if (typeof src === 'undefined' || src === null) {
        throw new Error('marked(): input parameter is undefined or null');
      }
      if (typeof src !== 'string') {
        throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
      }

      if (callback || typeof opt === 'function') {
        if (!callback) {
          callback = opt;
          opt = null;
        }

        opt = merge({}, marked.defaults, opt || {});

        var highlight = opt.highlight,
            tokens,
            pending,
            i = 0;

        try {
          tokens = Lexer.lex(src, opt);
        } catch (e) {
          return callback(e);
        }

        pending = tokens.length;

        var done = function done(err) {
          if (err) {
            opt.highlight = highlight;
            return callback(err);
          }

          var out;

          try {
            out = Parser.parse(tokens, opt);
          } catch (e) {
            err = e;
          }

          opt.highlight = highlight;

          return err ? callback(err) : callback(null, out);
        };

        if (!highlight || highlight.length < 3) {
          return done();
        }

        delete opt.highlight;

        if (!pending) return done();

        for (; i < tokens.length; i++) {
          (function (token) {
            if (token.type !== 'code') {
              return --pending || done();
            }
            return highlight(token.text, token.lang, function (err, code) {
              if (err) return done(err);
              if (code == null || code === token.text) {
                return --pending || done();
              }
              token.text = code;
              token.escaped = true;
              --pending || done();
            });
          })(tokens[i]);
        }

        return;
      }
      try {
        if (opt) opt = merge({}, marked.defaults, opt);
        return Parser.parse(Lexer.lex(src, opt), opt);
      } catch (e) {
        e.message += '\nPlease report this to https://github.com/markedjs/marked.';
        if ((opt || marked.defaults).silent) {
          return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
        }
        throw e;
      }
    }

    /**
     * Options
     */

    marked.options = marked.setOptions = function (opt) {
      merge(marked.defaults, opt);
      return marked;
    };

    marked.getDefaults = function () {
      return {
        baseUrl: null,
        breaks: false,
        gfm: true,
        headerIds: true,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: true,
        pedantic: false,
        renderer: new Renderer(),
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        tables: true,
        xhtml: false
      };
    };

    marked.defaults = marked.getDefaults();

    /**
     * Expose
     */

    marked.Parser = Parser;
    marked.parser = Parser.parse;

    marked.Renderer = Renderer;
    marked.TextRenderer = TextRenderer;

    marked.Lexer = Lexer;
    marked.lexer = Lexer.lex;

    marked.InlineLexer = InlineLexer;
    marked.inlineLexer = InlineLexer.output;

    marked.parse = marked;

    if ((_typeof(exports)) === 'object') {
      module.exports = marked;
    } else {
      root.marked = marked;
    }
  })(commonjsGlobal || (typeof window !== 'undefined' ? window : commonjsGlobal));
  });

  var _createClass$4 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Editor = function () {
    function Editor(content, el) {
      _classCallCheck$4(this, Editor);

      this.content = marked(content);
      this.el = el;
      this.values = {};
      this.content = this.content.replace(new RegExp('{{(.*?)}}', 'gis'), '<span data-code="$1">$1</span>');
      this.el.innerHTML = this.content;
      this.initDOM();
    }

    _createClass$4(Editor, [{
      key: 'initDOM',
      value: function initDOM() {
        var _this = this;

        var els = this.el.querySelectorAll('[data-code]');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = els[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var el = _step.value;

            el.className = 'editable';

            var split = el.getAttribute('data-code').split('|');
            var code = split[0];
            el.setAttribute('data-code', code);
            split.shift();

            var options = {};
            for (var i = 0; i < split.length; i++) {
              var opt = split[i].split(':');
              if (opt[0]) {
                options[opt[0]] = opt[1] || true;
              }
            }

            var span = document.createElement('span');
            span.innerHTML = code.replace('\n', '<br>');
            span.setAttribute('contenteditable', true);

            el.innerHTML = '';
            el.appendChild(span);

            if (!this.values[code]) {
              this.values[code] = {
                value: code,
                els: [],
                options: {}
              };
            }
            this.values[code].els.push(el);
            this.values.options = Object.assign(this.values[code].options, options);
            if (this.values[code].options.type) {
              span.setAttribute('type', this.values[code].options.type);
            }

            span.addEventListener('focus', function () {
              setTimeout(function () {
                document.execCommand('selectAll', false, null);
              }, 40);
            });
            span.addEventListener('input', function (inputCode) {
              return function (event) {
                _this.handleChange(inputCode, event.target.innerHTML);
              };
            }(code));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: 'handleChange',
      value: function handleChange(code, value) {
        if (this.values[code].value !== value) {
          this.values[code].value = value;
          this.valueUpdated(code);
        }
      }
    }, {
      key: 'valueUpdated',
      value: function valueUpdated(code) {
        var edited = false;
        if (this.values[code].value !== code && this.values[code].value.replace(/&nbsp;/g, '').trim().length > 0) {
          edited = true;
        }
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.values[code].els[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var el = _step2.value;

            if (edited && (' ' + el.className + ' ').indexOf(' editable--edited ') === -1) {
              el.className += ' editable--edited';
            } else if (!edited && (' ' + el.className + ' ').indexOf(' editable--edited ') >= 0) {
              el.className = (' ' + el.className + ' ').replace(' editable--edited ', ' ').replace(/\s\s+/g, ' ');
            }

            var span = el.querySelector('span');
            if (span) {
              if (span.innerHTML !== this.values[code].value) {
                span.innerHTML = this.values[code].value;
              }
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    }]);

    return Editor;
  }();

  var _createClass$5 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$4(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var templatesIncrementId = 0;

  var Template = function (_React$Component) {
    _inherits$4(Template, _React$Component);

    function Template() {
      _classCallCheck$5(this, Template);

      return _possibleConstructorReturn$4(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
    }

    _createClass$5(Template, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.id = 'templatesReactId' + templatesIncrementId;
        templatesIncrementId++;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.edito = new Editor(this.props.content, document.getElementById(this.id));
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Template of:',
            this.props.name
          ),
          React.createElement(
            'p',
            { className: 'description' },
            this.props.description
          ),
          React.createElement(
            'nav',
            { className: 'nav' },
            React.createElement(
              reactRouterDom.Link,
              { to: '/' },
              'Return to home'
            ),
            React.createElement('span', { className: 'hr' }),
            React.createElement(
              'a',
              { href: 'https://github.com/dimitrinicolas/legal-terms#contributing' },
              'Contribute on Github'
            )
          ),
          React.createElement('div', { id: this.id, className: 'page markdown-body' })
        );
      }
    }]);

    return Template;
  }(React.Component);

  var _createClass$6 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn$5(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var Page404 = function (_React$Component) {
    _inherits$5(Page404, _React$Component);

    function Page404() {
      _classCallCheck$6(this, Page404);

      return _possibleConstructorReturn$5(this, (Page404.__proto__ || Object.getPrototypeOf(Page404)).apply(this, arguments));
    }

    _createClass$6(Page404, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Page introuvable'
          ),
          React.createElement(
            'nav',
            { className: 'nav' },
            React.createElement(
              reactRouterDom.Link,
              { to: '/' },
              'Return to home'
            )
          )
        );
      }
    }]);

    return Page404;
  }(React.Component);

  var siteVitrineSociete = "# Mentions légales\n\nConformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du \n21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous \nportons à la connaissance des utilisateurs et visiteurs du site : \n{{URL (exemple.fr)|type:url}} les informations suivantes :\n\n### Informations légales\n\nSociété : {{Nom de la société}}  \nStatut : {{Statut (ex : SAS au capital de ...)}}  \nAdresse : {{Adresse de l'établissement ou du siège social}}  \nContact : {{Adresse e-mail et numéro de téléphone}}  \nSIRET :  {{SIRET|type:number}}  \nRCS : {{RCS si l'entreprise a une activité commerciale}}  \nNuméro de TVA : \n{{Numéro de TVA intracommunautaire en cas d'activité commerciale}}  \nRM : {{RM si l'entreprise a une activité artisanale}}\n\nResponsable de la publication : {{Responsable de la publication}}  \nHébergeur du site : {{Hébergeur et son adresse}}\n\n## Description des services fournis\n\nLe site {{URL (exemple.fr)}} a pour objet de fournir une information concernant \nl’ensemble des activités de la société.\n\nLe proprietaire du site s’efforce de fournir sur le site {{URL (exemple.fr)}} \ndes informations aussi précises que possible. Toutefois, il ne pourra être \ntenue responsable des omissions, des inexactitudes et des carences dans la mise \nà jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui \nfournissent ces informations.\n\nTous les informations proposées sur le site {{URL (exemple.fr)}} sont données à \ntitre indicatif, sont non exhaustives, et sont susceptibles d’évoluer. Elles \nsont données sous réserve de modifications ayant été apportées depuis leur mise \nen ligne.\n\n## Propriété intellectuelle et contrefaçons\n\nLe proprietaire du site est propriétaire des droits de propriété intellectuelle \nou détient les droits d’usage sur tous les éléments accessibles sur le site, \nnotamment les textes, images, graphismes, logo, icônes, sons, logiciels...\nToute reproduction, représentation, modification, publication, adaptation \ntotale ou partielle des éléments du site, quel que soit le moyen ou le procédé \nutilisé, est interdite, sauf autorisation expresse.\n\n## Cookies\n\nL’utilisateur est informé que lors de ses visites sur le site \n{{URL (exemple.fr)}}, un ou des cookies sont susceptible de s’installer \nautomatiquement sur son ordinateur. Les données obtenues visent à faciliter la \nnavigation ultérieure sur le site, et ont également vocation à permettre \ndiverses mesures de fréquentation.\n\n## Données personnelles\n\nLe site assure à l'utilisateur une collecte et un traitement d'informations \npersonnelles dans le respect de la vie privée conformément à la loi n°78-17 du \n6 janvier 1978 relative à l'informatique, aux fichiers et aux libertées.\n\nEn vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, \nl'utilisateur dispose d'un droit d'accès, de rectification, de suppression et \nd'opposition de ses données personnelles.\n";

  var siteVitrineIndividuelle = "# Mentions légales\n\nConformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du \n21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous \nportons à la connaissance des utilisateurs et visiteurs du site : \n{{URL (exemple.fr)|type:url}} les informations suivantes :\n\n### Informations légales\n\n{{Nom et prénom}}  \nAdresse : {{Adresse du domicile}}  \nAdresse e-mail : {{Adresse e-mail|type:email}}  \nTéléphone :  {{numéro de téléphone|type:tel}}  \nRCS : {{RCS si l'entreprise a une activité commerciale}}  \nNuméro de TVA : \n{{Numéro de TVA intracommunautaire en cas d'activité commerciale}}  \nRM : {{RM si l'entreprise a une activité artisanale}}\n\nResponsable de la publication : {{Responsable de la publication}}  \nHébergeur du site : {{Hébergeur et son adresse}}\n\n## Description des services fournis\n\nLe site {{URL (exemple.fr)}} a pour objet de fournir une information concernant \nl’ensemble des activités de la société.\n\nLe proprietaire du site s’efforce de fournir sur le site {{URL (exemple.fr)}} \ndes informations aussi précises que possible. Toutefois, il ne pourra être \ntenue responsable des omissions, des inexactitudes et des carences dans la mise \nà jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui \nfournissent ces informations.\n\nTous les informations proposées sur le site {{URL (exemple.fr)}} sont données à \ntitre indicatif, sont non exhaustives, et sont susceptibles d’évoluer. Elles \nsont données sous réserve de modifications ayant été apportées depuis leur mise \nen ligne.\n\n## Propriété intellectuelle et contrefaçons\n\nLe proprietaire du site est propriétaire des droits de propriété intellectuelle \nou détient les droits d’usage sur tous les éléments accessibles sur le site, \nnotamment les textes, images, graphismes, logo, icônes, sons, logiciels...\nToute reproduction, représentation, modification, publication, adaptation \ntotale ou partielle des éléments du site, quel que soit le moyen ou le procédé \nutilisé, est interdite, sauf autorisation expresse.\n\n## Cookies\n\nL’utilisateur est informé que lors de ses visites sur le site \n{{URL (exemple.fr)}}, un ou des cookies sont susceptible de s’installer \nautomatiquement sur son ordinateur. Les données obtenues visent à faciliter la \nnavigation ultérieure sur le site, et ont également vocation à permettre \ndiverses mesures de fréquentation.\n\n## Données personnelles\n\nLe site assure à l'utilisateur une collecte et un traitement d'informations \npersonnelles dans le respect de la vie privée conformément à la loi n°78-17 du \n6 janvier 1978 relative à l'informatique, aux fichiers et aux libertées.\n\nEn vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, \nl'utilisateur dispose d'un droit d'accès, de rectification, de suppression et \nd'opposition de ses données personnelles.\n";

  var cookiesBandeau = "### Cookies pour les statistiques de visites\n\n> En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de \n> cookies pour réaliser des statistiques de fréquentation.\n\n### Cookies pour les publicités\n\n> En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de \n> cookies pour vous proposer des publicités ciblées adaptés à vos centres \n> d’intérêts.\n";

  var fr = {
    code: 'fr',
    name: 'Français',
    categories: [{
      code: 'mentions-legales',
      name: 'Mentions Légales',
      description: 'Description des mentions légales',
      templates: [{
        code: 'site-vitrine-societe',
        name: 'Site vitrine d\'une société',
        description: '\n            Mentions l\xE9gales obligatoires pour le site vitrine d\'une soci\xE9t\xE9.\n          ',
        content: siteVitrineSociete
      }, {
        code: 'site-vitrine-individuelle',
        name: 'Site vitrine d\'une entreprise individuelle',
        description: '\n            Mentions l\xE9gales obligatoires pour le site vitrine d\'une entreprise \n            individuelle (AE, EI, EIRL...).\n          ',
        content: siteVitrineIndividuelle
      }]
    }, {
      code: 'cookies',
      name: 'Cookies',
      description: 'Description des cookies',
      templates: [{
        code: 'bandeau',
        name: 'Bandeau ',
        description: '\n            Lorsqu\'un site internet doit d\xE9poser des cookies traceurs sur les \n            ordinateurs de ses utilisateur, l\'\xE9diteur doit obligatoirement les \n            informer de la finalit\xE9 des cookies, obtenir leur consentement \n            avant de les d\xE9poser et leurs permettre de les refuser.\n          ',
        content: cookiesBandeau
      }]
    }]
  };

  var privacyPolicy = "# Privacy Policy\n";

  var en = {
    code: 'en',
    name: 'English',
    categories: [{
      code: 'privacy-policy',
      name: 'Privacy Policy',
      description: 'Description of privacy policy',
      templates: [{
        code: 'privacy-policy',
        name: 'Privacy Policy',
        content: privacyPolicy
      }]
    }]
  };

  var templates = {
    langs: [en, fr]
  };

  var templatesRoutes = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = templates.langs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var lang = _step.value;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = lang.categories[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var categorie = _step2.value;

          var _loop = function _loop(template) {
            templatesRoutes.push(React.createElement(reactRouterDom.Route, {
              key: '/' + lang.code + '/' + categorie.code + '/' + template.code,
              path: '/' + lang.code + '/' + categorie.code + '/' + template.code,
              component: function component() {
                return React.createElement(Template, template);
              }
            }));
          };

          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = categorie.templates[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var template = _step3.value;

              _loop(template);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ReactDOM.render(React.createElement(
    reactRouterDom.HashRouter,
    null,
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        reactRouterDom.Switch,
        null,
        React.createElement(reactRouterDom.Route, {
          exact: true,
          path: '/',
          component: function component() {
            return React.createElement(Home, { templates: templates });
          }
        }),
        React.createElement(reactRouterDom.Route, {
          exact: true,
          path: '/legal-terms-disclaimer',
          component: LegalTermsDisclaimer
        }),
        templatesRoutes,
        React.createElement(reactRouterDom.Route, { component: Page404 })
      ),
      React.createElement(Nav, null)
    )
  ), document.getElementById('app'));

})));
