
// Definition for a binary tree node.
class TreeNode {
    constructor (val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
    
    toString() {
        return "TREE: [" + this.val + "] | LEFT: [" + this.left + "] | RIGHT: [" + this.right+ "]";
    }
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3389/
**/
function isSameTree (p, q) {
    if (isEqual(p.val, q.val))
        return (isEqual(p.left, q.left) && isEqual(p.right, q.right))?true:false;
    else
        return false;
};

function isEqual(object1, object2) {
    if (object1 === null || object2 === null) {
        if (object1 === null && object2 === null)
            return true;
        else
            return false;
    }
    
    if (typeof object1 === 'object' && typeof object2 === 'object') {
        
        if ((object1 instanceof TreeNode) && (object2 instanceof TreeNode))
            return isSameTree(object1, object2);
        else
            return (
                (Object.entries(object1).toString() === Object.entries(object2).toString())?true:false
            );       
    } 
    else
        return (object1 === object2)?true:false;
}

var p = new TreeNode(1, new TreeNode(4, 5, 6), [3]);
var q = new TreeNode(1, new TreeNode(4, 5, 6), [3]);

console.log("IS SAME TREE: "+ isSameTree(p, q));
