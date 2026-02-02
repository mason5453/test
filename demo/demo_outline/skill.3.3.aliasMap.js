

// Comprehensive alias mapping for intelligent matching
const aliasMap = {
    // Programming
    "C#":         ["c#", "csharp", "c sharp"],
    "C++":        ["c++", "cpp", "c plus plus"],
    "Java":       ["java"],
    "JavaScript": ["javascript", "js", "ecmascript"],
    "Kotlin":     ["kotlin"],
    "PHP":        ["php"],
    "Python":     ["python", "py"],
    "TypeScript": ["typescript", "ts"],
    "Vbs":        ["vb", "vbs", "VisualBasic", "Visual Basic"],

    // Operating Systems
    "Windows": ["windows", "Windows ( bat, cmd, batch, dos )"],
    "Linux": ["linux", "vi", "nano", "ubuntu", "centos","shell","bash","sh", "Linux (Vi, Nano, Shell)"],

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
    "Ant Design": ["ant design", "antdesign", "ant"],
    
    // Backend Technologies
    ".NET": ["dotnet", ".net", "dot net"],
    "ASP.NET": ["asp.net", "aspnet", "asp"],
    ".NET Base framework": ["dotnet base", ".net base"],
    "PHP frameworks": ["php framework", "laravel", "symfony", "codeigniter"],
    "Spring Boot": ["spring boot", "springboot", "spring"],
    "Node.js": ["node.js", "nodejs", "node"],
    "WordPress": ["wordpress", "wp"],
    "GraphQL": ["graphql"],
    
    // Databases
    "MySQL": ["mysql", "my sql"],
    "Microsoft SQL Server (MSSQL)": ["mssql", "sql server", "microsoft sql"],
    "PostgreSQL": ["postgresql", "postgres", "psql"],
    "NoSQL": ["nosql", "no sql"],
    "Redis": ["redis"],
    
    // Database Operations
    "ETL": ["etl", "extract transform load"],
    "Report generation": ["report", "reporting", "ssrs"],
    "Memory cache setup": ["cache", "memory cache", "redis cache"],
    "Bit encoding": ["bit encoding", "encoding", "base64"],
    
    // Web Servers
    "Apache": ["apache", "httpd"],
    "IIS": ["iis", "internet information services"],
    "Nginx": ["nginx", "engine x"],
    "Lighttpd": ["lighttpd", "lighty"],
    "Tomcat": ["tomcat", "apache tomcat"],
    
    // Version Control
    "Git": ["git"],
    "SVN": ["svn", "subversion"],
    "TortoiseGit/TortoiseSVN": ["tortoise", "tortoisegit", "tortoisesvn"],
    
    // IDEs & Editors
    "Visual Studio Code (VSC)": ["vscode", "vsc", "visual studio code"],
    "IntelliJ IDEA": ["intellij", "idea"],
    "NetBeans": ["netbeans"],
    "Android Studio": ["android studio"],
    "Sublime Text": ["sublime", "sublime text"],
    "Notepad++ (NPP)": ["notepad++", "npp", "notepad"],
    
    // DevOps & Tools
    "Docker": ["docker"],
    "Postman": ["postman"],
    "PowerShell": ["powershell", "ps"],
    "FileZilla": ["filezilla"],
    "WinSCP": ["winscp"],
    "PuTTY": ["putty"],
    "AnyDesk": ["anydesk"],
    "Remote Desktop (MSTSC)": ["mstsc", "remote desktop", "rdp"],
    "Flowchart tools": ["flowchart", "diagram"],
    
    
    // Package Managers
    "NPM": ["npm"],
    "PNPM": ["pnpm"],
    
    // AI & Machine Learning
    "Machine learning": ["machine learning", "ml", "ai"],
    "Neural Networks (NN)": ["neural network", "nn", "deep learning"],
    "Decision Trees/Random Forest": ["decision tree", "random forest", "tree"],
    "Supervised learning": ["supervised learning"],
    "Game AI development": ["game ai", "game ai development"],
    "AI model deployment": ["ai deployment", "model deployment"],
    "AI frameworks": ["ai framework", "tensorflow", "pytorch"],
    "AI agents": ["ai agent"],
    "Chat AI tools (Qwen, DeepSeek, etc.)": ["chat ai", "qwen", "deepseek", "chatbot"],
    
    // Productivity Tools
    "Excel": ["excel"],
    "Outlook": ["outlook"],
    "PowerPoint": ["powerpoint", "ppt"],
    "Task Scheduler": ["task scheduler", "scheduler"],
    "ZIP compression": ["zip", "compression"],
    "7-Zip": ["7zip", "7-zip"],
    
    // Development Environments
    "XAMPP": ["xampp"],
    "Batch scripting (BAT)": ["batch", "bat", "batch script"],
    "VBScript (VBS)": ["vbscript", "vbs"],
    
    // Design & Prototyping
    "Figma": ["figma"],
    "3D software/animation": ["3d", "animation", "blender"],
    
    // Database Tools
    "SQL Server Management Studio (SSMS)": ["ssms", "sql server management studio"],
    "MySQL tools": ["mysql workbench", "mysql tools"],
    
    // Analytics & Tracking
    "Facebook Pixel": ["facebook pixel", "pixel"],
    "Google Analytics": ["google analytics", "analytics", "ga"],
    
    // Design Patterns
    "MVC": ["mvc", "model view controller"],
    "Factory pattern": ["factory", "factory pattern"],
    
    // Other Technologies
    "Map technologies/APIs": ["map", "google maps", "leaflet", "mapping"]
};
