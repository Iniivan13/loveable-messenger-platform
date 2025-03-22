
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Our Story
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                About MessageHub
              </h1>
              <p className="text-muted-foreground text-lg">
                We're building the future of messaging with AI-powered technology and beautiful design principles.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At MessageHub, our mission is to create messaging experiences that seamlessly blend cutting-edge AI 
                with elegant, intuitive design. We believe communication should be effortless, beautiful, and intelligent.
              </p>
              <p className="text-muted-foreground">
                Founded in 2023, we set out to create a messaging platform that challenges the status quo, 
                putting both functionality and aesthetics at the forefront of our design philosophy.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border bg-muted/30">
                <div className="absolute inset-0 bg-noise opacity-5"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our Values
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Simplicity",
                  description: "We believe in removing complexity, not adding features. Our designs focus on what matters most.",
                },
                {
                  title: "Intelligence",
                  description: "We harness AI to create smarter, more intuitive communications that adapt to users' needs.",
                },
                {
                  title: "Craftsmanship",
                  description: "We obsess over details, creating products with thoughtful interactions and seamless experiences.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-muted-foreground">
                A dedicated group of designers, engineers, and AI specialists building the future of messaging.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Chen", role: "Founder & CEO" },
              { name: "Mia Rodriguez", role: "Head of Design" },
              { name: "David Kim", role: "AI Lead" },
              { name: "Sarah Johnson", role: "Engineering Director" },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-black/40 border rounded-xl p-5 text-center shadow-soft card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-muted/50 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
