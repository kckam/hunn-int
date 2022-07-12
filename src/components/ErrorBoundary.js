import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    this.props.log?.action({
      msg: `${error.message} ${JSON.stringify(errorInfo)}`,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <section
          className="loading-screen"
          style={{
            background: `#000`,
            color: "#fff",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Oops! Something went wrong.
        </section>
      );
    }

    return this.props.children;
  }
}

export default function WrapperErrorBoundary(props) {
  return <ErrorBoundary children={props.children} />;
}
