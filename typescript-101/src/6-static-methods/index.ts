// try to export 
class UserWithStaticMethod{
  private  constructor(){}
  private static _UserStatic: UserWithStaticMethod

  static getUser():UserWithStaticMethod{
      if(!this._UserStatic){
          this._UserStatic = new UserWithStaticMethod()
      }
      return this._UserStatic
  }
}

UserWithStaticMethod.getUser()