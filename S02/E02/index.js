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

{
  const log = console.log;

  const info = (key, item) => {
    const ts = (item) => Object.prototype.toString.call(item);
    const typeMatcher = (/^\[object (.*)\]$/);
    const typeOf = (what) => {
      const type = typeof what;

      if (type === 'object') {
        return what === null ? 'null' : ts(what).match(typeMatcher)[1];
      }

      if (type === 'function') {return 'Function';}

      return type;
    }

    log(key, '|', item, '|', typeOf(item));
  };
}