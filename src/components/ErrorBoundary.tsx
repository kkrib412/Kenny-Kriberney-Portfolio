import React, { Component, ErrorInfo, ReactNode } from "react";
import { Terminal, RefreshCw } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error inside Kenny's portfolio app:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0C0C0E] text-zinc-300 font-mono flex items-center justify-center p-6 select-text">
          <div className="max-w-xl w-full border border-red-500/30 bg-[#020408] rounded-lg p-6 space-y-4 shadow-xl">
            <div className="flex items-center space-x-2 text-red-500 border-b border-red-500/20 pb-2">
              <Terminal className="w-5 h-5 animate-pulse" />
              <span className="font-bold tracking-widest text-xs uppercase">CRITICAL_EXCEPTION</span>
            </div>
            
            <p className="text-zinc-400 text-xs">
              The application encountered a runtime exception. This screen isolates the crash to prevent complete system freezes.
            </p>

            <div className="bg-red-500/5 border border-red-500/10 p-3 rounded text-[11px] text-red-500 overflow-x-auto max-h-[150px]">
              <div className="font-bold">Error:</div>
              <pre className="mt-1 whitespace-pre-wrap">{this.state.error?.message || "Unknown Runtime Error"}</pre>
            </div>

            <button
              onClick={this.handleReset}
              className="flex items-center space-x-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 font-mono text-xs border border-red-500/20 px-4 py-2.5 rounded transition-all focus:outline-none"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>RE-ENGAGE SEQUENCE</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
