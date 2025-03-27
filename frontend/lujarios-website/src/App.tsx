import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <header className="w-full px-6 py-4 flex items-center justify-between border-b border-stone-200 dark:border-stone-800">
        <h1 className="text-xl font-bold">Lujarios</h1>
        <ModeToggle />
      </header>

      <main className="px-6 py-20">
        {/* Intro Section */}
        <section id="intro" className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Hey, I'm Luca Rios!</h2>
          <p className="text-lg mb-6">
            I'm a software engineer who loves building web experiences that are fast,
            accessible, and beautiful. Welcome to my portfolio.
          </p>
          <Button>View My Work</Button>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-32 max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 shadow-sm bg-card text-card-foreground">
              <h4 className="text-xl font-semibold mb-2">Project One</h4>
              <p className="text-sm bg-card text-card-foreground">
                Description of what this project is, tech used, and the goal.
              </p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm bg-card text-card-foreground">
              <h4 className="text-xl font-semibold mb-2">Project Two</h4>
              <p className="text-sm bg-card text-card-foreground">
                Another short description. Add links or demo buttons later.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-32 px-6 py-10 text-center text-sm text-stone-500 dark:text-stone-400">
        © {new Date().getFullYear()} Lujarios. Built with React, TypeScript, Tailwind, and shadcn/ui.
      </footer>
    </div>
  );
}

export default App;