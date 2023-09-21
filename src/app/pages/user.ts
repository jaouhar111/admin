export interface IUser{
    _id:String
    name:String,
    register: String,
    genre: String,
    photo: String,
    dateN: Date,
    adresse: String,
    role: String,
    father: String,
    profession: String,
    nationalid: String,
    education: String,
    mobile: String,
    email:String,
    salaire:String,
   
    
}

export interface IClassroom {
    _id: string;
    name: String;
    prof: string[];
    students: any[];
    matieres: any[]; // Assuming matieres are stored as IDs
    createdAt: string;
   
  }

  export interface IAttendance{
    _id: string;
    iduser: {
      _id: string;
      name: string;
      register: string;
      genre: string;
      photo: string;
      dateN: Date;
      adresse: string;
      role: string;
      father: string;
      profession: string;
      nationalid: string;
      education: string;
      mobile: string;
      email: string;
      createdAt: Date;
    }
    status: string;
    datenow:string;
   
  }

  export interface IMatiere {
    _id: string;
    name: string;
    note: number;
    // Add other matiere properties here
  }