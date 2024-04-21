import react from 'eslint-plugin-react'
import reacthooks from 'eslint-plugin-react-hooks'
import reactrefresh from 'eslint-plugin-react-refresh'

export default {
  rules: {
    'react-refresh/only-export-components': 'warn'
  },
  linterOptions: {
    noInlineConfig: true,
    reportUnusedDisableDirectives: true
  },
  ignores: ['dist/*', "**/*.test.js"],
  languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: { react, 'react-hooks': reacthooks, 'react-refresh': reactrefresh },
}