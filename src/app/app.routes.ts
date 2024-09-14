import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MecanicoComponent } from './pages/mecanico/mecanico.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioCrearComponent } from './pages/usuario-crear/usuario-crear.component';
import { UsuarioEditarComponent } from './pages/usuario-editar/usuario-editar.component';
import { usuariosGuard } from './guards/usuarios.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'mecanico', component: MecanicoComponent, canActivate: [usuariosGuard], data: { roles: ['Mecanico'] } },
    { path: 'admin', component: AdminComponent , canActivate: [usuariosGuard], data: { roles: ['Admin'] }},
    { path: 'login', component: LoginComponent },
    { path: 'crearUsuario', component: UsuarioCrearComponent },
    { path: 'editarUsuario/:idUsuario', component: UsuarioEditarComponent,canActivate: [usuariosGuard], data: { roles: ['Admin'] }},
    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];
