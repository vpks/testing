const str1 = "hello 67890";
const str2 = "world 12345";

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

console.log(mergeTwo(str1, str2));

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
console.log(flatten(f));

const p = new Promise((resolve, reject) => {
  document.getElementById("touch").addEventListener("click", () => {
    resolve("clicked");
  });
});
p.then((x) => console.log(x));
