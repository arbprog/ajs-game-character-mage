import lifeBarDisplay from '../game';

test('lifeBar >= 50', () => {
  const character = { name: 'Маг', health: 90 };
  const result = lifeBarDisplay(character);

  expect(result).toBe('healthy');
});

test('lifeBar < 50 && >= 15', () => {
  const character = { name: 'Маг', health: 15 };
  const result = lifeBarDisplay(character);

  expect(result).toBe('wounded');
});

test('lifeBar < 15', () => {
  const character = { name: 'Маг', health: 10 };
  const result = lifeBarDisplay(character);

  expect(result).toBe('critical');
});
