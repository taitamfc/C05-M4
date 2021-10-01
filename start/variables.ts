//string
var username: string = 'Nguyễn Văn A';

//bollean
var check: boolean = true;

//number
var age: number = 18;

//array
var arrNumber: Array<number> = [1, 2];
var arrNumber2: number[] = [1, 2];

//array
var arrString: Array<string> = ['Sách', 'Vở'];
var arrString2: string[] = ['Sách', 'Vở'];

//tuple
var arrTuple: [string, number, boolean];
arrTuple = ['Hi', 10, true];

//any
var arrAny: Array<any> = ['Sách', 13];
var arrAny: any[] = ['Sách', 13];

//void
function sum_total(): void {

}

//type assertion:
var myVar: any = '123';
var total = (myVar as string).length;
console.log(total);

//object


//interface object
interface IStudent {
    name: string,
    age: number,
    status?: boolean
}
var objStudent: IStudent = {
    name: 'Nguyễn Văn A',
    age: 18,
    status: true
}

var students: IStudent[] = [];

students.push({
    name: 'Nguyễn Văn A',
    age: 18
});

console.log(students);

//interface array
interface Books {
    [index: number]: string
}
var book: Books = ['123'];


//void: ko yêu cầu sự trả về
function sum_total_2(): void {

}
//hàm bắt buộc trả về giá trị là số
function sum_total_3(): number {
    return 0;
}

//hàm bắt buộc trả về giá trị là chuỗi
function sum_total_4(): string {
    return 'Hi';
}

function sum_total_5(): any {
    console.log('sum_total_5');
}

function sum_total_6(): string[] {
    return ['Hi', 'Hi2'];
}

function sum_total_7(ts_a: string, ts_b: number): any {

}

function sum_total_8(ts_a: number, ts_b?: number): any {

}
function sum_total_9(ts_a: (number | string), ts_b?: number): any {

}

function sum_total_10(phep_tinh: string, ...numbers: number[]): number {
    console.log(numbers);

    return 12;
}

/*
function sum_total_11(ts_a, ts_b) {
    return ts_a + ts_b;
}

let a = 5;
let sum_total_11 = function (ts_a, ts_b) {
    console.log(a);
}

let sum_total_11 = (ts_a, ts_b) => {

}

let sum_total_11 = (ts_a, ts_b) => console.log('123');

let sum_total_11 = (ts_a) => console.log('123');

let sum_total_11 = ts_a => console.log('123');
*/

var sum_total_11 = function (ts_a: number, ts_b: number): number {
    return 0;
}

sum_total_11(1, 2);

//overload
function funAbc(x: any): any {
    if (typeof x == 'string') {
        return 'Hi';
    }

    if (typeof x == 'number') {
        return 123;
    }
}

funAbc(123);

//Advantage
//enum

enum EStudent {
    Created = 100,
    Active,
    InActive
}

/*
var EStudent = {
    100: "Created"​
    101: "Active"
    102: "InActive"
    Active: 101
    Created: 100
    InActive: 102
}
*/

class Task {
    //thuộc tính
    public _name: string = '';

    static age: number = 18;

    //phương thức
    public showInfo(): any {
        console.log('Task::showInfo');
    }

    // public set name(ts_name: string): void {
    //     this._name = ts_name;
    // }
}

class ListIteam extends Task {
    public showInfo(): any {
        super.showInfo();
        console.log('ListIteam::showInfo');
    }


}

var objListIteam = new ListIteam();
objListIteam.showInfo();










sum_total_10('+', 1, 2, 3, 4)



