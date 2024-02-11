import { Component, PropsWithChildren } from 'react';
import { Typography, Button, Container } from '@mui/material';

type ErrorBoundaryProps = PropsWithChildren<{}>;

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="p" gutterBottom>
            Something went wrong...
          </Typography>

          <Button
            onClick={() => {
              window.location.reload();
            }}
            variant="contained"
          >
            Reload
          </Button>
        </Container>
      );
    }

    return this.props.children;
  }
}
