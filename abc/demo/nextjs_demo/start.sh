#!/bin/bash


#DIR="$(pwd)"
#echo "$DIR"
#cd "$DIR"

#cd "/home/aiken/Resume/many_items/resume/letter/quickstart/my-next-app/"

# 1. Load NVM settings (Fixes the "Wrong Node Version" issue)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Delete node_modules and lock files
#rm -rf node_modules package-lock.json .next  # .next contains cached builds

# Reinstall dependencies
#npm install

# Rebuild Next.js (clears cached artifacts)
#npm run build  # or `next build`


npm run dev


# 最终暂停（核心：类似 Windows 的 pause）
#read -p "操作完成，按任意键退出..."
