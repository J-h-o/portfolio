import * as React from 'react';

/**
 * Radio button; group by `name`.
 */
export interface RadioProps {
  name?: string;
  label?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function Radio(props: RadioProps): JSX.Element;
