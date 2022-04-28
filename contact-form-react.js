'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactFormReact = function (_React$Component) {
  _inherits(ContactFormReact, _React$Component);

  function ContactFormReact(props) {
    _classCallCheck(this, ContactFormReact);

    var _this = _possibleConstructorReturn(this, (ContactFormReact.__proto__ || Object.getPrototypeOf(ContactFormReact)).call(this, props));

    _this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(ContactFormReact, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var value = event.target.value;
      this.setState(Object.assign({}, this.state, _defineProperty({}, event.target.name, value)));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message
        })
      };
      fetch('https://us-central1-myresume-fda5f.cloudfunctions.net/sendMail', requestOptions).then(function (response) {
        return console.log(response.body);
      }).then(function (data) {
        return console.log(data);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { 'class': 'container w-75', 'data-aos': 'fade-up' },
        React.createElement(
          'div',
          { 'class': 'section-title' },
          React.createElement(
            'h2',
            null,
            'Contact'
          ),
          React.createElement(
            'p',
            { 'class': 'lead' },
            'Have questions or need assistance? feel free to send us a message.'
          )
        ),
        React.createElement(
          'div',
          { 'class': 'row mt-1' },
          React.createElement(
            'div',
            { 'class': 'col-lg-4' },
            React.createElement(
              'div',
              { 'class': 'info' },
              React.createElement(
                'div',
                { 'class': 'address' },
                React.createElement(
                  'h4',
                  null,
                  React.createElement('i', { 'class': 'bi bi-geo-alt' }),
                  ' Location:'
                ),
                React.createElement(
                  'p',
                  null,
                  'Chicago, IL 60617'
                )
              ),
              React.createElement(
                'div',
                { 'class': 'email' },
                React.createElement(
                  'h4',
                  null,
                  ' ',
                  React.createElement('i', { 'class': 'bi bi-envelope' }),
                  ' Email:'
                ),
                React.createElement(
                  'p',
                  null,
                  'bernardojimenezz@gmail.com'
                )
              ),
              React.createElement(
                'div',
                { 'class': 'phone' },
                React.createElement(
                  'h4',
                  null,
                  React.createElement('i', { 'class': 'bi bi-phone' }),
                  ' Call:'
                ),
                React.createElement(
                  'p',
                  null,
                  '+1 (708) 314-0477'
                )
              )
            )
          ),
          React.createElement(
            'div',
            { 'class': 'col-lg-8 mt-5 mt-lg-0' },
            React.createElement(
              'form',
              { action: 'forms/contact.php', onSubmit: this.handleSubmit, role: 'form', 'class': 'php-email-form' },
              React.createElement(
                'div',
                { 'class': 'row' },
                React.createElement(
                  'div',
                  { 'class': 'col-md-6 form-group' },
                  React.createElement('input', { type: 'text', value: this.state.name, onChange: this.handleChange, name: 'name', 'class': 'form-control', id: 'name', placeholder: 'Your Name', required: true })
                ),
                React.createElement(
                  'div',
                  { 'class': 'col-md-6 form-group mt-3 mt-md-0' },
                  React.createElement('input', { type: 'email', value: this.state.email, onChange: this.handleChange, 'class': 'form-control', name: 'email', id: 'email', placeholder: 'Your Email', required: true })
                )
              ),
              React.createElement(
                'div',
                { 'class': 'form-group mt-3' },
                React.createElement('input', { type: 'text', value: this.state.subject, onChange: this.handleChange, 'class': 'form-control', name: 'subject', id: 'subject', placeholder: 'Subject', required: true })
              ),
              React.createElement(
                'div',
                { 'class': 'form-group mt-3' },
                React.createElement('textarea', { 'class': 'form-control', value: this.state.message, onChange: this.handleChange, name: 'message', rows: '5', placeholder: 'Message' })
              ),
              React.createElement(
                'div',
                { 'class': 'text-center' },
                React.createElement(
                  'button',
                  { 'class': 'btn btn-primary mt-5 mb-5', type: 'submit' },
                  'Send Message'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ContactFormReact;
}(React.Component);

var domContainer = document.querySelector('#contact-form-react');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(ContactFormReact, null));