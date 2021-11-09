module.exports = {
  // 사전에 정의된 전역 변수 설정
  env: {
    browser: true,
    node: true
  },
  // 사용 가능한 규칙 세트
  extends: [
    // vue
    // eslint-plugin-vue에서 제공하는 기본적인 코드 규칙
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3

    // js
    'eslint:recommended'
    // eslint에서 권장하는 기본적인 코드 규칙으로 js 문법 검사
  ],
  // 구문 분석할 패키지 설정(Babel, ES6^ => ES5)
  parserOptions: {
    // 분석기 지정
    parser: 'babel-eslint'
  },
  // 추가적인 코드 규칙을 설정
  rules: {
    // extends에서 기본 제공 규칙을 그대로 사용하는 경우 옵션 제공하지 않아도 됨
    // 사용자화해야 하는 상황일 경우 추가
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }]
  }
}
