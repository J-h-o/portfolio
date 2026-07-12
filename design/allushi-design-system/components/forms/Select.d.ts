import * as React from 'react';

/**
 * Styled native select with a chevron and the shared field chrome.
 */
export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Disabled first option shown when value is empty */
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function Select(props: SelectProps): JSX.Element;
