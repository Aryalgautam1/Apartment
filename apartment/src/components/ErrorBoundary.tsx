// Error Boundary - Catches and handles React errors gracefully
import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to console or error reporting service
    console.error('Uncaught error:', error, errorInfo);
    
    // You can also log to an error reporting service like Sentry here
    // Sentry.captureException(error, { extra: errorInfo });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
          <Card className="max-w-2xl w-full p-8">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="p-4 rounded-full bg-destructive/10">
                <AlertTriangle className="h-16 w-16 text-destructive" />
              </div>
              
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-foreground">
                  Oops! Something went wrong
                </h1>
                <p className="text-muted-foreground">
                  We're sorry, but something unexpected happened. Don't worry, our team has been notified.
                </p>
              </div>

              {/* Show error details in development */}
              {import.meta.env.DEV && this.state.error && (
                <details className="w-full text-left">
                  <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground mb-2">
                    Error Details (Development Only)
                  </summary>
                  <pre className="p-4 bg-muted rounded-lg text-xs overflow-auto max-h-48">
                    {this.state.error.toString()}
                    {this.state.error.stack}
                  </pre>
                </details>
              )}

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button
                  onClick={this.handleReset}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Go to Homepage
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Try Again
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                If the problem persists, please{' '}
                <a href="/contact" className="text-accent hover:underline">
                  contact us
                </a>
                .
              </p>
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

