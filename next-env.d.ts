/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const content: string
  export default content
}

declare const preval: <T = any>(
  template: TemplateStringsArray,
  ...substitutions: any[]
) => T
