// 141. Linked List Cycle
var hasCycle = function (head) {
    if (head === null || head.next === null)
        return false;

    let first = head;
    let second = first.next;

    while (second !== null) {
        if (first === second) {
            return true;
        }

        first = first.next;
        second = second.next === null ? second.next : second.next.next;
    }

    return false;
};