//描述：给出两个有序数组，将这两个数组合并为一个有序数组。
//例如：input arr1 = [1,3,5,7,9]
//           arr2 = [2,4,6,8,10]
//     output arr3 = [1,2,3,4,5,6,7,8,9,10];
//思路:1：创建一个大小为arr1.length + arr2.length的数组arr3;
//    2:同时便利数组arr1和arr2
//          选取小的当前元素放入arr3的下一个位置，然后在被选元素的数组和arr3中移动到下一元素直到一个数组末尾。
//     3：将有剩余元素的数组放入arr3中
function mergeArr(arr1,arr2){
    let arr3 = [],i = 0,j = 0,k = 0;
    while(i < arr1.length && j < arr2.length){
        if (arr1[i] < arr2[j]) {
            arr3[k++] = arr1[i++];
        }else{
            arr3[k++] = arr2[j++];
        }
    }
    if (i < arr1.length) {
        arr3[k++] = arr1[i++];
    }
    if (j < arr2.length) {
        arr3[k++] = arr2[j++];
    }
    return arr3;
}
//描述：重排一个随机出现正负数的数组，使其正负数交替出现，多余的正数或负数排在最后
function resolve(arr){
    let i = -1;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element < 0) {
            i++;
            this.swap(element,arr[i]);
        }
    }
    let pos = i + 1;
    let negPos = 0;
    while(arr[negPos] < 0 && negPos < pos && pos < arr.length){
        this.swap(arr[pos],arr[negPos]);
        pos++;
        negPos += 2;
    }
    return arr;
}
function swap(a,b){
    let tem = a;
    a = b;
    b = tem;
}