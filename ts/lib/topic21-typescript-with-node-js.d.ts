/**
 * TypeScript with Node.js
 * TypeScript has had first class support for Node.js since inception.
 *
 * Setup a Node.js project package.json.
 * Quick one : npm init -y
 * 2.Add TypeScript (npm install typescript --save-dev)
 * 3. Add node.d.ts (npm install @types/node --save-dev)
 * 4. Init a tsconfig.json for TypeScript options (npx tsc --init)
 * 5. Make sure you have compilerOptions.
 *
 * Add ts-node which we will use for live compile + run in node (npm install ts-node --save-dev)
 * Add nodemon which will invoke ts-node whenever a file is changed (npm installnodemon --save-dev)
 * Now just add a script target to your package.json based on your application entry e.g.assuming its index.ts:
 *
 * "scripts": {
 * "start": "npm run build:live",
 * "build:live": "nodemon --exec ./node_modules/.bin/ts-node -- ./index.ts"
 * },
 * So you can now run npm start and as you edit index.ts:
 * nodemon reruns its command (ts-node)ts-node transpiles automatically picking up tsconfig.json and the installed typescriptversion,
 * ts-node runs the output javascript through Node.js.
 */
