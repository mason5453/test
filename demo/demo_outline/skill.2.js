// Skill data with categories
const skillsData = {
    "programming-languages": [
        "C#", "PHP", "JavaScript", "TypeScript", "Python", "Java", "C++", "Kotlin"
    ],
    "frontend-technologies": [
        "HTML5", "CSS3", "SCSS", "Bootstrap", "Tailwind CSS", "jQuery", 
        "React", "Next.js", "Vue.js", "Angular", "React Native", "Ant Design"
    ]
};

// Demo URLs for each skill
const demoLinks = {
    // Programming Languages
    "C#": null,
    "PHP": null,
    "JavaScript": null,
    "TypeScript": null,
    "Python": null,
    "Java": null,
    "C++": null,
    "Kotlin": null,
    
    // Frontend Technologies
    "HTML5": null,
    "CSS3": null,
    "SCSS": null,
    "Bootstrap": null,
    "Tailwind CSS": null,
    "jQuery": null,
    "React": null,
    "Next.js": null,
    "Vue.js": null,
    "Angular": null,
    "React Native": null,
    "Ant Design": null
};
    


// Comprehensive alias mapping for intelligent matching
const aliasMap = {
    // Programming Languages
    "C#": ["c#", "csharp", "c sharp"],
    "PHP": ["php"],
    "JavaScript": ["javascript", "js", "ecmascript"],
    "TypeScript": ["typescript", "ts"],
    "Python": ["python", "py"],
    "Java": ["java"],
    "C++": ["c++", "cpp", "c plus plus"],
    "Kotlin": ["kotlin"],
    
    // Frontend Technologies
    "HTML5": ["html5", "html", "hypertext markup language"],
    "CSS3": ["css3", "css", "cascading style sheets"],
    "SCSS": ["scss", "sass"],
    "Bootstrap": ["bootstrap"],
    "Tailwind CSS": ["tailwind css", "tailwind", "tailwindcss"],
    "jQuery": ["jquery", "jq"],
    "React": ["react", "reactjs"],
    "Next.js": ["next.js", "nextjs", "next"],
    "Vue.js": ["vue.js", "vuejs", "vue"],
    "Angular": ["angular"],
    "React Native": ["react native", "reactnative"],
    "Ant Design": ["ant design", "antdesign", "ant"]
};

// Initialize the skill display
function initializeSkills() {
    Object.entries(skillsData).forEach(([category, skills]) => {
        const container = document.getElementById(category);
        container.innerHTML = '';
        
        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill-item';
            skillElement.textContent = skill;
            skillElement.dataset.skill = skill;
            
            // Add click handler if demo link exists
            if (demoLinks[skill]) {
                skillElement.classList.add('skill-with-demo');
                skillElement.title = `Click to view ${skill} demo`;
                skillElement.addEventListener('click', () => openDemo(skill));
            }
            
            container.appendChild(skillElement);
        });
    });
}

// Match skills against search text
function matchSkills() {
    const searchText = document.getElementById('searchBox').value.toLowerCase().trim();
    let totalMatched = 0;
    
    // Process each category
    Object.entries(skillsData).forEach(([category, skills]) => {
        const container = document.getElementById(category);
        const skillElements = container.querySelectorAll('.skill-item');
        let categoryMatched = 0;
        
        skillElements.forEach(element => {
            const skillName = element.dataset.skill;
            const aliases = aliasMap[skillName] || [skillName.toLowerCase()];
            
            // Check if any alias matches the search text
            const isMatched = aliases.some(alias => 
                searchText.includes(alias.toLowerCase())
            );
            
            // Update element classes based on match
            element.classList.toggle('matched', isMatched);
            element.classList.toggle('unmatched', !isMatched && searchText !== '');
            
            // Enable/disable click based on match
            if (isMatched && demoLinks[skillName]) {
                element.style.cursor = 'pointer';
                element.style.opacity = '1';
            } else {
                element.style.cursor = isMatched ? 'pointer' : 'default';
            }
            
            if (isMatched) categoryMatched++;
        });
        
        // Update stats for this category
        const statsContainer = container.closest('.skill-section').querySelector('.stats-container');
        statsContainer.querySelector('.matched-count').textContent = categoryMatched;
        totalMatched += categoryMatched;
    });
    
    return totalMatched;
}

// Open demo in modal
function openDemo(skillName) {
    const demoUrl = demoLinks[skillName];
    if (!demoUrl) return;
    
    // Create or get modal
    let modal = document.getElementById('demoModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'demoModal';
        modal.className = 'demo-modal';
        modal.innerHTML = `
            <div class="demo-modal-content">
                <div class="demo-modal-header">
                    <h3><span class="demo-skill-name"></span> Demo</h3>
                    <button class="demo-modal-close" onclick="closeDemo()">&times;</button>
                </div>
                <div class="demo-modal-body">
                    <iframe class="demo-iframe" frameborder="0"></iframe>
                </div>
                <div class="demo-modal-footer">
                    <a href="${demoUrl}" target="_blank" class="demo-open-external">Open in New Tab</a>
                    <button onclick="closeDemo()" class="demo-close-btn">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    // Set skill name and URL
    modal.querySelector('.demo-skill-name').textContent = skillName;
    modal.querySelector('.demo-iframe').src = demoUrl;
    modal.querySelector('.demo-open-external').href = demoUrl;
    
    // Show modal
    modal.style.display = 'flex';
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

// Close demo modal
function closeDemo() {
    const modal = document.getElementById('demoModal');
    if (modal) {
        modal.style.display = 'none';
        // Clear iframe to stop loading
        const iframe = modal.querySelector('.demo-iframe');
        iframe.src = '';
    }
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('demoModal');
    if (modal && modal.style.display === 'flex' && e.target === modal) {
        closeDemo();
    }
});

// ✅ NEW: Initialization function to be called AFTER HTML is loaded
window.initSkillMatcher = function() {
    initializeSkills();
    matchSkills(); // Initial match with example text
    
    // Setup search listener with debounce
    let timeoutId;
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(matchSkills, 300);
        });
    }
};