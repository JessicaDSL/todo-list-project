describe('TESTANDO UMA COISA', () => {
  it('should return one', () => {
    const number = 1;
    expect(number).toBe(1)
  })
})

describe('TESTANDO OUTRA COISA', () => {
  it('descrevendo o teste', () => {
    const nome = 'Jessy';
    expect(nome).not.toBe('Jessy')
  })
})