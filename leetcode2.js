/*给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807*/
//思路： 对给出的两个链表从左到右依次相加，并把结果放到结果链中
//思考：什么时候适用用链表相加？ 当数字非常大时，编程语言的数据类型不能表示，此时就可以用了。
//实现：回想最基本的数字相加，把两个数字的对应位上的数字相加，相加结果大于9的要进位。具体是除以10的整数部分加到下一位相加的和中，余数部分
//就是相对应的结果数的位上，重复此过程直到最高位，最后最高位如果大于9也要进位。


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultHead = new ListNode(-1),node = new ListNode(-1);
    resultHead.next = node;
    let carry = 0,curResult = 0;
    while (l1 || l2 || carry) {
        curResult = (l1?l1.val:0) + (l2?l2.val:0) + carry;
        carry = curResult > 9 ? 1 : 0;
        curResult %= 10;
        node.next = new ListNode(curResult);
        node = node.next;
        if (l1.next) {
            l1 = l1.next;
        }
        if (l2.next) {
            l2 = l2.next;
        }
    }
    return resultHead.next.next;
};