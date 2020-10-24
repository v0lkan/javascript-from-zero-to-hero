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
  const Y = le => (
    f => f(f)
  )(
    f => le(
      x => f(f)(x)
    )
  );

/*
    Lambda equivalent form:

    Y = λf.(
      λx.f(x x)
    )(
      λx.f(x x)
    )

    Proof in lambda form:
      Y = λf.( λx.f(x x) )( λx.f(x x) )

      Y g = ( λf.( λx.f(x x) )( λx.f(x x) ) ) g

      Y g = ( λx.g(x x) )( λx.g(x x) )

      Y g = g(
        ( λx.g(x x) )( λx.g(x x) )
      )

      " therefore:
      Y g = g( Y g )
*/

  const fact = f => n => n < 2 ? 1 : n * f(n-1);
  const fib = f => n => n < 3 ? 1 : f(n-2) + f(n-1);

  const factorial = Y(fact);
  const fibonacci = Y(fib);

  console.log(factorial(10)); // Logs `3628800`.
  console.log(fibonacci(5)); // Logs `5`.
}

{
  const factorial = (f, n) => n < 2 ? 1 : n * f(f, n - 1);
  console.log(factorial(factorial, 6)); // Logs `720`.
}

{
  // was: const factorial = (f, n) => n < 2 ? 1 : n * f(f, n - 1);

  const factorial = f => n => n < 2 ? 1 : n * f(f, n - 1);
}

{
  const factorialOrig = n => n < 2 ? 1 : n * factorialOrig(n - 1);
  console.log([1, 2, 3, 4, 5, 6].map(factorialOrig));
  // Logs `[1, 2, 6, 120, 720]`.
}

{
  const factorial = f => n => n < 2 ? 1 : n * f(f, n - 1);
  console.log([1, 2, 3, 4, 5, 6].map(factorial));
  // Logs `[[Function], [Function], [Function], …]`.
}

{
  const factorial = (
    f => f(f)
  )(
    f => n => n < 2 ? 1 : n * f(f)(n -1)
  );
}

{
  const factorial = (
    f => f(f)
  )(
    f => n => n < 2 ? 1 : n * f(f)(n -1)
  );

  console.log([1, 2, 3, 4, 5, 6].map(factorial));
  // Logs `[1, 2, 6, 120, 720]`.
}

{
  const fact = f => n => n < 2 ? 1 : n * f(n -1)

  // fact(f(f))    :: x => x < 2 ? 1 : x * f(f)(x - 1)
  // fact(f(f))(n) :: n < 2 ? 1 : n * f(f)(n -1)

  const factorial = (
    f => f(f)
  )(
    f => n => fact( f(f) )( n )
  )
}

{
  const fact = f => n => n < 2 ? 1 : n * f(n -1)

  // fact(f(f))    :: x => x < 2 ? 1 : x * f(f)(x - 1)
  // fact(f(f))(n) :: n < 2 ? 1 : n * f(f)(n -1)

  const factorial = (
    f => f(f)
  )(
    f => (
      n => fact( x => f(f)(x) )( n )
    )
  )

  console.log([1, 2, 3, 4, 5, 6].map(factorial));
  // Logs `[1, 2, 6, 120, 720]`.
}

{
  const fact = f => n => n < 2 ? 1 : n * f(n -1)

  const factorial = (
    f => f(f)
  )(
    f => (
      fact( x => f(f)(x) )
    )
  )

  console.log([1, 2, 3, 4, 5, 6].map(factorial));
  // Logs `[1, 2, 6, 120, 720]`.
}

{
  const factorial = fact => (
    f => f(f)
  )(
    f => (
      fact( x => f(f)(x) )
    )
  );

  const Y = le => (
    f => f(f)
  )(
    f => (
      le( x => f(f)(x) )
    )
  );
}

{
  const Y = le => ( f => f(f) )( f => ( le( x => f(f)(x) ) ) );

  const fib = f => n => n < 3 ? 1 : f(n - 2) + f(n -1);
  const fact = f => n => n < 2 ? 1 : n * f(n -1)

  const fibonacci = Y(fib);
  const factorial = Y(fact);

  console.log([1, 2, 3, 4, 6, 7].map(factorial));
  console.log([1, 2, 3, 4, 6, 7].map(fibonacci));
  // Logs:
  // [1, 2, 6, 24, 120, 720]
  // [1, 1, 2, 3, 5, 8]
}
