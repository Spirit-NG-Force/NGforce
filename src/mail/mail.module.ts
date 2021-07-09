import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';
import { password } from 'src/config';

@Module({
  imports: [
    MailerModule.forRoot({
      // transport: `smtps://lokmenabid@gmail.com:${password}@smtp.com`,
      // or
      transport: {
        host: 'smtp.gmail.com',
        port:465,
        secure: true,
        auth: {
          user: 'lokmenabid',
          pass: password,
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
      template: {
        dir: join(__dirname, 'tamplets'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService], // 👈 export for DI
})
export class MailModule {}