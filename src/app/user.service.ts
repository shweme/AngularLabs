import { Injectable } from '@angular/core';
import {Users} from '../server/api/auth.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  jsonItems = {};

  setItem(key, item){
    this.jsonItems[key] = item;
  }

  getItem(key) {
    return this.jsonItems[key];
  }
  constructor() { }
}
