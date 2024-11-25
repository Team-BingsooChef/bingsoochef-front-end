import typescriptParser from '@typescript-eslint/parser';
import eslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist', '.vite'], // 빌드 파일 및 디렉토리 무시
  },
  {
    files: ['*.ts', '*.tsx'], // TypeScript 파일 대상
    languageOptions: {
      parser: typescriptParser, // TypeScript 파서 객체를 직접 제공
      parserOptions: {
        ecmaVersion: 2021, // 최신 ECMAScript 지원
        sourceType: 'module', // ES 모듈
        jsx: true, // JSX 지원
      },
    },
    plugins: {
      '@typescript-eslint': eslintPlugin, // TypeScript ESLint 플러그인
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn', // 사용되지 않는 변수 경고
    },
  },
  {
    files: ['*.js', '*.jsx'], // JavaScript와 JSX 파일 대상
    languageOptions: {
      ecmaVersion: 2021, // 최신 ECMAScript
      sourceType: 'module', // ES 모듈
      parserOptions: {
        jsx: true, // JSX 지원
      },
    },
    rules: {
      'no-var': 'error', // var 사용 금지
      'no-unused-vars': 'warn', // 사용되지 않는 변수 경고
    },
  },
];
