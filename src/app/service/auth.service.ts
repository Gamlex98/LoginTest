import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersUrl = 'assets/users.json';
  private currentUser: any;
  private isLoggedInvar: boolean = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          this.currentUser = user;
          this.isLoggedInvar = true;
          return true;
        } else {
          this.isLoggedInvar = false;
          return false;
        }
      }),
      catchError(() => {
        this.isLoggedInvar = false;
        return of(false);
      })
    );
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersUrl);
  }

  logout(): void {
    this.currentUser = null;
    this.isLoggedInvar = false;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInvar;
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
