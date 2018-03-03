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

// console.log("hhh");
// console.log(find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]));

// function replaceBlank(arr){
//     let count=0;
//     arr.forEach(element => {
//         element==' '?count++:null;
//     });
//     console.log(count);

// }

// console.log(replaceBlank(['h','e','l',' ',',','o','e',' ','w','o']));

class ListNode{
    constructor(value=null){
        this.value = value;
        this.next = null;
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

reverseList(pList);

//从尾到头输出链表
function reverseList(pHead){
    let stack = [];
    let p = pHead;
    while(p.next != null){
        stack.shift(p.value);
        p=p.next;
    }
    for(let i=0;i<stack.length;i++){
        console.log(stack[i]);
    }
}