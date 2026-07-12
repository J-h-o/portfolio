import * as React from 'react';

/**
 * Ink toast with a status dot. Position/stacking is the caller's concern.
 */
export interface ToastProps {
  tone?: 'success' | 'warning' | 'danger' | 'info';
  title?: string;
  description?: string;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): JSX.Element;
