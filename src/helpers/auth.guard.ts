import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { TokenHandler } from './tokenHandler';

export const authGuard: CanActivateFn = (route, state) => {
  
  var tokenHandler = new TokenHandler()
  if(tokenHandler.getToken() == null){
    var router = new Router()
    router.navigateByUrl('/')
    return false
  }
  return true;
};
