#!/usr/bin/env sh
# 生成静态文件
npm run build
rm -f acct-doc.tgz
#find . -name "*.html" -print | xargs perl -pi -e 's/\/edit\//\/_edit\//g'
# 替换edit为_edit
#find . -name "*.html" -print0 | xargs -0 sed -i 's/\/edit\//\/_edit\//g'
#find . -name "*.html" -print0 | xargs -0 sed -i 's/GitHub/Gogs/g'
cd acct-doc || exit
find . -name "*.html" -exec sed -i 's/edit/_edit/g' {} +
find . -name "*.js" -exec sed -i 's/edit/_edit/g' {} +
find . -name "*.css" -exec sed -i 's/edit/_edit/g' {} +
#find . -name "*.js" -exec sed -i 's/\/edit\//\/_edit\//g' {} +
find . -name "*.html" -exec sed -i 's/GitHub/Gogs/g' {} +
find . -name "*.js" -exec sed -i 's/GitHub/Gogs/g' {} +
find . -name "*.css" -exec sed -i 's/GitHub/Gogs/g' {} +
cd ../
tar -zcvf acct-doc.tgz acct-doc
scp acct-doc.tgz nginx@172.25.132.86:/home/nginx/html/acct-doc.tgz
ssh nginx@172.25.132.86 "rm -rf /home/nginx/html/acct-doc;tar -xzvf /home/nginx/html/acct-doc.tgz -C /home/nginx/html/;rm -f /home/nginx/html/acct-doc.tgz"
rm -f acct-doc.tgz
rm -rf acct-doc