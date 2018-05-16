export class Profile{
    userId: Number;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    description: string;
    department: string;
    team: string
    
    constructor(userId: Number, displayName: string) {
      this.userId = userId;
      this.displayName = displayName;
    }


  }