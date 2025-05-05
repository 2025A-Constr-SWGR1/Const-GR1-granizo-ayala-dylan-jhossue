import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //console.log('log!');
    // console.debug('debug!');
    console.error('error!');
    console.warn('warn!');
    //console.info('info!');
    return 'Hello World!!';
  }
}
