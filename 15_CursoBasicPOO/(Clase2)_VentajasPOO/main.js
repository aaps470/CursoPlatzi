class Course {
    constructor({
      id,
      name,
      teacher,
      lessons = [],
    }) {
      this.id = id;
      this.name = name;
      this.teacher = teacher;
      this.lessons = lessons;
    }
  }
  
  class LearningPath {
    constructor({
      id,
      name,
      courses = [],
    }) {
      this.id = id;
      this.name = name;
      this.courses = courses;
    }
  
    addCourse(course) {
      this.courses.push(course);
    }
  
    replaceCourse(oldCourse, newCourse) {
      const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
  
      if (oldCourseIndex !== -1) {
        this.courses[oldCourseIndex] = newCourse;
      }
  
      return this.courses;
    }
  
    deleteCourse(oldCourse) {
      const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
      this.courses.splice(courseIndex, 1);
  
      return this.courses;
    }
  }
  
  const reactNativeLearningPath = new LearningPath({
    id: 'react-native',
    name: 'Desarrollo de Apps con React Native',
    courses: [
      new Course({ 
        id: 'basico-javascript', 
        name: 'Curso Básico de JavaScript', 
        teacher: 'Diego De Granda',
      }),
      new Course({
        id: 'ecmascript-6',
        name: 'Curso de ECMAScript 6+',
        teacher: 'Orlando Naipes',
      }),
      // etc...
    ]
  })