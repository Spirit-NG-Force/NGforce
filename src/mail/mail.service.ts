import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '../users/user.interface';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user :User , token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to NGForce ! Confirm your Email to activate your account ',
      template: './confirmation', 
      context: {
        name: user.name,
        url,
      },
    });
  }
}