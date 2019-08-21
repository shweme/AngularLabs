export class Users {
    
    constructor(username, birthdate, age, email, password, valid){
        this.username=username;
        this.birthdate=birthdate;
        this.age=age;
        this.email=email;
        this.password=password;
        this.valid=valid;
    }

}

percy = new Users("Percy", "18/08/1993", 26, "seaweedbrain@camphalfblood", "wisegirl", true);

annabeth = new Users("Annabeth", "12/07/1993", 26, "wisegirl@camphalfblood", "seaweedbrain", true);

grover = new Users("Grover", "21/11/86", 33, "tincanlover@camphalfblood", "juniper<3", true);