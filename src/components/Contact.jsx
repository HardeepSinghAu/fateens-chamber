// Class component version
import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      message: "",
      email: "",
      userMessage: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
        // square brackets means that it's a key
        [event.target.name]: event.target.value
    })
  }

//   handleNameChange = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleMessageChange = (event) => {
//     this.setState({
//       message: event.target.value,
//     });
//   };

//   handleEmailChange = (event) => {
//     this.setState({
//       email: event.target.value,
//     });
//   };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Submitted!");
    console.log("type of message:", typeof this.state.message);
    console.log("parse to a integer", parseInt(this.state.message));
    console.log("join:", this.state.message.toLowerCase().split(" ").join(""));
    // !this.state.name
    if (this.state.name.length === 0) {
      this.setState({
        userMessage: "Name must be provided!",
      });
    } else if (this.state.message.length === 0) {
      this.setState({
        userMessage: "Message must be provided.",
      });
    } else if (this.state.email.length === 0) {
      this.setState({
        userMessage: "Email must be provided.",
      });
    } else if (!isNaN(parseInt(this.state.message))) {
      this.setState({
        userMessage: "Message must not be a number.",
      });
    } else if (
      this.state.message.toLowerCase().split(" ").join("").includes("moist")
    ) {
      this.setState({
        userMessage: "Please refrain from such language.",
      });
    } else {
      this.setState({
        userMessage: "All is okay!",
      });
    }
  };

  render() {
    return (
      <section id="contact">
        <div>
          <h2>Contact</h2>
        </div>
        <h3>Write me a card!</h3>

        <div>
          <form>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
            //   onChange={this.handleNameChange}
            ></input>
            <br></br>
            <label>Message:</label>
            <textarea
              type="textarea"
              name="message"
              rows="5"
              cols="33"
              value={this.state.message}
              onChange={this.handleOnChange}
            //   onChange={this.handleMessageChange}
            ></textarea>
            <br></br>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            //   onChange={this.handleEmailChange}
            ></input>
            {/* You could put button inside the form (and use event.preventDefault) */}
            {/* <button type="submit" form="#formid" value="Submit " /> */}
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
          {/* You can put the button outside the form too (without event.preventDefault)  */}

          <p style={{ color: "blue" }}>
            <b>{this.state.userMessage}</b>
          </p>
        </div>

        <div>
          <h4>This is what you have entered:</h4>
          <p>Name: {this.state.name}</p>
          <p>Message: {this.state.message}</p>
          <p>Email: {this.state.email}</p>
        </div>
      </section>
    );
  }
}

export default Contact;
