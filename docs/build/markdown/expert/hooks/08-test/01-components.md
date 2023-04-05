<!-- .slide: class="center" -->

# Test components

* Same way as before

```javascript
test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})
```

[Credits: Testing-library](https://testing-library.com/docs/react-testing-library/example-intro)