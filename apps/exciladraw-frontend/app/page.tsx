export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center sketch-shadow text-primary-foreground font-bold text-xl">
              ✏️
            </div>
            <span className="font-sketch text-3xl font-bold text-foreground">Excalidraw</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it works</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>
          <button className="sketch-shadow">
            Start Drawing →
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* Decorative Elements */}
        <div className="absolute top-40 left-10 w-20 h-20 bg-sketch-yellow/30 rounded-full blur-2xl animate-float" />
        <div className="absolute top-60 right-20 w-32 h-32 bg-sketch-pink/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-sketch-blue/20 rounded-full blur-2xl animate-float" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full mb-6">
            <span className="text-sketch-yellow">✨</span>
            <span className="text-sm text-muted-foreground">Now with AI-powered features!</span>
          </div>
          
          <h1 className="font-sketch text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
            Sketch your
            <span className="block text-primary">brilliant ideas</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            The virtual whiteboard for sketching hand-drawn like diagrams. 
            Collaborate with your team in real-time, anywhere in the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button  className="sketch-shadow text-lg px-8 py-6">
              ✏️ Start for Free
            </button>
            <button className="sketch-shadow text-lg px-8 py-6">
              Watch Demo
            </button>
          </div>

          {/* Hero Illustration */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl border-2 border-border sketch-shadow p-8">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Simulated Canvas */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450">
                  {/* Grid pattern */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Sketch elements */}
                  <rect x="100" y="80" width="180" height="100" rx="8" fill="hsl(50 95% 60% / 0.3)" stroke="hsl(220 20% 20%)" strokeWidth="2" className="animate-float" />
                  <text x="190" y="140" textAnchor="middle" className="font-sketch text-xl fill-foreground">Idea 💡</text>
                  
                  <rect x="350" y="150" width="150" height="80" rx="8" fill="hsl(340 80% 65% / 0.3)" stroke="hsl(220 20% 20%)" strokeWidth="2" className="animate-float-delayed" />
                  <text x="425" y="198" textAnchor="middle" className="font-sketch text-lg fill-foreground">Design</text>
                  
                  <rect x="550" y="80" width="160" height="100" rx="8" fill="hsl(160 60% 50% / 0.3)" stroke="hsl(220 20% 20%)" strokeWidth="2" className="animate-float" />
                  <text x="630" y="140" textAnchor="middle" className="font-sketch text-xl fill-foreground">Ship! 🚀</text>
                  
                  {/* Arrows */}
                  <path d="M 285 130 Q 320 100 345 150" fill="none" stroke="hsl(220 20% 20%)" strokeWidth="2" strokeDasharray="5,5" />
                  <path d="M 505 190 Q 530 160 545 130" fill="none" stroke="hsl(220 20% 20%)" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -left-4 top-1/4 bg-card border-2 border-border rounded-xl px-4 py-3 sketch-shadow animate-bounce-soft">
              <div className="flex items-center gap-2">
                <span className="text-sketch-blue text-xl">👥</span>
                <span className="font-sketch text-lg">1M+ users</span>
              </div>
            </div>
            
            <div className="absolute -right-4 bottom-1/4 bg-card border-2 border-border rounded-xl px-4 py-3 sketch-shadow animate-bounce-soft" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <span className="text-sketch-yellow text-xl">⚡</span>
                <span className="font-sketch text-lg">Real-time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sketch text-5xl font-bold text-foreground mb-4">
              Why choose Excalidraw?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to bring your ideas to life, with a natural hand-drawn feel.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "✏️",
                title: "Hand-drawn Style",
                description: "Beautiful, sketchy aesthetic that makes diagrams feel personal and approachable.",
                color: "bg-sketch-yellow/20"
              },
              {
                icon: "👥",
                title: "Real-time Collaboration",
                description: "Work together with your team simultaneously, see cursors and changes instantly.",
                color: "bg-sketch-blue/20"
              },
              {
                icon: "🔗",
                title: "Easy Sharing",
                description: "Share your drawings with a simple link. No sign-up required for viewers.",
                color: "bg-sketch-pink/20"
              },
              {
                icon: "📥",
                title: "Export Anywhere",
                description: "Export to PNG, SVG, or embed directly in your favorite tools like Notion.",
                color: "bg-sketch-green/20"
              },
              {
                icon: "📚",
                title: "Libraries & Templates",
                description: "Access thousands of ready-made shapes and templates to speed up your work.",
                color: "bg-sketch-purple/20"
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "No loading times. Start drawing immediately in your browser.",
                color: "bg-sketch-orange/20"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-2xl p-8 sketch-shadow hover:translate-y[-4px] transition-transform duration-300"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 text-3xl`}>
                  {feature.icon}
                </div>
                <h3 className="font-sketch text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-sketch text-5xl font-bold text-foreground mb-4">
              How it works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in seconds. No learning curve needed.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {[
              { step: "1", title: "Open Excalidraw", description: "No sign-up needed. Just open and start." },
              { step: "2", title: "Start Sketching", description: "Use intuitive tools to draw your ideas." },
              { step: "3", title: "Share & Collaborate", description: "Invite others to view or edit together." }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-sketch text-3xl font-bold mb-4 sketch-shadow">
                  {item.step}
                </div>
                <h3 className="font-sketch text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-sketch text-5xl font-bold mb-6">
            Ready to sketch something amazing?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Join over 1 million creators who use Excalidraw to bring their ideas to life.
          </p>
          <button className="sketch-shadow text-lg px-8 py-6">
            ✏️ Start Drawing — It's Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                ✏️
              </div>
              <span className="font-sketch text-2xl font-bold text-foreground">Excalidraw</span>
            </div>
            <div className="flex items-center gap-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Excalidraw. Made with ✏️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
