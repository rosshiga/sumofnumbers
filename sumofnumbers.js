

function sumFor(data) {
  let answer = 0;
  data.forEach(function (num) {
    answer += num;
  });
  return answer;
}

function sumWhile(list) {
  let answer = 0;
  while (list.length !== 0) {
    answer += list.pop();
  }
  return answer;
}

function sumRecursion(data, tail) {
  if (data.length === 0) return tail;
  let answer = tail;
  const partition = data;
  answer += partition.pop();
  return answer + sumRecursion(partition, tail);
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo) {
    return memo + data;
  });
}
