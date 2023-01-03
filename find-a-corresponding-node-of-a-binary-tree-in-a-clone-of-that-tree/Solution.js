// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    let queue = [cloned]
    
    while (queue != []){
        let node = queue.pop()

        if (node.val == target.val) return node
        if (node.left) queue.unshift(node.left)
        if (node.right) queue.unshift(node.right)
    }

    return null
};

