#!/usr/bin/env bash

# 检查当前使用的 npm 仓库
npm config get registry

# 设置为官方 npm 仓库
npm config set registry=https://registry.npmjs.org

# 提示用户进行 npm 登录操作
echo '请进行 npm 登录操作：'
npm login

# 指定组织范围并发布
echo "-------publishing-------"
npm publish --access=public --tag=latest

# 设置回淘宝镜像
npm config set registry=https://registry.npmmirror.com

# 提示发布完成
echo "发布完成"
exit 0