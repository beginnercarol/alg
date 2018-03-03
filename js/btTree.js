//二叉树节点
class BtTreeNode{
    constructor(value=null){
        this.value=value;
        this.left=null;
        this.left=null;
    }
}

//根据前中序遍历输出二叉树
function prePostTraverse(btTree){

}
//根据前中序遍历序列重建二叉树
function reconstructBtTree(preArr,postArr){
    if(postArr.length==0){
        return null;
    }
    let base = preArr[0];
    let index = postArr.indexOf(base);
    let bt = new BtTreeNode(base); 
    let leftArr = postArr.slice(0,index);
    let rightArr = postArr.slice(index+1);
    bt.left = reconstructBtTree(preArr.slice(1,index+1),postArr.slice(0,index));
    bt.right = reconstructBtTree(preArr.slice(index+1),postArr.slice(index+1));
    return bt;
}

console.log('reconstruct bt=>',reconstructBtTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]));