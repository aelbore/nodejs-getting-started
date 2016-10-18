import { Injectable } from 'ng-metadata/core';

@Injectable()
export class AppService {
  constructor(){
  }

  getData(){
    return `Service Data.`;
  }
}