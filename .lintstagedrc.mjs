const config = {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json --noEmit',
  '*.{js,jsx,ts,tsx}': ['eslint --ext js,jsx,ts,tsx --max-warnings 0'],
}

export default config
