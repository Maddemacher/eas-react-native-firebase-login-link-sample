import { Component } from "react";
import { createLogger } from "../../../logging";
import { UnhandledErrorScreen } from "../../../screens/UnhandledErrorScreen";

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

const logger = createLogger("ErrorBoundary.tsx");

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state: { error: Error | undefined } = {
    error: undefined
  };

  componentDidCatch(error: Error) {
    logger.error("Unhandled error occured", error);

    this.setState({ error });
  }

  render() {
    if (this.state.error !== undefined) {
      return <UnhandledErrorScreen />;
    }

    return this.props.children;
  }
}
