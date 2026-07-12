import * as React from 'react';

/**
 * Toggle switch — the one control whose on-state is signal green.
 */
export interface SwitchProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function Switch(props: SwitchProps): JSX.Element;
