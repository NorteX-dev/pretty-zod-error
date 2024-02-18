### pretty-zod-error

An extremely simple package to quickly log pretty [@colinhacks/zod](https://github.com/colinhacks/zod) errors to the console.

Changelog 2.0.0:

-   Renamed `logZodError` to `prettifyZodError` to not cause confusion.
-   Added `logPrettyZodError`, which will `console.log` output of `prettifyZodError`.
-   Added new `options` property to `prettifyZodError`, with options:
    -   withIndex: boolean - defines whether or not to prepend the issue index
    -   noColors: boolean - strip colors
    -   errorCode: boolean - defines whether or not to append the error code (the dimmed part)
-   Cleaned & refactored up code
