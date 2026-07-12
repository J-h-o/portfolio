import * as React from 'react';

/**
 * Underline tabs; the active indicator is the one green line.
 */
export interface TabItem {
  id: string;
  label: string;
}

export interface TabsProps {
  items?: TabItem[];
  activeId?: string;
  onChange?: (id: string) => void;
  /** Invert colors for dark sections */
  dark?: boolean;
  style?: React.CSSProperties;
}

export declare function Tabs(props: TabsProps): JSX.Element;
