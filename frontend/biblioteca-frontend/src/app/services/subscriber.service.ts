import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  private storageKey = 'subscriber';

  constructor(private toastr: ToastrService) {}

  isSubscribed(): boolean {
    return !!localStorage.getItem(this.storageKey);
  }

  subscribe(data: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    this.toastr.success('¡Suscripción exitosa!', 'Bienvenido a la Biblioteca Medieval');
  }

  unsubscribe(): void {
    localStorage.removeItem(this.storageKey);
    this.toastr.info('Has cancelado tu suscripción.', 'Esperamos verte pronto');
  }

  getSubscriber(): any {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : null;
  }
}

