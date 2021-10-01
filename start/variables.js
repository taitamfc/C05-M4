var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//string
var username = 'Nguyễn Văn A';
//bollean
var check = true;
//number
var age = 18;
//array
var arrNumber = [1, 2];
var arrNumber2 = [1, 2];
//array
var arrString = ['Sách', 'Vở'];
var arrString2 = ['Sách', 'Vở'];
//tuple
var arrTuple;
arrTuple = ['Hi', 10, true];
//any
var arrAny = ['Sách', 13];
var arrAny = ['Sách', 13];
//void
function sum_total() {
}
//type assertion:
var myVar = '123';
var total = myVar.length;
console.log(total);
var objStudent = {
    name: 'Nguyễn Văn A',
    age: 18,
    status: true
};
var students = [];
students.push({
    name: 'Nguyễn Văn A',
    age: 18
});
console.log(students);
var book = ['123'];
//void: ko yêu cầu sự trả về
function sum_total_2() {
}
//hàm bắt buộc trả về giá trị là số
function sum_total_3() {
    return 0;
}
//hàm bắt buộc trả về giá trị là chuỗi
function sum_total_4() {
    return 'Hi';
}
function sum_total_5() {
    console.log('sum_total_5');
}
function sum_total_6() {
    return ['Hi', 'Hi2'];
}
function sum_total_7(ts_a, ts_b) {
}
function sum_total_8(ts_a, ts_b) {
}
function sum_total_9(ts_a, ts_b) {
}
function sum_total_10(phep_tinh) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
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
var sum_total_11 = function (ts_a, ts_b) {
    return 0;
};
sum_total_11(1, 2);
//overload
function funAbc(x) {
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
var EStudent;
(function (EStudent) {
    EStudent[EStudent["Created"] = 100] = "Created";
    EStudent[EStudent["Active"] = 101] = "Active";
    EStudent[EStudent["InActive"] = 102] = "InActive";
})(EStudent || (EStudent = {}));
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
var Task = /** @class */ (function () {
    function Task() {
        //thuộc tính
        this._name = '';
        // public set name(ts_name: string): void {
        //     this._name = ts_name;
        // }
    }
    //phương thức
    Task.prototype.showInfo = function () {
        console.log('Task::showInfo');
    };
    Task.age = 18;
    return Task;
}());
var ListIteam = /** @class */ (function (_super) {
    __extends(ListIteam, _super);
    function ListIteam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListIteam.prototype.showInfo = function () {
        _super.prototype.showInfo.call(this);
        console.log('ListIteam::showInfo');
    };
    return ListIteam;
}(Task));
var objListIteam = new ListIteam();
objListIteam.showInfo();
sum_total_10('+', 1, 2, 3, 4);
