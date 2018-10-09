# stylelint-config-pandora

This shared stylelint config extend `stylelint-config-standard`, override some rules for CSS MODULE support.

The list of support for CSS MODULE rules are:

- `property`: composes

- `pseudo-class`: :global, :local

Other override rules are:

- `'string-quotes': 'single'`

- `'number-leading-zero': 'never'`

## Usage

- Install the package

```bash
  npm i -D stylelint-config-pandora
```

- And config it

```json
  "extends": "stylelint-config-pandora"
```

## Contribute

Please feel free to commit any of issues and PRs.

## License

MIT