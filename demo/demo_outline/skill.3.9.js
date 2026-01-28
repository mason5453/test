// ✅ NEW: Initialization function to be called AFTER HTML is loaded
window.initSkillMatcher = function() {
    
    // ========== 技能数据 ==========
    const skillsData = {
        "programming-languages": ["C#", ".NET", "PHP", "JavaScript", "TypeScript", "Python", "Java", "C++", "HTML5", "CSS3", "VBs"],
        "frontend-technologies": ["React", "Vue", "Angular", "jQuery", "Bootstrap", "SCSS", "Next.js", "React Native"],
        "backend-technologies": [".NET Base framework", "ASP.NET", "Flask", "WordPress", "GraphQL", "Node.js", "Express", "MVC"],
        "databases": ["MSSQL", "MySQL", "PostgreSQL", "Redis", "NoSQL"],
        "database-operations": ["ETL", "SQL Optimization", "Database Architecture", "API Design"],
        "web-servers": ["IIS", "Apache", "Nginx", "Tomcat", "Lighty"],
        "version-control": ["Git", "SVN"],
        "ides-editors": ["Visual Studio", "VS Code", "NetBeans", "IntelliJ", "Sublime Text"],
        "devops-tools": ["Docker", "CI/CD", "Vercel", "Netlify", "Postman"],
        "operating-systems": ["Windows", "Linux"],
        "package-managers": ["npm", "pnpm", "Composer"],
        "ai-machine-learning": ["AI Agent", "AI-Base framework", "Machine Learning", "Neural Networks", "Tree Forest", "Supervised Learning"],
        "productivity-tools": ["Excel", "Outlook", "SSRS", "Figma", "Filezilla", "WinSCP", "AnyDesk"],
        "development-environments": ["XAMPP", "MSTSC", "SSH", "Putty"],
        "design-prototyping": ["Figma", "Flowchart Tools", "MVC Pattern"],
        "database-tools": ["SSMS", "MySQL Tool", "Tortoise"],
        "analytics-tracking": ["Google Analytics", "Custom Tracking"],
        "design-patterns": ["Factory Pattern", "MVC", "Singleton"],
        "other-technologies": ["WebAssembly", "Arduino", "3D Software", "Powershell", "Batch"]
    };
    
    // ========== 分类名称映射 ==========
    const categoryNames = {
        "programming-languages": "Programming Languages",
        "frontend-technologies": "Frontend Technologies",
        "backend-technologies": "Backend Technologies",
        "databases": "Databases",
        "database-operations": "Database Operations",
        "web-servers": "Web Servers",
        "version-control": "Version Control",
        "ides-editors": "IDEs & Code Editors",
        "devops-tools": "DevOps & Tools",
        "operating-systems": "Operating Systems",
        "package-managers": "Package Managers",
        "ai-machine-learning": "AI & Machine Learning",
        "productivity-tools": "Productivity & Office Tools",
        "development-environments": "Development Environments",
        "design-prototyping": "Design & Prototyping",
        "database-tools": "Database Tools",
        "analytics-tracking": "Analytics & Tracking",
        "design-patterns": "Design Patterns",
        "other-technologies": "Other Technologies"
    };
    
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
                skillDiv.textContent = skill;
                skillDiv.dataset.skill = skill.toLowerCase();
                grid.appendChild(skillDiv);
            });
            
            // 更新统计
            updateStats(category, 0, skills.length);
        });
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