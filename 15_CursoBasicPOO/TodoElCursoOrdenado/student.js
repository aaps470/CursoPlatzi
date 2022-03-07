import Comment from './comment.js'

export default class Student {
    constructor({
      id,
      name,
      email,
      username,
      points = 0,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this._id = id;
      this._name = name;
      this._email = email;
      this._username = username;
      this._points = points;
      this._approvedCourses = approvedCourses;
      this._learningPaths = learningPaths;
      this._socialMedia = {
        twitter,
        instagram,
        facebook,
      };
    }
  
    get id () {
      return this._id;
    }
  
    set id (newID) {
      this._id = newID;
    }
  
    get name () {
      return this._name;
    }
  
    set name (newName) {
      this._name = newName;
    }
  
    get email () {
      return this._email;
    }
  
    set email (newEmail) {
      this._email = newEmail;
    }
  
    get points () {
      return this._points;
    }
  
    set points (newPoints) {
      this._points = newPoints;
    }
  
    get username () {
      return this._username;
    }
  
    set username (newUsername) {
      this._username = newUsername;
    }
  
    get approvedCourses () {
      return this._approvedCourses;
    }
  
    set approvedCourses (newApprovedCourses) {
      this._approvedCourses = newApprovedCourses;
    }
  
    get learningPaths () {
      return this._learningPaths;
    }
  
    set learningPaths (newLearningPaths) {
      this._learningPaths = newLearningPaths;
    }
  
    publicarComentario(commentContent) {
        const comment = new Comment({
          content: commentContent,
          studentName: this.name
        })
        comment.publicar()
      }
  };