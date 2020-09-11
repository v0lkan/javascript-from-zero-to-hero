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

// #region Utilities

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

// #endregion

{
  const quote = 'Do. Or do not. There’s no try.';
  const quote2 = 'The force is strong with this one.';

  info('quote', quote);
  info('quote2', quote2);
}

{
  const quote = 'Use the source, Luke!';

  log('typeof quote 👉', typeof quote); // 'string'
}

{
  class BankAccount {}
  const myCheckingAccount = new BankAccount();

  log('typeof myCheckingAccount 👉', typeof myCheckingAccount); // 'object'
  log('is a BankAccount? 👉', myCheckingAccount instanceof BankAccount); // false
}

{
  const quote = 'You must unlearn what you have learned.';

  class PrimitiveString {
    static [Symbol.hasInstance](what) {return typeof what === 'string';}
  }

  console.log('quote is PrimitiveString 👉', quote instanceof PrimitiveString); // true
  console.log('typeof quote 👉', typeof quote); // string
}
