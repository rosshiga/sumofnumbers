function sumFor(data) {
  let ans = 0;
  data.forEach(function (number) {
    ans += number;
  });
  return ans;
}

function sumWhile(input) {
  const list = input.slice();
  let answer = 0;
  while (list.length !== 0) {
    answer += list.pop();
  }
  return answer;
}

function sumRecursion(info) {
  const data = info.slice();
  if (data.length === 0) {
    return 0;
  }
  const x = data.shift();
  return x + sumRecursion(data);
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, number) {
    return memo + number;
  });
}
const z = [1, 2, 3, 4, 5];
console.log(sumFor(z));
console.log(sumWhile(z));
console.log(sumRecursion(z));
console.log(sumTheSimpleWay(z));
