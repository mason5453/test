#!/bin/bash



# 1. Load NVM settings (Fixes the "Wrong Node Version" issue)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"


npm start


# 最终暂停（核心：类似 Windows 的 pause）
#read -p "操作完成，按任意键退出..."
