#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

// Expecting: leet sol <name> <numTests>
const args = process.argv.slice(2);

if (args.length !== 3 || args[0] !== 'sol') {
  console.error('❌ Usage: leet sol <name> <numTests>');
  process.exit(1);
}

const method = args[0];
const folderName = args[1];
const numTests = parseInt(args[2]) || 1;

if (isNaN(numTests) || numTests <= 0) {
  console.error('❌ Error: <numTests> must be a positive integer.');
  process.exit(1);
}

// Check if folder exists
if (fs.existsSync(`solutions/${folderName}`)) {
  console.error(`❌ Error: Folder "${folderName}" already exists.`);
  process.exit(1);
}

// Create folder
fs.mkdirSync(`solutions/${folderName}`);
console.log(`✅ Created folder: ${folderName}`);

// Use the folder name as the function name
const functionName = folderName;

// Create sol.ts with the function and export
const solContent = `function ${functionName}() {}

export { ${functionName} }
`;
const solFilePath = path.join(`solutions/${folderName}`, `${folderName}.ts`);
fs.writeFileSync(solFilePath, solContent);
console.log(`✅ Created file: ${path.join(folderName, `${folderName}.ts`)}`);

// Create the test file with the specified number of test cases
let testContent = `import { expect, test } from "vitest";
import { ${functionName} } from './${folderName}'

`;

for (let i = 1; i <= numTests; i++) {
  testContent += `
test("case ${i}", () => { 
  const expected = 0;
  expect(${functionName}()).toEqual(expected); 
});
`;
}

const testFilePath = path.join(`solutions/${folderName}`, `${folderName}.test.ts`);
fs.writeFileSync(testFilePath, testContent);
console.log(`✅ Created file: ${testFilePath}`);
