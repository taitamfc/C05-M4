// T: type
function showInfo(x) {
    return x;
}
showInfo('Hi');
var Student = /** @class */ (function () {
    function Student(id, name, age) {
        console.log(id, name, age);
    }
    Student.prototype.showInfo = function (info) {
        console.log(typeof info);
    };
    return Student;
}());
var objStudent = new Student(1, 'Nguyễn Văn A', 18);
var objStudent = new Student(false, 20, 18);
