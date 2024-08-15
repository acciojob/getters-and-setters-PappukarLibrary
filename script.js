//complete this code
class Person {
	const person = new Person("John",25);
	console.log(person.name);
	person.age=25;
	console.log(person.age);
}


class Student extends Person {
	const student = new Student("pappu",22);

	const study (){
		console.log("Pappu is Studying");
		
	}
return	student.study();
}

class Teacher extends Person {
	const teacher = new Teacher("Bob", 40);
	
	const teach (){
		console.log("Bob is teaching");
		
	}
return	teacher.teach();
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

