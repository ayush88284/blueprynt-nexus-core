import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Search, Bot, Users, Target, TrendingUp, Award, Globe, ShoppingCart, CreditCard, GraduationCap, Heart, Home as HomeIcon, Building, Mouse } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import AnimatedBackground from "@/components/AnimatedBackground";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom websites built with architectural precision that convert visitors into customers.",
    },
    {
      icon: Search,
      title: "SEO/AEO",
      description: "Strategic optimization that builds your digital foundation for sustainable growth.",
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Intelligent automation systems that work 24/7 to scale your business operations.",
    },
    {
      icon: Zap,
      title: "AI Prototyping",
      description: "Rapid AI-powered prototyping that transforms ideas into tangible digital experiences.",
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Authentic partnerships with creators who align with your brand's BluePrynt.",
    },
    {
      icon: Target,
      title: "Social Ads",
      description: "Precision-targeted campaigns that maximize ROI across all social platforms.",
    },
  ];

  const metrics = [
    { number: "300%", label: "Average ROAS Increase" },
    { number: "2.5M+", label: "Impressions Generated" },
    { number: "150+", label: "Successful Campaigns" },
    { number: "98%", label: "Client Retention Rate" },
  ];

  const industries = [
    { name: "E-commerce", icon: ShoppingCart },
    { name: "SaaS", icon: Globe },
    { name: "FinTech", icon: CreditCard },
    { name: "HealthTech", icon: Heart },
    { name: "EdTech", icon: GraduationCap },
    { name: "Real Estate", icon: Building },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl mb-8 text-foreground leading-tight animate-fade-up bg-gradient-primary bg-clip-text text-transparent">
              Where Vision Becomes Reality
            </h1>
            
            <p className="font-body text-xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We turn raw potential into structures that stand tall. 
              Premium marketing solutions with architectural precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="lg" asChild className="hover:scale-110 transition-transform duration-300 shadow-glow text-lg px-8 py-6">
                <Link to="/brand-enquiry">
                  Start Your BluePrynt
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300 text-lg px-8 py-6 border-2">
                <Link to="/work">See Our Work</Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-20 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <p className="font-body text-base text-muted-foreground mb-8 tracking-wider uppercase">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-12">
                {["BeReal", "Myntra", "Flipkart", "Sugar Cosmetics", "Zomato"].map((brand, index) => (
                  <div 
                    key={brand} 
                    className="font-heading font-semibold text-xl hover:text-cyan transition-all duration-300 cursor-pointer hover:scale-110 opacity-70 hover:opacity-100"
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Mouse className="w-8 h-8 text-cyan animate-glow-pulse" strokeWidth={1.5} />
          <div className="w-8 h-12 border-2 border-cyan rounded-full flex justify-center shadow-glow bg-cyan/10 mt-2">
            <div className="w-1.5 h-4 bg-gradient-cyan rounded-full mt-2 animate-glow-pulse shadow-glow" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-8 text-foreground">
              BluePrynt Your Success
            </h2>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Five core pillars that form the foundation of every successful digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="text-center animate-fade-up group cursor-default" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl bg-gradient-primary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {metric.number}
                </div>
                <div className="font-body text-base md:text-lg text-muted-foreground group-hover:text-cyan transition-colors">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Industries We Transform
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              From startups to enterprises, we craft solutions that stand the test of time.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={industry.name}
                className="bg-card border border-border rounded-lg p-6 text-center hover:bg-card-hover hover:border-border-bright transition-all duration-300 animate-fade-up group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <industry.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-cyan transition-colors duration-300 group-hover:scale-110 transform" />
                <p className="font-inter font-medium text-sm text-foreground group-hover:text-cyan transition-colors">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Why Choose BluePrynt?
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              More than an agency – we're your strategic partners in digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Award, title: "Proven Results", desc: "300% average ROAS increase across all campaigns" },
              { icon: Zap, title: "Lightning Fast", desc: "Deploy campaigns in 48 hours, not weeks" },
              { icon: TrendingUp, title: "Data-Driven", desc: "Every decision backed by real performance data" },
              { icon: HomeIcon, title: "Full-Service", desc: "End-to-end solutions under one roof" }
            ].map((feature, index) => (
              <div key={feature.title} className="text-center animate-fade-up group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2 text-foreground group-hover:text-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Our BluePrynt Process
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that turns vision into measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your brand, audience, and objectives" },
              { step: "02", title: "Strategy", desc: "Craft a custom BluePrynt tailored to your goals" },
              { step: "03", title: "Execute", desc: "Launch campaigns with precision and speed" },
              { step: "04", title: "Optimize", desc: "Continuous improvement based on real-time data" }
            ].map((step, index) => (
              <div key={step.step} className="relative animate-fade-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="bg-gradient-hero border border-border rounded-xl p-6 hover:border-border-bright transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg shadow-glow group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-3 text-foreground group-hover:text-cyan transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-primary opacity-5" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan rounded-lg opacity-10 animate-float" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 text-foreground">
            Find Your Missing Piece Today
          </h2>
          <p className="font-inter text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every great structure starts with a solid BluePrynt. Let's build yours.
          </p>
          
          <Button variant="hero" size="lg" asChild>
            <Link to="/brand-enquiry">
              Start Your BluePrynt
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;