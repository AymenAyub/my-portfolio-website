import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">About 
                    <span className="text-primary"> Me</span>
                </h2>
            

            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 ">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer and Tech Enthusiast</h3>
                    <p className="text-muted-foreground">I’m genuinely passionate about web development and love bringing ideas to life through code. From building sleek UIs to connecting APIs, I enjoy every layer of the tech stack. Watching a project come together is what keeps me motivated.</p>
                    <p className="text-muted-foreground">I’ve worked with React, Tailwind, Node.js, and more. Always exploring ways to write cleaner, smarter code. Tech isn’t just a skill for me, it’s something I truly enjoy. Every project I build teaches me something new, and I’m always ready for the next challenge.</p>


                    <div className="flex flex-col md:flex-row gap-4 justify-center pt-4 ">
                        <a className="cosmic-button" href="#contact">
                            Get In Touch
                            </a>

                      <a className="py-2 px-6 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 hover:font-semibold" href="https://drive.google.com/file/d/148R2zr_Ag_406uqeya8NbryYhT7yeWBd/view?usp=drivesdk" target="_blank" >
                            Download Resume
                            </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border card-hover p-6">
                       <div className="flex gap-4 items-start">
                         <div className="rounded-full p-3  bg-primary/10">
                         <Code className="text-primary h-6 w-6"/>
                         </div>

                          <div className="text-left">
                            <h4 className="font-semibold  text-lg">Web Development</h4>
                            <p className="text-muted-foreground">Passionate about web development, always excited to build, explore new tech.
                            </p>
                         </div>

                       </div>
                    </div>

                     <div className="gradient-border card-hover p-6">
                       <div className="flex gap-4 items-start">
                         <div className="rounded-full p-3  bg-primary/10">
                         <User className="text-primary h-6 w-6"/>
                         </div>

                         <div className="text-left">
                            <h4 className="font-semibold  text-lg">Tech Skills</h4>
                            <p className="text-muted-foreground">Comfortable with MERN Stack and I’m constantly experimenting with tools to write cleaner code and build better UIs.
                            </p>
                         </div>

                       </div>
                    </div>

                     <div className="gradient-border card-hover p-6">
                       <div className="flex gap-4 items-start">
                         <div className="rounded-full p-3  bg-primary/10">
                         <Briefcase className="text-primary h-6 w-6"/>
                         </div>

                          <div className="text-left">
                            <h4 className="font-semibold  text-lg">Goals</h4>
                            <p className="text-muted-foreground">From building projects to diving into full-stack learning, I aim to create seamless digital experiences that make a difference.
                            </p>
                         </div>

                       </div>
                    </div>
                    
                </div>
            </div>
</div>

        </section>

    )
}