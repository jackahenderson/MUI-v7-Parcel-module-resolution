# MUI v7 Module resolution issues

Component `defaultProps` in a theme provided by `<ThemeProvider>` are not
applied unless we alias `@mui/system` and `@mui/core` to their `/esm` exports.


## Steps to recreate:

1. Run
   ```sh
   yarn parcel ./src/index.html
   ```
   Note that the default prop `variant: "contained"` is not applied. The color
   palette _is_ applied.

2. Rename `"_alias"` to `"alias"` in `package.json`.

3. Default props are now applied correctly.
