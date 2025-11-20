import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { LOGIN_URL, PROFILE_URL, REGISTER_URL } from '../../../urls';
import {
  AuthResponse,
  LoginDto,
  RegisterDto,
  User,
  UserProfile,
} from '../model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'current_user';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );
  private currentUserSubject = new BehaviorSubject<UserProfile | null>(
    this.getCurrentUserFromStorage()
  );

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Login user
   */
  login(credentials: LoginDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(LOGIN_URL, credentials).pipe(
      tap((response) => {
        this.setAuthData(response);
      })
    );
  }

  /**
   * Register new user
   */
  register(userData: RegisterDto): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(REGISTER_URL, userData).pipe(
      tap((response) => {
        this.setAuthData(response);
      })
    );
  }

  /**
   * Logout user
   */
  logout(): void {
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  /**
   * Get current user
   */
  getCurrentUser(): UserProfile | null {
    return this.currentUserSubject.value;
  }

  /**
   * Get auth token
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Refresh user data from server
   */
  refreshUserData(): Observable<UserProfile> {
    return this.http.get<User>(PROFILE_URL).pipe(
      map((user) => this.mapUserToProfile(user)),
      tap((userProfile) => {
        this.currentUserSubject.next(userProfile);
        localStorage.setItem(this.USER_KEY, JSON.stringify(userProfile));
      })
    );
  }

  /**
   * Check if current user has specific role
   */
  hasRole(role: 'user' | 'admin'): boolean {
    const currentUser = this.getCurrentUser();
    return currentUser?.role === role;
  }

  /**
   * Check if current user is admin
   */
  isAdmin(): boolean {
    return this.hasRole('admin');
  }

  /**
   * Initialize auth state (call on app startup)
   */
  initializeAuth(): Observable<boolean> {
    if (!this.hasToken()) {
      return of(false);
    }

    return this.refreshUserData().pipe(
      map(() => true),
      tap(() => this.isAuthenticatedSubject.next(true))
    );
  }

  /**
   * Set authentication data
   */
  private setAuthData(authResponse: AuthResponse): void {
    const userProfile = this.mapUserToProfile(authResponse.user);

    localStorage.setItem(this.TOKEN_KEY, authResponse.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userProfile));

    this.isAuthenticatedSubject.next(true);
    this.currentUserSubject.next(userProfile);
  }

  /**
   * Clear authentication data
   */
  private clearAuthData(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);

    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }

  /**
   * Check if token exists
   */
  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Get current user from localStorage
   */
  private getCurrentUserFromStorage(): UserProfile | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }

  /**
   * Map User to UserProfile
   */
  private mapUserToProfile(user: User): UserProfile {
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      street: user.street,
      city: user.city,
      postalCode: user.postalCode,
      country: user.country,
      role: user.role,
      isActive: user.isActive,
      fullName: `${user.firstName} ${user.lastName}`.trim(),
    };
  }
}
