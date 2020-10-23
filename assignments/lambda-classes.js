// CODE here for your Lambda Classes
class Person{
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        return console.log(`Hello, my name is ${this.name} and I am from ${this.location}`);
    }
};

class Instructor extends Person{
    constructor(instructAttrs){
        super(instructAttrs);
        this.specialty = instructAttrs.specialty;
        this.favLanguage = instructAttrs.favLanguage;
        this.catchPhrase = instructAttrs.catchPhrase;
    }
    demo(subject){
        return console.log(`Today we are learning about ${subject}`);

    }
    grade(student,subject){
        return console.log(`${student.name} receives a perfect score on ${subject}`)
    }
};

class Student extends Person{
    constructor(studAttrs){
        super(studAttrs);
        this.previousBackground = studAttrs.previousBackground;
        this.className = studAttrs.className;
        this.favSubjects = studAttrs.favSubjects;
    }
    listsSubjects(){
        return console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        return console.log(`${this.name} has submitted a PR for ${subject}`);

    }
    sprintChallenge(subject){
        return console.log(`${this.name} has begun the Sprint Challenge for ${subject}`);
    }
};
class projectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel){
        return console.log(`${this.name} anounces to ${channel}, @channel standy times!`);

    }
    debugsCode(student,subject){
        return console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const george = new Instructor({
    name: 'George',
    location: 'London',
    age: 79,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Eating ain't cheating`
  });

  const billyboy = new Student({
    name: 'BillyBoy',
    location: 'Pinner',
    age: 14,
    previousBackground: 'Singer',
    className: 'C3PO',
    favSubjects: ['Histoire','Maths','English']
  });

  const Rosh = new projectManager({
    name: 'Master of Arts',
    location: 'Space',
    age: 31,
    previousBackground: 'Astronaut',
    gradClassName: 'GradClasses3000',
    favInstructor: 'Timmay'
  });


  console.log(george.catchPhrase);
  console.log(fred.favLanguage)
  fred.demo("Statistical Mathematics");
  fred.grade(billyboy,'Math');
  console.log(billyboy.className);
  billyboy.listsSubjects();
  console.log(Rosh.debugsCode(billyboy,'Python'));
  console.log(Rosh.favInstructor);