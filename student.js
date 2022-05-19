class Student{

    constructor(id, name, surname, dob, avatarUrl){
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.dob = dob;
      this.avatarUrl = avatarUrl;
    }
  
    get dateOfBirth(){
      return new Date(this.dob);
    }
  
    set dateOfBirth(value){
      this.dob = value.toISOString();
    }
  
    static fromObj(obj){
      return new Student(obj.id, obj.name, obj.surname, obj.dob, obj.avatar);
    }
  
    getDaysToBirthday(){
      
    }
  
  }
