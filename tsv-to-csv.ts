#!/usr/bin/env node
import { readFileSync } from 'fs'
import { from_csv, to_csv } from '@beenotung/tslib/csv'

let input = process.argv[2]
if (!input) {
  console.error('reading from stdin...')
  input = '/dev/stdin'
}
let text = readFileSync(input).toString()
let rows = from_csv(text, '\t')
text = to_csv(rows)
console.log(text)
