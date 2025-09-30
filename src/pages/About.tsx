import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Linkedin, Twitter, Award, Target, Lightbulb, Users } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import ayushImage from "@/assets/ayush-2.jpg";
import vruttiImage from "@/assets/vrutti-2.png";
import suryodayaImage from "@/assets/pandery-2.jpg";

const About = () => {
  const team = [
    {
      name: "Ayush Singh",
      role: "CEO & Founder",
      bio: "Visionary leader with 8+ years in digital marketing. Ayush architects growth strategies that build lasting success.",
      image: ayushImage,
      linkedin: "https://www.linkedin.com/in/ayushsingh1214/",
      twitter: "#",
      achievements: ["Marketing Leader 2023", "Growth Expert"],
    },
    {
      name: "Vrutti Gala",
      role: "Head of Marketing",
      bio: "Creative strategist who transforms brand visions into compelling narratives that resonate with audiences.",
      image: vruttiImage,
      linkedin: "https://www.linkedin.com/in/vrutti-g/",
      twitter: "#",
      achievements: ["Growth Hacker of the Year", "Campaign Excellence Award"],
    },
    {
      name: "Suryodaya Pandey",
      role: "CTO",
      bio: "Technical mastermind who builds the infrastructure that powers our cutting-edge marketing solutions.",
      image: suryodayaImage,
      linkedin: "https://www.linkedin.com/in/suryodaya27/",
      twitter: "#",
      achievements: ["AI Innovation Award", "Tech Leader 2023"],
    },
  ];

  const milestones = [
    {
      year: "2021",
      title: "Foundation",
      description: "BluePrynt founded with a vision to revolutionize digital marketing architecture.",
      icon: Lightbulb,
    },
    {
      year: "2022",
      title: "First Major Win",
      description: "Achieved 300% ROAS for our first enterprise client, setting industry benchmarks.",
      icon: Target,
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched proprietary AI agents, automating campaign optimization at scale.",
      icon: Award,
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded operations across 15+ countries, serving 500+ global brands.",
      icon: Users,
    },
  ];

  const values = [
    {
      title: "Precision Engineering",
      description: "Every campaign is built with architectural precision, ensuring no detail is overlooked.",
      icon: Target,
    },
    {
      title: "Innovation First",
      description: "We don't follow trends; we create them using cutting-edge technology and creative thinking.",
      icon: Lightbulb,
    },
    {
      title: "Client Partnership",
      description: "Your success is our blueprint. We work as an extension of your team, not just a vendor.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-background relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6 text-foreground">
            The Architects Behind BluePrynt
          </h1>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just marketers – we're digital architects building the future 
            of brand experiences, one blueprint at a time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-8 text-center text-foreground">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-6">
                  BluePrynt was born from a simple observation: most marketing agencies were building 
                  campaigns like houses of cards – flashy but fragile. We believed brands deserved 
                  structures built to last.
                </p>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded by three friends who shared a passion for precision and innovation, we set out 
                  to create marketing solutions with the rigor of architecture and the creativity of art.
                </p>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                  Today, we've helped 500+ brands build digital foundations that don't just survive 
                  market changes – they thrive in them.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="font-poppins font-bold text-3xl">500+</div>
                      <div className="font-inter text-sm opacity-90">Brands Transformed</div>
                    </div>
                    <div>
                      <div className="font-poppins font-bold text-3xl">₹2B+</div>
                      <div className="font-inter text-sm opacity-90">Revenue Generated</div>
                    </div>
                    <div>
                      <div className="font-poppins font-bold text-3xl">15+</div>
                      <div className="font-inter text-sm opacity-90">Countries Served</div>
                    </div>
                    <div>
                      <div className="font-poppins font-bold text-3xl">98%</div>
                      <div className="font-inter text-sm opacity-90">Client Retention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Meet the Architects
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-card hover:-translate-y-2 transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role} at BluePrynt`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="font-poppins font-semibold text-xl mb-2 text-foreground">
                  {member.name}
                </h3>
                
                <p className="font-inter text-primary font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="font-inter text-muted-foreground text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Achievements */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.achievements.map((achievement) => (
                    <Badge key={achievement} variant="secondary" className="text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="relative flex items-start mb-12 animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-6 shadow-glow">
                    <milestone.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card border border-border rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <Badge variant="secondary" className="mr-3">
                        {milestone.year}
                      </Badge>
                      <h3 className="font-poppins font-semibold text-xl text-foreground">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-12 text-center text-foreground">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-poppins font-semibold text-xl mb-3 text-foreground">
                  {value.title}
                </h3>
                
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Want to Join Our Story?
          </h2>
          <p className="font-inter text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent and amazing clients to add to our blueprint.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="/brand-enquiry">
                Work With Us
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Join Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;