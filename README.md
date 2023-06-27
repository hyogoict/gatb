# sensei-web


## How to build the web server
### Genelate public folder
```$ npm run build```

### Build a web server
```$ npx serve build```

### Put out conversion table
Changeing some arguments, then
```$ npx ts-node outputScoreConvertTable.tsx```

## Error

```
src/page.tsx:36:55 - error TS7006: Parameter 'e' implicitly has an 'any' type.
```
e which is omitted "event" type is
```e: React.ChangeEvent<HTMLInputElement>```


## Questions
There were no type roots declaration in tsconfig.json
