/**
 * Copyright (c) 2018-present pandolajs, All rights reserved.
 * @fileoverview commitlint configuration
 * @author sizhao | 870301137@qq.com
 * @version 1.0 | 2018-10-08 | sizhao       // 初始版本
 *
 * @description
 *
 * For more details, please read http://marionebl.github.io/commitlint/#/reference-rules
*/

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
        'feat',
        'fix',
        'chore',
        'docs',
        'style',
        'refactor',
        'test'
      ]
    ],
    'header-max-length': [2, 'always', 100],
    'body-max-length': [2, 'always', 100],
    'body-max-line-length': [2, 'always', 1],
    'footer-max-length': [2, 'always', 100],
    'footer-max-line-length': [2, 'always', 1]
  }
}
