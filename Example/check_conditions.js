export function checkNum(x) {
    let result;

if (!isNaN(x)) {
  if (x % 2 === 0){
    result = 'число четное';
  }
  else if (x % 2 !== 0) {
    result = 'число нечетное';
  }
} else {
  result = 'Упс, кажется, вы ошиблись';
}
  return result;
};