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

import { spawn } from 'child_process';
import { join } from 'path';

const deploy = () => {
  console.log(`Deploying… ${(new Date()).getTime()}`);

  const deployCmd = spawn(join(__dirname, './deploy.sh'));

  deployCmd.stdout.on('data',
    (data) => console.log(`stdout: ${data}`)
  );

  deployCmd.stderr.on('data',
    (data) => console.log(`stderr: ${data}`)
  );

  deployCmd.on('close',
    (code) => console.log('process exited with code "${code}".')
  );
};

export default deploy;
