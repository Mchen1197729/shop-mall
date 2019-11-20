// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true, //表明esLint停止向上级目录寻找配置规则(只使用该配置作为esLint的配置)
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  'rules': {
    // allow async-await
    'generator-star-spacing': 'off',
    'no-tabs': 'off',
    'quotes': [1, 'single'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [1, 4]//缩进风格
  }
}
