import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalInfo } from 'src/PersonalInfo.model';

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService {
  // Base URL for the API endpoint
  private apiUrl = 'http://localhost:8080/api/personal-info';

  constructor(private http: HttpClient) {}


  createPersonalInfo(plansForm: PersonalInfo): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, plansForm);
  }
}
