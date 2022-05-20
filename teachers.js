class Teachers{
    constructor(id, name, surname, gender, avatar){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.avatar = avatar;
    }

 
    static fromObj(obj){
        return new Teachers(obj.id, obj.name, obj.surname, obj.gender, obj.img);
      }
    

}