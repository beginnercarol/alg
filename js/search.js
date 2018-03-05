//链表节点
class ListNode{
    constructor(value=null){
        this.value = value;
        this.next = null;
    }
}

var addTwoNumbers = function(l1, l2) {
    let p = l1;
    let q = l2;
    let li = new ListNode(null);
    let head = li;
    let carry = 0;
    while(p!==null && q!==null){
        let temp = p.val+q.val+carry;
        if(temp>=10){
            carry=1;
            li.val = temp%10;
        }else{
            carry=0;
            li.val = temp;
        }
        li.next = new ListNode(null);
        li = li.next();
        p = p.next;
        q = q.next;
    }
    if(p==null){
        li.next = q;
        
    }else{
        li.next = p;
    }
    carry==1?li.next.val++:null;
    return head;
    
};







//二叉树节点
class BtTreeNode{
    constructor(value=null){
        this.value=value;
        this.left=null;
        this.left=null;
    }
}

function find(target,array){
    //array 二维数组
    let h = array.length;
    let w = array[0].length;
    let i=0;
    let j=w-1;
    while(i<h && j>=0){
        if(array[i][j]<target){
            i++;
        }else if(array[i][j]>target){
            j--;
        }else{
            return {x:i,y:j}
        }
    }
}

function arrayToList(arr){
    let dumHead = new ListNode();
    let p = dumHead;
    for(let i=0;i<arr.length;i++){
        p.next = new ListNode(arr[i]);
        p = p.next;
    }
    p.next=null;
    return dumHead.next;
}

let pList = arrayToList([1,2,3,4,5]);

//reverseList(pList);
recurReverse(pList);

//从尾到头输出链表 栈
function reverseList(pHead){
    let stack = [];
    let p = pHead;
    while(p!= null){
        stack.unshift(p.value);
        p=p.next;
    }
    console.log("stack=>",stack);
    for(let i=0;i<stack.length;i++){
        console.log(stack[i]);
    }
}

//从尾到头输出链表 递归
function recurReverse(pHead){
    if(pHead!=null){
        if(pHead.next==null){
            console.log("recursive=>",pHead.value);
            return ;
        }else{
            recurReverse(pHead.next);
            console.log("recursive=>",pHead.value);
        }
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

//利用两个栈实现队列
class StackQueue{
    constructor(params=[]){
        this.stack1 = params;
        this.stack2 = [];
    }
    push(ele){
        this.stack1.push(ele);
    }
    pop(){
        if(this.stack2.length!=0){
            return this.stack2.pop();
        }else{
            while(this.stack1.length>=0){
                this.stack2.push(this.stack1.pop());
                return this.stack2.pop();
            }
        }
    }
}

let sq = new StackQueue([1,2,3,4,5]);

console.log(sq.pop());


let arr = [1,3,5,6,9,10];
console.log(binarySearch(6,arr,0,arr.length-1));
//二分查找
function binarySearch(target,arr,low,high){
    let mid = (low+high)/2;
    if(low<=high){
        if(arr[mid]==target){
            return {mid:arr[target]}
        }else if(arr[mid]<target){
            binarySearch(target,arr,mid+1,high);
        }else{
            binarySearch(target,arr,low,mid-1);
        }
    }else{
        //console.log();
        return 'NOT FIND';
    }
}


//动态规划
function findMaxPath(arr=[[]]){
    let m = arr.length;
    let n = arr[length-1].length;
    let path = arr[length-1].slice();
    for(let i=m-2;i>=0;i--){
        for(let j=0;j<=i;j++){
            if(j+1<=i-){
                path[j] = Math.max(arr[i][j],arr[i][j+1])+path[j]
            }
        }
    }
}


//after stash modification disappeared
