import * as React from 'react';

/**
 * Hover/focus tooltip — ink bubble above the wrapped element.
 */
export interface TooltipProps {
  /** Tooltip text */
  label: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
