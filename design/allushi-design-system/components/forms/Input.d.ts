import * as React from 'react';

/**
 * Text field with optional label, hint, and error. Focus shows the green ring;
 * set `multiline` for a textarea.
 */
export interface InputProps {
  label?: string;
  hint?: string;
  /** Error message; replaces hint and turns the border red */
  error?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  /** Render a textarea */
  multiline?: boolean;
  rows?: number;
  style?: React.CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
