//  Create a Chatroom class
//  Create a default accout or existing account; defAccount() / defUser


// Chatroom main class
export class Chatroom {

  constructor(public roomId, public userId) {}
}

export class Chat {
  constructor( 
    public userId: number,
    public roomId: string,
    public message: string,
    public created_at: number) {}
}


