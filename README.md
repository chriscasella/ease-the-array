<h1>Answer for the 'Ease the Array' coding challenge of GeekForGeeks</h1>
[Link to Problem](https://practice.geeksforgeeks.org/problems/ease-the-array/0#ExpectOP)
<h3>Given an array of integers of size N. Assume ‘0’ as invalid number and all other as valid number. Write a program that modifies the array in such a way that if next number is  valid number and is same as current number, double the current number value and replace the next number with 0. After the modification, rearrange the array such that all 0’s are shifted to the end and the sequence of the valid number or new doubled number is maintained as in the original array.</h3>

Examples:
<code>
    Input : arr[] = {2, 2, 0, 4, 0, 8}
    Output : 4 4 8 0 0 0
    
    Input : arr[] = {0, 2, 2, 2, 0, 6, 6, 0, 0, 8}
    Output :  4 2 12 8 0 0 0 0 0 0
</code>

I answered this question with a vanilla javascript ES6 approach.

<code>
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
</code>
