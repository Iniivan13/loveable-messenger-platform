
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                Modern Messaging Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Beautiful and <span className="text-primary">Powerful</span> Messaging Platform
              </h1>
              <p className="text-muted-foreground md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
                A premium contact messaging platform with AI-powered responses and seamless user experience. 
                Connect with your audience in style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="h-12 px-8 rounded-full">
                  <Link to="/contact">Send a Message</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 rounded-full">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl opacity-30"></div>
                <div className="relative bg-white dark:bg-black/40 border rounded-2xl p-6 shadow-soft-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
                  <div className="space-y-5">
                    <div className="h-10 w-24 bg-muted/50 rounded-md animate-pulse-subtle"></div>
                    <div className="space-y-3">
                      <div className="h-5 bg-muted/50 rounded w-4/5 animate-pulse-subtle"></div>
                      <div className="h-5 bg-muted/50 rounded w-3/5 animate-pulse-subtle"></div>
                    </div>
                    <div className="bg-muted/30 h-32 rounded-lg p-4 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="h-4 bg-muted/50 rounded w-3/4 animate-pulse-subtle"></div>
                        <div className="h-4 bg-muted/50 rounded w-2/4 animate-pulse-subtle"></div>
                      </div>
                      <div className="flex justify-end">
                        <div className="h-8 w-16 bg-primary/30 rounded-md"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-8 w-28 bg-muted/50 rounded-md animate-pulse-subtle"></div>
                      <div className="h-10 w-10 bg-primary/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Core Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Smart Messaging with AI Power
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform combines beautiful design with advanced AI capabilities to provide a premium messaging experience.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Responses",
                description: "Advanced AI analyzes messages and provides smart, contextual responses automatically.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                ),
              },
              {
                title: "Elegant Design",
                description: "Minimalist interface focused on clarity and ease of use, with thoughtful animations and interactions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                ),
              },
              {
                title: "Secure Communication",
                description: "Your messages are encrypted and securely stored, ensuring privacy and confidentiality.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-black/40 border rounded-xl p-6 shadow-soft card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-noise opacity-5"></div>
            <div className="relative py-12 md:py-20 px-6 md:px-12 text-white max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your messaging experience?</h2>
              <p className="text-white/80 mb-8 text-lg">
                Join thousands of users who are already enjoying our premium messaging platform with AI capabilities.
              </p>
              <Button asChild size="lg" variant="secondary" className="h-12 px-8 rounded-full bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
