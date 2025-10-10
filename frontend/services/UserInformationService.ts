

interface ISaveUserInformationOptions  {
  firstName: string;
  lastName: string;
  age: number;
  occupation: string;
  gender: string;
}

export class UserInformationService {
  constructor() {
    console.log('UserInformationService.constructor()');
  }

  public saveUserInformation(options: ISaveUserInformationOptions) {
    console.log('UserInformationService.saveUserInformation()');
    console.log('options:',options);
  }
}