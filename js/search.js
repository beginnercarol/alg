//链表节点
class ListNode{
    constructor(value=null){
        this.value = value;
        this.next = null;
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
