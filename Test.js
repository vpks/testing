const str1 = "hello 6789011";
const str2 = "world 123450";

function mergeTwo(str1, str2) {
  let i = 0;
  //console.log(i, j);
  let newStr = [];
  while (true) {
    if (str1[i]) {
      newStr.push(str1[i]);
      if (str2[i]) newStr.push(str2[i]);

      ++i;
    } else {
      if (str2[i]) {
        newStr.push(str2[i]);
        ++i;
      } else return newStr.join("").split(" ").join("");
    }
  }
}

// console.log(mergeTwo(str1, str2));

// console.log(mergeTwo(str1, str2));

const f = [1, 2, 3, 4, [4, 5, 6, [3, 5]]];

function flatten(a = []) {
  let b = [];

  a.forEach((x) => {
    if (Array.isArray(x)) {
      b.push(...flatten(x));
    } else {
      b.push(x);
    }
  });

  return b;
}

function TCP() {
  let initial = "CLOSED";
  let obj = {
    "CLOSED:APP_PASSIVE_OPEN": "LISTEN",
    "LISTEN:RCV_SYN": "SYN_RCVD",
    "SYN_RCVD:APP_CLOSE": "FIN_WAIT_1",
  };

  return function (events = []) {
    console.log(events);

    for (let i = 0; i < events.length; i++) {
      initial = obj?.[initial + ":" + events[i]];
      if (initial === undefined) return "ERROR";
    }

    return initial;
  };
}

let test = ["APP_PASSIVE_OPEN", "RCV_SYN", "END"];

let amaze = TCP();

// console.log(amaze(test));

function traverseTCPStates(eventList) {
  var state = "CLOSED"; // initial state, always
  // Traversal code goes here

  let obj = {
    "CLOSED:APP_PASSIVE_OPEN": "LISTEN",
    "CLOSED:APP_ACTIVE_OPEN": "SYN_SENT",
    "LISTEN:RCV_SYN": "SYN_RCVD",
    "LISTEN:APP_SEND": "SYN_SENT",
    "LISTEN:APP_CLOSE": "CLOSED",
    "SYN_RCVD:APP_CLOSE": "FIN_WAIT_1",
    "SYN_RCVD:RCV_ACK": "ESTABLISHED",
    "SYN_SENT:RCV_SYN": "SYN_RCVD",
    "SYN_SENT:RCV_SYN_ACK": "ESTABLISHED",
    "SYN_SENT:APP_CLOSE": "CLOSED",
    "ESTABLISHED:APP_CLOSE": "FIN_WAIT_1",
    "ESTABLISHED:RCV_FIN": "CLOSE_WAIT",
    "FIN_WAIT_1:RCV_FIN": "CLOSING",
    "FIN_WAIT_1:RCV_FIN_ACK": "TIME_WAIT",
    "FIN_WAIT_1:RCV_ACK": "FIN_WAIT_2",
    "CLOSING:RCV_ACK": "TIME_WAIT",
    "FIN_WAIT_2:RCV_FIN": "TIME_WAIT",
    "TIME_WAIT:APP_TIMEOUT": "CLOSED",
    "CLOSE_WAIT:APP_CLOSE": "LAST_ACK",
    "LAST_ACK:RCV_ACK": "CLOSED",
  };

  let keys = Object.keys(obj);

  console.log(keys);

  for (let i = 0; i < eventList.length; i++) {
    state = obj?.[`${keys.find((e) => e == state + ":" + eventList[i])}`];
    console.log(state);
    if (state == undefined) return "ERROR";
  }

  return state;
}

function merge(a = [], left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;

  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) L[i] = a[left + i];

  //console.log("Left", L);

  for (let j = 0; j < n2; j++) R[j] = a[mid + 1 + j];

  //console.log("Right", R);

  let i = 0;
  let j = 0;

  let k = left;

  let count = 0;

  while (i < n1 && j < n2) {
    if (L[i][1] <= R[j][1]) {
      a[k] = L[i];
      console.log("Left", L[i]);
      jet[L[i][0]] = jet[L[i][0]] + count;
      i++;
    } else {
      a[k] = R[j];
      console.log("Right", R[j]);
      // jet[L[i][0]] = jet[L[i][0]] + 1;
      count++;
      j++;
    }
    k++;
  }
  //console.log(k, i, j);
  while (i < n1) {
    a[k] = L[i];
    jet[L[i][0]] = jet[L[i][0]] + count;
    console.log("n1", count);
    i++;
    k++;
  }
  while (j < n2) {
    a[k] = R[j];
    // jet[R[j][0]] = jet[R[j][0]] + count;
    console.log("n2", R[j]);
    j++;
    k++;
  }
  //console.log(a);
}

function mergesort(a = [], left, right) {
  if (left >= right) return;

  let mid = Math.floor((left + right) / 2);

  mergesort(a, left, mid);
  mergesort(a, mid + 1, right);
  merge(a, left, mid, right);
}

// console.log(traverseTCPStates(["APP_ACTIVE_OPEN", "APP_CLOSE"]));

let g = [38, 27, 43, 10, 5, 4];

let jet = new Array(g.length).fill(0);

let comb = [];

g.forEach((x, i) => {
  comb.push([i, x]);
});

// console.log(comb);

mergesort(comb, 0, comb.length - 1);

// console.log(comb);
console.log(g);
console.log(jet);
