import { say } from '.'

test('メッセージが返されること', () => {
  const message = say('World')
  expect(message).toBe('Hello')
})
