export enum Role {
  ADMIN = 'admin', // accell all access api
  MANAGER = 'manager', // access all access api except user module
  CUSTOMER = 'customer', // access all ai except user module
  GUEST = 'guest', // access all ai except user module
  USER = 'user', // access all ai except user module
}
