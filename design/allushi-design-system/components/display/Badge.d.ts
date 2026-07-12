import * as React from 'react';

/**
 * Status badge — mono type, tinted pill, leading dot.
 */
export interface BadgeProps {
  tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  /** Show the leading status dot (default true) */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
