import { Injectable } from '@angular/core';
import {WebrequestService} from "./webrequest.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private webRequestService: WebrequestService) { }

  createUser(user: string[]) {
      return this.webRequestService.post('users', {user})
  }
}
