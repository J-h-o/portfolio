Ink-filled action button; use `accent` (green) for at most one CTA per view.

```jsx
<Button variant="primary" size="md" onClick={save}>Start a project</Button>
<Button variant="accent">Get in touch</Button>
<Button variant="secondary">See the work</Button>
```

Variants: `primary` (ink), `accent` (green, ink text), `secondary` (outline), `ghost`, `inverse` (white, for dark sections). Sizes `sm | md | lg`. Optional `icon` node renders before the label.
