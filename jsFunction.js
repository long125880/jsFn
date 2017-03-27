//long
//17-3-25
//function
//

//顺序查找
function seqSearch(a,b) {
	for(var i = 0; i< b.length; i++) {
		if(b[i] == a) {
			return i;
		}
	}
	return -1;
}

//search the max or min
function findMinOrMax(b,c) {
	// b:[] m: if the b[0] is the min num; 
	var m = b[0];
	for(var i = 1; i<b.length; i++) {
		if(c == 1) {
			if(b[i]<m){
				m = b[i];
			}
		};
		if(c == 0 || !c) {
			if(b[i]>m){
				m = b[i];
			}
		}
	}
	return m;
}

//二分查找
function binSearch(val, arr){  
    var low = 0, high = arr.length-1,mid=0;  
    while(low<=high){  
        mid = Math.floor( (low + high) / 2);  
        if(arr[mid] < val){  
            low = mid + 1;  
        }  
        else if(arr[mid] > val){  
            high = mid - 1;  
        }  
        else{  
            // low = mid + 1;  
            return mid;  
            
        }  
    }  
    return -1;  
}

//排序
function qSort(list) {
	if(list.length == 0) {
		return [];
	}
	//基准值
	var pivot = list[0];
	//小于基准值
	var left = [];
	//大于基准值
	var right =[];
	for(var i = 1; i< list.length; i++) {
		if(list[i].price < pivot.price) {
            left.push(list[i]);
		} else {
			right.push(list[i]);
		}
	}
	return qSort(left).concat(pivot, qSort(right));
}

//从大到小  基于排序的函数
function bigSmall(list) {
	var bts = [];
	if(list.length == 0) {
		return [];
	}
	for(var i = list.length-1; i >= 0; i--) {
         bts.push(list[i]);
	}
	return bts;
}


//计算重复次数
function count(data, arr) {
	var count = 0;
	var arrs = [];
	var position = binSearch(data, arr); //二分查找
	if(position > -1) {
		++count;
		arrs.push({"index":count});
		for(var i = position - 1; i>0; i--) {
			if(arr[i] == data) {
				++count;
				arrs.push({"index":count});
			} else {
				break;
			}
		};
		for(var i = position +1; i<arr.length; i++) {
			if(arr[i] == data) {
				++count;
				arrs.push({"index":count});
			} else {
				break;
			}
		}
	}
	return arrs;
}