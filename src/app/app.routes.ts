import { Routes } from '@angular/router';
import { Certificados } from './pages/certificados/certificados';
import { CertificadoForm } from '../app/pages/certificados-form/certificado-form';
import { CertificadoComponent } from './pages/certificado/certificado';

export const routes: Routes = [
  {
    path: "",
    component: Certificados
  },
  {
    path: "certificados/novo",
    component: CertificadoForm
  },
  {
    path: "certificados/:id",
    component: CertificadoComponent
  },
];

