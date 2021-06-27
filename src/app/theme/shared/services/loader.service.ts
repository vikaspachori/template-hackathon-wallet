import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  public showLoader() {
    document.getElementById("loadercontainer").style.display = "block";
  }
  public hideLoader() {
    document.getElementById("loadercontainer").style.display = "none"; 
  }
}
