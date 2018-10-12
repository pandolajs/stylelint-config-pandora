/**
 * Copyright (c) 2018-present pandolajs, All rights reserved.
 * @fileoverview stylelint rules for pandolajs project
 * @author sizhao | 870301137@qq.com
 * @version 1.0 | 2018-10-08 | sizhao       // 初始版本
*/

module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'string-quotes': 'single',
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [ 'composes' ]
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [ 'global', 'local' ]
      }
    ],
    'number-leading-zero': 'never' 
  }
}
