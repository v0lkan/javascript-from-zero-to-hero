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
      // Check for the action and trigger a deployment.
    }
  });

  // Subscribe.
};

// init();
