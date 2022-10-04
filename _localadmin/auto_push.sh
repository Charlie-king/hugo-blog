
#!/bin/bash
#author: Lruihao
cd ..
git add .
read -ep "Please enter commit message: " commitMsg
if [ -z $commitMsg ];then
  commitMsg="Docs: Kingpo update $(date +'%F %a %T')"
fi
git commit -m ":pencil: $commitMsg"
git push

