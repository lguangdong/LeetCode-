/*给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5*/
//思路：二分法，
//中位数：将一个集合划分为长度相等的两个子集，其中一个子集中的元素总是大于另一个子集中的元素

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let imin, imax, m, n, i, j;
    if (nums1.length > nums2.length) {
        m = nums2;
        n = nums1;
    } else {
        m = nums1;
        n = nums2;
    }
    imin = 0;
    imax = m.length;
    let lenhalf = (m.length + n.length + 1) / 2;
    while (imin <= imax) {
        i = (imin + imax) / 2;
        j = lenhalf - i;
        if (i < imax && n[j - 1] > m[i]) {  //j>0
            imin = i + 1;  //i is small
        } else if (i > imin && m[i - 1] > n[j]) {
            imax = i - 1;
        } else {
            let leftMax = 0;
            if (i == 0) {
                leftMax = n[j - 1];
            } else if (j == 0) {
                leftMax = m[i - 1];
            } else {
                leftMax = m[i - 1] >= n[j - 1] ? m[i - 1] : n[j - 1];
            }
            if ((m.length + n.length) % 2 == 1) {
                return leftMax;
            }
            let rightMin = 0;
            if (i = m.length) {
                rightMin = n[j];
            } else if (j = n.length) {
                rightMin = m[i];
            }else{
                rightMin = n[j] <= m[i] ? n[j] : m[i];
            }
            return (leftMax + rightMin)/2;
        }
    }
    return;
};
