function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const student1 = new Student('Анна', 'женский', 20);
const student2 = new Student('Иван', 'мужской', 22);
const student3 = new Student('Мария', 'женский', 19);

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
    return this.subject;
}

Student.prototype.addMarks = function (...marks) {
  if (!Array.isArray(this.marks)) {
 console.error('Невозможно добавить оценки: студент отчислен');
 return;
 }
 this.marks.push(...marks);
 return this.marks;
}

Student.prototype.getAverage = function () {
   if (!Array.isArray(this.marks) || this.marks.length === 0) {
        return 0;
    }
    const sum = this.marks.reduce((accumulator, current) => accumulator + current, 0);
    return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
 
 
    return `Студент ${this.name} отчислен по причине: ${this.excluded}`;
}
