import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStatedFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // typically you would log this to something like TrackJS or NEwRelic, Elastic apm ...
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
