import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error Boundary caought an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/adopt-me-react/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing.{" "}
          <Link to="/adopt-me-react/">Click here to return to home page</Link>,
          or wait for five seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
