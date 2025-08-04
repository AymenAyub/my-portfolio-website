import { Mail, Phone, Map, Linkedin, Instagram, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify"


export const ContactSection = () => {

    const[isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault(); 
        setIsSubmitting(true);

        setTimeout(() => {
           toast.success("Message sent successfully!");
           setIsSubmitting(false);
        }, 1500);

        e.target.reset(); 
    }
    return(
        <section
        id="contact"
         className="relative py-24 px-4 bg-secondary/30">
          <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h2>

              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out to me.
              </p>

              <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                    <div className="space-y-6 justify-center text-left">

                        <div className="flex items-start space-x-4 ">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <Mail className="h-6 w-6 text-primary"/>
                            </div>
                     <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:iaymenayub1504@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300">
                       iaymenayub1504@gmail.com
                        </a>
                        </div>
                    </div>

                     <div className="flex items-start space-x-4 ">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <Phone className="h-6 w-6 text-primary"/>
                            </div>
                        

                        <div>
                            <h4 className="font-medium">Phone</h4>
                        <a href="#"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        0333-12345678
                        </a>
                        </div>
                    </div>

                     <div className="flex items-start space-x-4 ">
                            <div className="p-3 rounded-full bg-primary/10 ">
                            <Map className="h-6 w-6 text-primary"/>
                            </div>
                        

                        <div>
                            <h4 className="font-medium">Location</h4>
                        <a
                        className="text-muted-foreground hover:text-primary transition-colors duration-300">
                       Rawalpindi, Pakistan
                        </a>
                        </div>
                    </div>

                    
                </div>

                <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex justify-center space-x-4">
                        <a href="#" target="blank">
                            <Linkedin/>
                        </a>
                         <a href="#" target="blank">
                            <Instagram/>
                        </a>
                         <a href="#" target="blank">
                            <Twitter/>
                        </a>
                    </div>

                </div>

              </div>


           <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name"
                    className=" block text-sm font-medium mb-2 ">Your Name</label>
                    <input type="text" id="name " name="name" required 
                    className="w-full px-4 py-3  border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
                    placeholder="Your Name"/>
                </div>

                 <div>
                    <label htmlFor="email"
                    className=" block text-sm font-medium mb-2 ">Your Email</label>
                    <input type="email" id="email" name="email" required 
                    className="w-full px-4 py-3  border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
                    placeholder="your@gmail.com"/>
                </div>

                 <div>
                    <label htmlFor="message"
                    className=" block text-sm font-medium mb-2 ">Your Message</label>
                    <textarea  id="message " name="message" required 
                    className="w-full px-4 py-3 border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none rounded-xl"
                    placeholder="Your Message"/>
                </div>

                <button type="submit"
                disabled={isSubmitting}
                className={`cosmic-button w-full flex items-center justify-center gap-2`}>
                    {isSubmitting? "Sending...": "Send Message"}
                    <Send/>
                </button>



            </form>
           </div>

          </div>
          </div>
        </section>
    )
}