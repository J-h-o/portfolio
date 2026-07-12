import * as React from 'react';

/**
 * Outlined mono pill for tech/stack labels ("React", "Postgres", "LLM pipeline").
 */
export interface TagProps {
  tone?: 'neutral' | 'accent' | 'dark';
  /** Renders a × remove button */
  onRemove?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;
