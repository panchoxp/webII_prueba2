import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isAuthenticated: boolean = false;
  role: string | null = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.role = this.authService.getRole();
  }

  logout(): void {
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('role');
    this.isAuthenticated = false;
    this.router.navigate(['/home']);
  }
}