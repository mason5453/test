// ✅ NEW: Initialization function to be called AFTER HTML is loaded
window.initSkillMatcher = function() {
    
    
    // ========== 获取演示链接 ==========
    function getDemoLink(skillName) {
        const normalized = skillName.toLowerCase().trim();
        return demoLinks[normalized] || demoLinks["default"];
    }
    
    // ========== 检查技能是否有演示链接 ==========
    function hasDemo(skillName) {
        const normalized = skillName.toLowerCase().trim();
        return demoLinks[normalized] !== undefined || demoLinks["default"] !== undefined;
    }
    
    // ========== 初始化技能显示 ==========
    function initializeSkills() {
        Object.keys(skillsData).forEach(category => {
            const grid = document.getElementById(category);
            if (!grid) return;
            
            const skills = skillsData[category];
            
            // 显示所有技能
            skills.forEach(skill => {
                const skillDiv = document.createElement('div');
                skillDiv.className = 'skill-item';
                
                // 如果有演示链接，添加可点击样式
                if (hasDemo(skill)) {
                    skillDiv.classList.add('skill-clickable');
                    skillDiv.title = 'Click to view demo';
                }
                
                skillDiv.textContent = skill;
                skillDiv.dataset.skill = skill.toLowerCase();
                
                // 添加点击事件（如果有演示链接）
                if (hasDemo(skill)) {
                    skillDiv.addEventListener('click', function(e) {
                        e.stopPropagation();
                        openDemo(skill);
                    });
                }
                
                grid.appendChild(skillDiv);
            });
            
            // 更新统计
            updateStats(category, 0, skills.length);
        });
    }
    
    // ========== 打开演示页面 ==========
    function openDemo(skillName) {
        const link = getDemoLink(skillName);
        
        // 显示确认对话框（可选）
        const confirmed = confirm(`Open demo for "${skillName}"?\n\n${link}`);
        
        if (confirmed) {
            // 在新标签页打开
            window.open(link, '_blank');
            
            // 或者在同一窗口打开（取消注释下面这行）
            // window.location.href = link;
        }
    }
    
    // ========== 更新统计信息 ==========
    function updateStats(category, matched, total) {
        const grid = document.getElementById(category);
        if (!grid) return;
        
        const section = grid.closest('.skill-section');
        if (!section) return;
        
        const matchedCountEl = section.querySelector('.matched-count');
        const totalCountEl = section.querySelector('.total-count');
        
        if (matchedCountEl) matchedCountEl.textContent = matched;
        if (totalCountEl) totalCountEl.textContent = total;
    }
    
    // ========== 搜索和匹配技能 ==========
    function matchSkills() {
        const searchBox = document.getElementById('searchBox');
        if (!searchBox) return;
        
        const searchText = searchBox.value.toLowerCase();
        const searchWords = searchText.split(/\s+/).filter(word => word.length > 2);
        
        let categoryMatches = {};
        
        // 遍历所有技能进行匹配
        Object.keys(skillsData).forEach(category => {
            const grid = document.getElementById(category);
            if (!grid) return;
            
            const skills = skillsData[category];
            let matchedCount = 0;
            
            // 检查每个技能
            Array.from(grid.children).forEach(skillDiv => {
                const skill = skillDiv.dataset.skill;
                let isMatched = false;
                
                // 检查是否匹配任何搜索词
                searchWords.forEach(word => {
                    if (skill.includes(word)) {
                        isMatched = true;
                    }
                });
                
                // 更新样式
                if (isMatched) {
                    skillDiv.classList.add('matched');
                    matchedCount++;
                } else {
                    skillDiv.classList.remove('matched');
                }
            });
            
            // 更新统计
            updateStats(category, matchedCount, skills.length);
            categoryMatches[category] = matchedCount;
        });
        
        // 更新导航栏
        updateNavigation(categoryMatches);
    }
    
    // ========== 更新导航栏显示 ==========
    function updateNavigation(categoryMatches) {
        const nav = document.getElementById('categoriesNav');
        if (!nav) return;
        
        nav.innerHTML = '';
        
        Object.keys(categoryNames).forEach(category => {
            const matched = categoryMatches[category] || 0;
            const total = skillsData[category].length;
            
            const navItem = document.createElement('div');
            navItem.className = 'nav-item';
            
            const navLink = document.createElement('a');
            navLink.href = `#section-${category}`;
            navLink.className = 'nav-link';
            navLink.textContent = categoryNames[category];
            
            // 添加匹配数量徽章（如果有匹配）
            if (matched > 0) {
                const badge = document.createElement('span');
                badge.className = 'badge matched';
                badge.textContent = matched;
                navLink.appendChild(badge);
            }
            
            // 添加总数徽章
            const totalBadge = document.createElement('span');
            totalBadge.className = 'badge';
            totalBadge.textContent = total;
            navLink.appendChild(totalBadge);
            
            navItem.appendChild(navLink);
            nav.appendChild(navItem);
        });
    }
    
    // ========== 平滑滚动到分类 ==========
    function setupNavigation() {
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('nav-link')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // 高亮当前分类
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    e.target.classList.add('active');
                }
            }
        });
    }
    
    // ========== 初始化 ==========
    initializeSkills();
    matchSkills(); // 初始匹配（空搜索）
    
    // 设置搜索监听器（带防抖）
    let timeoutId;
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(matchSkills, 300);
        });
    }
    
    // 设置导航
    setupNavigation();
    
    console.log('✅ Skill Matcher initialized successfully!');
};