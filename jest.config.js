// js dom simula DOM do browser para testes
//ignorePatterns ignora as pastas que não queremos testar
//faz teste de cobertura automaticamente
//setupFiles indica um arquivo com configurações que deve, ser executado antes de cada teste
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
};
