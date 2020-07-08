//Objective is to find the length of the shortest continuous subarray that 
//has a sum of k.

let k = 7
let nums = [2,3,1,2,4,3]


//O(n) solution that uses a sliding window approach.

let ans = Infinity 
let left = 0
let right = 0
let sum = 0

while (right < nums.length) {
    sum += nums[right]

    //If we've reached/went over the sum, move over the left pointer
    while (sum >= k) {
        ans = Math.min(ans, right - left + 1)
        sum -= nums[left++]
    }

    right++
}

return ans !== Infinity ? ans : 0
