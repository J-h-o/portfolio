import * as React from 'react';

/**
 * Square icon-only button. Pass a 16–20px Lucide icon as children and always
 * provide a `label` for accessibility.
 */
export interface IconButtonProps {
  /** Accessible name (required) */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  /** 1px outline instead of ghost */
  outline?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
