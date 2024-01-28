export function tokenGenerator() {
    let token = Math.floor(Math.random() * 100000000);
    token = token.toString();
    return token;
  }
  