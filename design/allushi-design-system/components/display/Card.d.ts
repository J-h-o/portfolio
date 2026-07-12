import * as React from 'react';

/**
 * Surface card: 1px border + whisper shadow on light, ink-900 on dark bands.
 */
export interface CardProps {
  /** Ink-900 variant for dark sections */
  dark?: boolean;
  /** 24px padding (default true) */
  padded?: boolean;
  /** Raise shadow / lighten on hover */
  hoverable?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;
