#!/usr/bin/env sh
# 安装node.js
# 安装vuepress  npm install -g vuepress
# 本地启动 vuepress dev



# 确保脚本抛出遇到的错误
# 生成静态文件
vuepress build

# 进入生成的文件夹
cd docs

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
