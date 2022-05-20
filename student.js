class Student{

    constructor(id, name, surname, dob, avatar){
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.dob = dob;
      this.avatar = avatar;
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
    const today = new Date()
    const todayMills = today.getTime();
    const birthdayClone = new Date(this.dateOfBirth.getTime());
    birthdayClone.setFullYear(new Date().getFullYear());
    const birthdayInMills = birthdayClone.getTime();

    let diff;
    if (todayMills > birthdayInMills) {
      birthdayClone.setFullYear(new Date().getFullYear() + 1);
      const newYearBirthdayInMills = birthdayClone.getTime();
      diff = newYearBirthdayInMills - todayMills;
    } else {
      diff = birthdayInMills - todayMills;
    }

    const daysToBirth = diff / 1000 / 60 / 60 / 24;
    const flooredDateToBirth = Math.floor(daysToBirth);
    return flooredDateToBirth;
    }
  
  }
