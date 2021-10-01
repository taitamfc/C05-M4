// T: type
function showInfo<T>(x: T): T {
    return x;
}

showInfo<string>('Hi');

class Student<A, B, C> {
    constructor(id: A, name: B, age: C) {
        console.log(id, name, age);
    }
    showInfo<T>(info: T): any {
        console.log(typeof info);
    }
}

var objStudent = new Student<number, string, number>(1, 'Nguyễn Văn A', 18);
var objStudent = new Student<boolean, number, number>(false, 20, 18);



