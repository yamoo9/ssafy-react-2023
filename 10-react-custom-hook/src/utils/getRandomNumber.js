export default function getRandomNumber({ min = 0, max = 10 } = {}) {
  if (min > max) {
    throw new Error('min 값이 max 보다 큽니다.');
  }
  return Math.floor(Math.random() * (max - min) + min);
}
