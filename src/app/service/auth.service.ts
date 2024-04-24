import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  usersUrl = 'assets/users.json';
  currentUser: any;
  private readonly storageKey = 'currentUser';

  constructor(private http: HttpClient) { 
    this.currentUser = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          this.currentUser = user;
          localStorage.setItem(this.storageKey, JSON.stringify(user));
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem(this.storageKey);
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  isAdmin(): boolean {
    return this.currentUser && this.currentUser.role === 'admin';
  }

  isUser(): boolean {
    return this.currentUser && this.currentUser.role === 'user';
  }

  isGuest(): boolean {
    return this.currentUser && this.currentUser.role === 'guest';
  }
}
