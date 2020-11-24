/*
 *  \
 *  \\,
 *   \\\,^,.,,.                    “Zero to Hero”
 *   ,;7~((\))`;;,,               <zerotohero.dev>
 *   ,(@') ;)`))\;;',    stay up to date, be curious: learn
 *    )  . ),((  ))\;,
 *   /;`,,/7),)) )) )\,,
 *  (& )`   (,((,((;( ))\,
 */

import deploy from './deploy.js';
import createHub from './pubnub.js';

const { addListener: listen, subscribe } = createHub();

import { CHANNEL_NAME, ACTION_DEPLOY } from './constants.js';

const init = () => {
  listen({
    message(msg) {
      // console.log('Message received', JSON.stringify(msg, null, 2));
      console.log('Message received.');

      if (!msg) {
        return;
      }

      if (!msg.message.action) {
        return;
      }

      if (msg.message.action !== ACTION_DEPLOY) {
        return;
      }

      deploy();
    }
  });

  subscribe({
    channels: [CHANNEL_NAME]
  });
};

// export default init;
init();
