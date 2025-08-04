import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section 
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-4">

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
                        <span className="opacity-0 animate-fade-in">Hi I'm</span>
                         <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}
                            Aymen</span>
                          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{" "}Ayub</span>
                    </h1>


                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Motivated Software Engineering student with hands-on experience in frontend development (React, Tailwind CSS) and backend technologies like Node.js, Express.js, and MongoDB, along with RESTful API integration.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 ">
                        <a 
                         href="#projects"
                         className="cosmic-button">
                            View my Work
                        </a>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-8 transform flex flex-col items-center justify-center space-y-2 animate-bounce">
                <span className="text-muted-foreground text-sm mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>

        </section>
    )


}