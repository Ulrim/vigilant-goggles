// var list = [];
var lists = [];
var c = []; // 값 확인용
var d = 0; // 값 확인용
for (var i = 1; i <= 1; i++) { // 사람수 조정
    if (lists.length > 0) { // lists 값이 1개 이상일때 실행
        var b = lists[0]; // lists의 0번째 값 정의
        var search = lists.indexOf(b); // lists에서 b값을 찾는다.
        lists.splice(search, 1); // b값을 넣어서 삭제한다.
        d++; // 매칭확인
    } else if(lists.length === 0) { // 짝이 없을때
        // var a = i;
        // 현재 push 된 i값은 다른 값으로 변경해서 사용해보자..
        lists.push(i); // i 값을 lists에 넣어준다.
        c.push(i); // 생성된 값들을 확인해본다.
    }
}

console.log("현재 lists 값 : " + lists);
console.log("생성되었던 값들 : " + c);
console.log("매칭 수 : " + d);
