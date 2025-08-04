import { ArrowRight, ExternalLinkIcon , Github} from "lucide-react"

const projects =[
    {
        id:1,
        title:"ProHire",
        description:"Built a job portal app using React and Tailwind, featuring real-time filtering and smooth UI. Developed and integrated custom APIs for job listings and search functionality.(In progress)",
        image:"proHire.jpeg",
        tags:["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        demoUrl:"#",
        githubUrl:"https://github.com/AymenAyub/job-portal-app"
    },
     {
         id:2,
        title:"TickIt",
        description:"Developed a full-stack MERN task manager with complete CRUD functionality and real-time task updates. Clean dashboard UI with intuitive task actions.",
        image:"tickit.jpeg",
        tags:["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        demoUrl:"#",
        githubUrl:"https://github.com/AymenAyub/task-manager-app"
    },
    //  {
    //     id:3,
    //     title:"Positivus",
    //     description:"Positivus is a multi-section website for a digital marketing agency, built using HTML and CSS. It showcases services, case studies, team profiles, testimonials, and a contact form in a clean, professional layout.",
    //     image:"positivus.png",
    //     tags:["HTML", "CSS"],
    //     demoUrl:"#",
    //     githubUrl:"#"
    // },
    {
        id:3,
        title:"Porfolio Website",
        description:"Created a modern, animated React portfolio to showcase my projects and skills. Used Tailwind for smooth UI and responsiveness.",
        image:"portfolio-aymen.png",
        tags:["React", "Tailwind CSS"],
        demoUrl:"#",
        githubUrl:"#"
    }


]

export const ProjectsSection = () => {
    return(
        <section 
        id="projects"
        className="relative py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my projects. Each project was carefully crafted with attention to detail and performance.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project, key) => (
                            <div key={key} className="group bg-card rounded-lg shadow-xm overflow-hidden card-hover">
                                <div className="overflow-hidden h-48 rounded-xl">
                                    <img src={project.image} alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                </div>

                <div className="p-6">
                 <div className="flex flex-wrap gap-2 mb-4">
                     {
                        project.tags.map((tag) => (
                   <span className="text-xs border bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                            {tag}
                    </span>
                ))
                     }
                 </div>
                                        
                    <h3 className="font-semibold text-xl mb-1 ">{project.title}</h3>
                     <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>


                    <div className="flex items-center justify-between">
                     <div className=" flex space-x-3">

                <a href={project.demoUrl} 
              className="text-foreground/80 hover:text-primary transition-colors duration-300">
                <ExternalLinkIcon size={20}/>
                </a>
                <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                 <Github size={20}/>
            </a>
            </div>

            </div>



            </div>
        </div>


                        ))
                    }

                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/AymenAyub"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center gap-2 mx-auto"

                    >Check my Github <ArrowRight size={16}/></a>
                </div>
            </div>
        </section>
    )
}