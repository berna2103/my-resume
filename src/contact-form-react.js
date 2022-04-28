'use strict';

class ContactFormReact extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      name: '',
      email: '',
      subject: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState( {...this.state, [event.target.name]: value} );
  }

  handleSubmit(event) {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
         name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message
      })
  };
  fetch('https://us-central1-myresume-fda5f.cloudfunctions.net/sendMail', requestOptions)
      .then(response => console.log(response))
      .then(data => console.log(data));
}

  render() {
    return (

      <div class="container w-75" data-aos="fade-up">
      <div class="section-title">
        <h2>Contact</h2>
        <p class='lead'>Have questions or need assistance? feel free to send us a message.</p>
      </div>
      <div class='row mt-1'>
      <div class="col-lg-4">
      <div class="info">
        <div class="address">
          <h4><i class="bi bi-geo-alt"></i> Location:</h4>
          <p>Chicago, IL 60617</p>
        </div>

        <div class="email">
          
          <h4> <i class="bi bi-envelope"></i> Email:</h4>
          <p>bernardojimenezz@gmail.com</p>
        </div>

        <div class="phone">
          
          <h4><i class="bi bi-phone"></i> Call:</h4>
          <p>+1 (708) 314-0477</p>
        </div>

      </div>

    </div>
      <div class='col-lg-8 mt-5 mt-lg-0'>
        <form action="forms/contact.php" onSubmit={this.handleSubmit} role="form" class="php-email-form">
          <div class="row">
            <div class="col-md-6 form-group">
              <input type="text" value={this.state.name} onChange={this.handleChange} name="name" class="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" value={this.state.email} onChange={this.handleChange}  class="form-control" name="email" id="email" placeholder="Your Email"  required/>
            </div>
          </div>
          <div class="form-group mt-3">
            <input type="text" value={this.state.subject} onChange={this.handleChange} class="form-control" name="subject" id="subject" placeholder="Subject"  required/>
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" value={this.state.message} onChange={this.handleChange}  name="message" rows="5" placeholder="Message" ></textarea>
          </div>
          {/* <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>
          </div> */}
          <div class="text-center">
            <button class='btn btn-primary mt-5 mb-5' type="submit">Send Message</button></div>
        </form>
      </div>
      </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#contact-form-react');
const root = ReactDOM.createRoot(domContainer);
root.render(<ContactFormReact/>);