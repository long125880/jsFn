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


//身份证加"*"处理 分两种情况 成人 or 儿童

function hideInfo(e) {
    var d = e.length;
    return d<18?e:e.replace(/^(.{6})(?:\d+)(.{4})$/,"$1****$2");
}

//手机号加"*"处理
function hideTel(e) {
    return e.replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2");
}

//javascrip 解析　ｘｍｌ
function parseDom(arg) { 
　　 var objE = document.createElement("div"); 
　　 objE.innerHTML = arg; 
　　 return objE.childNodes; 
};


//天数加一
function GetDateStrH(data1,h) {

    var  Y1 = data1.substring(0, 4);
    var  m1 = data1.substring(5, 7)-1;
    var  d1 = data1.substring(8, 10);
    // var  h1 = data1.substring(11, 13);
    // var  M1 = data1.substring(14, 17);
    var  dd = new Date(Y1,m1,d1)
    dd.setHours(dd.getHours() + h);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;//获取当前月份的日期
    var d = dd.getDate();

    if ((m + "").length == 1) {
        m = "0" + m;
    }
    if ((d + "").length == 1) {
        d = "0" + d;
    }

    return y + "-" + m + "-" + d

}

//获取客户端设备类型
function getClientType() {
    var clientType = "PC";
    if (/android/i.test(navigator.userAgent)) {
        clientType = "android";
    }
    if (/ipad/i.test(navigator.userAgent)) {
        clientType = "ipad";
    }
    if (/iphone/i.test(navigator.userAgent)) {
        clientType = "iphone";
    }
    return clientType;
}

//  根据时间 填写 星期几
function getWeekDaylong(obj){
    var NewArray = new Array("周日","周一","周二","周三","周四","周五","周六");
    var oArray = ["今天","明天","后天"];
    var DateYear = parseInt(obj.split("-")[0]);
    var DateMonth = parseInt(obj.split("-")[1]);
    var DateDay = parseInt(obj.split("-")[2]);
    var NewDate = new Date(DateYear,DateMonth-1,DateDay);
    var NewWeek = NewDate.getDay();
    var nowDate = new Date();
    var num = 1;
    var currentDate = nowDate.getFullYear()+"-"+(oneToTwo(nowDate.getMonth()+1))+"-"+oneToTwo(nowDate.getDate());
    var cha = removeType(obj) - removeType(currentDate);
    return cha > 2?NewArray[NewWeek]:oArray[cha];
    //一位数转成两位数
    function oneToTwo(b) {
        if(b<10) {
            return "0"+b;
        }else {
            return b;
        }
    }
    //去掉横杠好比较大小
    function removeType(e) {
        return e.replace(/\-/g,"");
    }
}