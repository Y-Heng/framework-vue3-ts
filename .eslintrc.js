/*
 * @Descripttion:
 * @version:
 * @Author: kurumi
 * @Date: 2020-06-17 10:30:30
 * @LastEditors: kurumi
 * @LastEditTime: 2020-11-18 16:42:07
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
    _: true,
    moment: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-useless-escape': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
        trailingComma: 'none', // 对象去逗号
        printWidth: 1000, // 每行代码长度
        singleQuote: true, // 使用单引号
        semi: false, // 声明结尾不使用分号
        camelcase: false, // 不校验命名
        endOfLine: 'auto' // 换行符
      }
    ],
    '@typescript-eslint/camelcase': [
      'off',
      {
        properties: 'always'
      }
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'comma'
        }
      }
    ],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    // 允许一个组件里面有多个子模板
    'vue/no-multiple-template-root': 'off',
    // 'space-before-function-paren': ['error', 'never'],
    'vue/array-bracket-spacing': 'error',
    // 在箭头函数之前/之后需要空格
    'vue/arrow-spacing': 'error',
    // 在打开块之后和关闭块之前，禁止或强制执行块内部的空格
    'vue/block-spacing': 'error',
    // // 需要大括号样式
    'vue/brace-style': 'error',
    // / 要求或禁止使用尾随逗号；最后一个属性是不需要逗号
    'vue/comma-dangle': ['error', 'never'],
    // 是否使用全等
    'vue/eqeqeq': 'error',
    //   // 在对象属性中强制键和值之间的一致间距
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    // 'vue/object-curly-spacing': 'error',
    // 未使用组件报错
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true
      }
    ],
    // 使用驼峰命名
    'vue/camelcase': [
      0,
      {
        properties: 'never'
      }
    ],
    // 禁止在vue模板语法中里面使用this参数 //"always" | "never"
    'vue/this-in-template': ['error', 'never'],
    // vue模板属性名强制小写中划线的写法
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: []
      }
    ],
    // 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case
    'vue/prop-name-casing': ['error', 'camelCase'],
    // 组件文件名字大写AbC 调用中划线 ab-c
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    // 元素/组件特性的顺序
    'vue/attributes-order': [
      'error',
      {
        order: ['DEFINITION', 'LIST_RENDERING', 'CONDITIONALS', 'RENDER_MODIFIERS', 'GLOBAL', 'UNIQUE', 'TWO_WAY_BINDING', 'OTHER_DIRECTIVES', 'OTHER_ATTR', 'EVENTS', 'CONTENT']
      }
    ],
    // vue 脚本内容顺序
    'vue/order-in-components': [
      'error',
      {
        order: ['el', 'name', 'parent', 'functional', ['delimiters', 'comments'], ['components', 'directives'], 'extends', 'mixins', 'inheritAttrs', 'model', ['props', 'propsData'], 'computed', 'data', 'methods', 'watch', 'filters', 'LIFECYCLE_HOOKS', ['template', 'render'], 'renderError']
      }
    ]
  }
}
