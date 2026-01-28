import { Layout } from "@/components/layout";
import { SITE_CONTENT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-children.png" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-medium mb-4 text-orange-200 tracking-wide">
              {SITE_CONTENT.hero.subtitle}
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-white">
              {SITE_CONTENT.hero.tagline}
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 text-lg h-12 w-full sm:w-auto">
                  {SITE_CONTENT.hero.ctaPrimary}
                </Button>
              </Link>
              <Link href="/donate">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 text-lg h-12 w-full sm:w-auto">
                  {SITE_CONTENT.hero.ctaSecondary}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Trust Section */}
      <section id="about" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              {SITE_CONTENT.about.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {SITE_CONTENT.about.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-20 bg-orange-50/30 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                {SITE_CONTENT.history.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {SITE_CONTENT.history.description}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 flex justify-center"
            >
              <div className="w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-xl bg-white p-2">
                <img 
                   src="/assets/logo-real.jpeg" 
                   alt="Ananda Marga History" 
                   className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div {...fadeInUp}>
            <div className="w-32 h-32 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6 text-primary">
              <span className="font-serif text-4xl font-bold">A</span>
            </div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
              {SITE_CONTENT.founder.name}
            </h2>
            <p className="text-primary font-medium mb-6 uppercase tracking-widest text-sm">
              {SITE_CONTENT.founder.title}
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              "{SITE_CONTENT.founder.description}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Causes Section */}
      <section id="causes" className="py-20 bg-orange-50/50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Our Core Causes</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SITE_CONTENT.causes.map((cause, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-8 text-center px-6 pb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                      <cause.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{cause.title}</h3>
                    <p className="text-muted-foreground">{cause.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Project Section */}
      <section id="school" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
                <img 
                  src="/assets/hero-children.png" 
                  alt="School children" 
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full -z-10" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
                {SITE_CONTENT.school.title}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {SITE_CONTENT.school.established}
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {SITE_CONTENT.school.current}
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {SITE_CONTENT.school.proposal}
                </p>
              </div>
              <p className="text-xl font-medium text-secondary">
                {SITE_CONTENT.school.focus}
              </p>
              <Link href="/donate">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white mt-4">
                  Support the School Project
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Activities Section */}
      <section id="activities" className="py-20 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Latest Activities</h2>
            <p className="text-muted-foreground">Glimpses of our service to humanity</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SITE_CONTENT.activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium text-lg">{activity.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SITE_CONTENT.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10 relative"
              >
                <span className="text-6xl text-primary/20 font-serif absolute top-4 left-4">"</span>
                <p className="text-lg font-medium text-gray-700 italic mb-4 relative z-10 pt-4">
                  {testimonial.text}
                </p>
                <p className="text-primary font-bold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
