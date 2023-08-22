module.exports = {
    root: true, // 在根目录下寻找.eslintrc.js文件，如果当前工作区打开的项目不是在根目录，则查找.eslintrc.js文件会失败，且eslint检查也不会生效
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
        //'plugin:prettier/recommended', // 冲突时使用prettier的规则进行覆盖
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-console': 0,
        'no-debugger': 0,
        'no-async-promise-executor': 'off',
        'vue/multi-word-component-names': 'off',    // 校验组件名
        'vue/no-multiple-template-root': 'off',     // 需要使用根元素包裹template的内容
        // 'no-cond-assign': 'error',               // 禁止条件表达式中出现模棱两可的赋值操作符 
        // 'no-constant-condition': 'error',        // 禁止在条件中使用常量表达式 
        'no-dupe-args': 'error',                    // 禁止 function 定义中出现重名参数 
        'no-dupe-keys': 'error',                    // 禁止对象字面量中出现重复的 key 
        'no-duplicate-case': 'error',               // 禁止出现重复的 case 标签 
        'no-empty': 'error',                        // 禁止出现空语句块 
        'no-ex-assign': 'error',                    // 禁止对 catch 子句的参数重新赋值 
        'no-extra-boolean-cast': 'error',           // 禁止不必要的布尔转换 
        // 'no-extra-parens': 'error',                 // 禁止不必要的括号 
        'no-extra-semi': 'error',                   // 禁止不必要的分号 
        'no-func-assign': 'error',                  // 禁止对 function 声明重新赋值 
        // 'no-inner-declarations': 'error',        // 禁止在嵌套的块中出现变量声明或 function 声明 
        'no-irregular-whitespace': 'error',         // 禁止在字符串和注释之外不规则的空白 
        'no-obj-calls': 'error',                    // 禁止把全局对象作为函数调用 
        'no-sparse-arrays': 'error',                // 禁用稀疏数组 
        'no-prototype-builtins': 'error',           // 禁止直接使用Object.prototypes 的内置属性 
        'no-unexpected-multiline': 'error',         // 禁止出现令人困惑的多行表达式 
        'no-unreachable': 'error',                  // 禁止在return、throw、continue 和 break语句之后出现不可达代码 
        'use-isnan': 'error',                       // 要求使用 isNaN() 检查 NaN 
        'valid-typeof': 'error',                    // 强制 typeof 表达式与有效的字符串进行比较
        'array-bracket-spacing': 'error',           // 强制数组方括号中使用一致的空格
        'block-spacing': 'error',                   // 强制在单行代码块中使用一致的空格 
        'brace-style': 'error',                     // 强制在代码块中使用一致的大括号风格 
        'comma-spacing': 'error',                   // 强制在逗号前后使用一致的空格 
        'comma-style': 'error',                     // 强制使用一致的逗号风格 
        'computed-property-spacing': 'error',       // 强制在计算的属性的方括号中使用一致的空格 
        'indent': [2, 4],                           // 强制使用一致的缩进
        'key-spacing': 'error',                     // 强制在对象字面量的属性中键和值之间使用一致的间距 
        'keyword-spacing': 'error',                 // 强制在关键字前后使用一致的空格
        'no-empty-function': 'off',               // 禁止出现空函数  
        'eqeqeq': 'error',                          // 要求使用 === 和 !== 
        'quotes': [2, 'single', {'allowTemplateLiterals': true}],                    // 要求使用单引号
        'no-else-return': 'off',                  // 禁止 if 语句中有 return 之后有 else 
    }
};