Modal dialog with title, body, and action footer.

```jsx
<Dialog open={open} onClose={close} title="Send brief?"
  footer={<><Button variant="secondary" onClick={close}>Cancel</Button><Button onClick={send}>Send</Button></>}>
  We'll reply within one business day.
</Dialog>
```
