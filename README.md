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

### 1 "event" type

```
src/page.tsx:36:55 - error TS7006: Parameter 'e' implicitly has an 'any' type.
```
e which is omitted "event" type is
```e: React.ChangeEvent<HTMLInputElement>```

### 2 Call back Error
```
      case 8:
        newScores[8] = convertScore(newScores[8], convertTableHs09G);
        newScores[9] = convertScore(newScores[8], convertTableHs09S);
        break;
```
The latter newScores[8] in line 3 has been substituted with the score after converted by the convertTableHs09G in the line 1, when it should have been substituted with the argument before converted.

### 3 Hooks call
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

## Questions
There were no type roots declaration in tsconfig.json
