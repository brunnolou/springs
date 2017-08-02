import springs from '../src';

test('should run without errors', () => {
  springs(30, 7);
});

it('Should return a different value after some time', (done) => {
  const s1 = springs(30, 0.1);

  s1(1000);

  setInterval(() => {
    expect(s1(0)).toMatchSnapshot();

    done();
  }, 30);
});
