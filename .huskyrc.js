/**
 * Copyright (c) 2018-present pandolajs, All rights reserved.
 * @fileoverview git hooks config
 * @author sizhao | 870301137@qq.com
 * @version 1.0 | 2018-10-08 | sizhao       // 初始版本
 *
 * @description
 *
 * For more details, please read below references:
 *
 * https://github.com/typicode/husky/blob/master/DOCS.md
 *
 * https://git-scm.com/docs/githooks
*/

module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
  }
}
