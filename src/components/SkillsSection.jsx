import React, { useState } from "react";
const skills = [
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Frontend" },
    { name: "React", level: 65, category: "Frontend"},
    { name: "Tailwind CSS", level: 55, category: "Frontend" },

    { name: "Node.js", level: 50, category: "Backend" },
    { name: "Express", level: 50, category: "Backend" },
    { name: "MongoDB", level: 40, category: "Database" },
    { name: "Git/Github", level: 30, category: "Tools" },

    { name: "Figma", level: 30, category: "Tools" },
    { name: "VS Code", level: 50, category: "Tools" },

]

const categories=["All", "Frontend", "Backend", "Database", "Tools"]


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const filteredSkills = skills.filter(skill => activeCategory === "All" || skill.category === activeCategory);


    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary"> Skills</span></h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {
                    categories.map((category, key) => (
                        <button key={key}
                        onClick={() => setActiveCategory(category)}
                        className={`px-5 py-2 rounded-full transition-colors duration-300 
                        ${activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"}`}>
                            {category}
                            
                        </button>

                    ))
                  }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        filteredSkills.map((skill, key) => (
                            <div key={key} className="card-hover rounded-lg shadow-xm bg-card p-6">
                                <div className="text-left mb-4">
                                    <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                                </div>

                                {/* // Progress bar */}
                                <div className=" w-full h-2 rounded-full bg-secondary/50 overflow-hidden">
                                    <div className="h-2 rounded-full bg-primary origin-left 
                                    animate-[grow_1.5s_ease-out]"
                                     style={{ width: `${skill.level}%` }}>
                                    
                                     </div>

                                    </div>
                                     <div className="text-right text-xs text-muted-foreground mt-1">
                                        <span>{skill.level}%</span>
                                     </div>
                                </div>

                        ))
                    }
                </div>
            </div>
        </section>
    )
}