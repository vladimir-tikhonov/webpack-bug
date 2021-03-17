### To reproduce the bug
```bash
npm i
npx webpack
npx http-server
# open browser and observe "Uncaught TypeError: __webpack_modules__[moduleId] is not a function"
```

### To "fix" the bug
```bash
npm i webpack@5.23
npx webpack
npx http-server
# open browser, no exceptions
```
