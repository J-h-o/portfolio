import * as React from 'react';

/**
 * Modal dialog — overlay shadow, 14px radius, backdrop click or × to close.
 */
export interface DialogProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  /** Right-aligned action row (Buttons) */
  footer?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Dialog(props: DialogProps): JSX.Element | null;
