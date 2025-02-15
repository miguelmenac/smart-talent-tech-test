import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

interface EmailOptions {
  subject: string;
  to: string;
  body: string,
};

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  http = inject(HttpClient);
  constructor() { }

  sendEmail(payload: EmailOptions) {

    const url = 'https://api.mailersend.com/v1/email';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Bearer mlsn.699bd948b00f31b15c6d96d477bf857acf297d7c85cfe4c25ba956242c6621e3'
      },
      body: JSON.stringify({
        from: { email: 'miguelmena@outlook.com' },
        to: [{ email: payload.to }],
        subject: 'Reserva confirmada',
        text: payload.body,
        html: payload.body
      })
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
}
