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

import createHub from './pubnub.js';

const { addListener: listen, publish, subscribe } = createHub();

import {
  CHANNEL_NAME,
  ACTION_DEPLOY,
  CATEGORY_CONNECTED
} from './constants.js';

const init = () => {
  const payload = {
    channel: CHANNEL_NAME,
    message: {
      action: ACTION_DEPLOY
    }
  };

  listen({
    status(evt) {
      // Publish the payload.
    }
  });

  // Subscribe to the channel.
};

// init();
