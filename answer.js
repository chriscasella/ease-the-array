//replace this variable with array to test
let arr = [0, 2, 2, 2, 0, 6, 6, 0, 0, 8];

let zeros = [];
let res = [];

let parseArr = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        let curr = arr[i];
        let next = arr[i + 1];
        let prev = arr[i - 1];
        let last = arr[arr.length - 1]
        let x2 = curr * 2;
        if (curr == next &&
            curr != prev &&
            curr != 0 &&
            curr != last) {
            res.push(curr * 2)
            next = 0;
            zeros.push(0);
        } else if (curr == next &&
            curr == prev &&
            curr != 0 &&
            curr != last) {
            res.push(curr);
        } else if (curr == 0 &&
            curr != last) {
            zeros.push(0);
        } else if (curr != 0 &&
            curr != next &&
            curr != prev
            && curr != last) {
            res.push(curr);
        } else if (curr == last &&
            curr != 0) {
            res.push(curr);
            let ans = res.concat(zeros)
            console.log('ans', ans)
        } else if (curr == last &&
            curr == 0) {
            console.log('res!', res);
            zeros.push(0);
            let ans = res.concat(zeros)
            console.log('ans', ans)
        }
    }
}

parseArr(arr);