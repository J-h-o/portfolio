import * as React from 'react';

/**
 * Allushi button. Primary = ink fill; accent = signal green (max one per view);
 * secondary = 1px outline; ghost = text-only; inverse = white fill for dark surfaces.
 * Hover shifts fill one step; press translates 1px down; focus shows the green ring.
 */
export interface ButtonProps {
  /** Visual variant */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'inverse';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Optional leading icon node (16px Lucide) */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): JSX.Element;
