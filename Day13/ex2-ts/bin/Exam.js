"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questions = [];
    }
    Exam.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    ;
    Exam.prototype.print = function () {
        this.questions.forEach(function (question) {
            console.log(question.question);
            for (var index in question.answers) {
                console.log(index + ". " + question.answers[index]);
            }
            console.log("----------------------------------------------------");
        });
    };
    ;
    Exam.prototype.grade = function (answers) {
        var count_right_answers = 0;
        for (var answer in answers) {
            if (answers[answer] == this.questions[answer].correct_answer) {
                count_right_answers++;
            }
        }
        return (count_right_answers / this.questions.length) * 100;
    };
    ;
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map