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
            
            if (isMatched) categoryMatched++;
        });
        
        // Update stats for this category
        const statsContainer = container.closest('.skill-section').querySelector('.stats-container');
        statsContainer.querySelector('.matched-count').textContent = categoryMatched;
        totalMatched += categoryMatched;
    });
    
    return totalMatched;
}

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