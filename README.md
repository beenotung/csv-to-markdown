# csv-to-markdown
cli tools to convert csv and tsc data into markdown table

[![npm Package Version](https://img.shields.io/npm/v/csv-to-markdown.svg?maxAge=2592000)](https://www.npmjs.com/package/csv-to-markdown)

## Glossary

csv: Comma-separated values

tsv: Tab-separated values

## Installation
```bash
> npm i -g csv-to-markdown
```

## Usage Example
```bash
# read from file, show to console
csv-to-markdown example/data.csv

# read from pipe, write to pipe
cat example/data.csv | csv-to-markdown | xclip -sel clipboard

# read from file, save to file
tsv-to-markdown < data.tsv > example/output.md
```

## License
This is free and open-source software (FOSS) with
[BSD-2-Clause License](./LICENSE)
