module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "eslint-config-taro",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      // 缩进为两个空格
        "indent": ["error", 2],
     // 这里填入你的项目需要的个性化配置，比如：
        
        // 一个缩进必须用两个空格替代
        'indent': [
            'error',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        // jsx 的 children 缩进必须为两个空格
        'react/jsx-indent': [
            'error',
            2
        ],
        // jsx 的 props 缩进必须为两个空格
        'react/jsx-indent-props': [
            'error',
            2
        ]  
    }
};