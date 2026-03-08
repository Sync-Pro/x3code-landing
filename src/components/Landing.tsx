import { useState } from 'react';
import { VscCode, VscTerminalPowershell, VscFile, VscSend, VscFolderOpened, VscGithub, VscArrowRight, VscLinkExternal } from 'react-icons/vsc';

export const Landing: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    { icon: <VscSend className="text-2xl" />, title: 'AI Chat Interface', description: 'Chat with Codex and Claude Code agents in a beautiful, streaming interface with syntax highlighting.' },
    { icon: <VscFile className="text-2xl" />, title: 'File Explorer', description: 'Browse, create, and manage your project files with an intuitive tree view and context menus.' },
    { icon: <VscTerminalPowershell className="text-2xl" />, title: 'Terminal Integration', description: 'See real-time output from agent processes in a collapsible terminal panel.' },
    { icon: <VscFolderOpened className="text-2xl" />, title: 'Multi-Agent Support', description: 'Switch between Codex and Claude Code seamlessly. The app detects which agents are installed.' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <VscCode className="text-2xl text-blue-600" />
            <span className="text-xl font-bold">X3Code</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#download" className="text-gray-600 hover:text-blue-600 transition-colors">Download</a>
            <a href="https://github.com/Sync-Pro/x3code-landing" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <VscGithub className="text-xl" />
            </a>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Now available for Windows
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            The best way to<br /><span className="text-blue-600">code with AI</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            A modern desktop GUI for coding agents. Chat with AI, manage files, and see real-time output.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://github.com/Sync-Pro/x3code-releases/raw/master/X3Code%20Setup%201.0.0.exe" className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/25">
              Download for Windows <VscArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#features" className="px-8 py-4 border border-gray-200 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-gray-400 text-sm">X3Code</span>
            </div>
            <div className="flex h-[400px] bg-[#1e1e1e]">
              <div className="w-56 bg-[#252526] border-r border-[#3e3e42] p-3">
                <div className="text-xs font-semibold text-gray-500 uppercase mb-3">Explorer</div>
                <div className="space-y-1 text-gray-400 text-sm">
                  <div className="px-2">src/</div>
                  <div className="px-4">components/</div>
                  <div className="px-6">App.tsx</div>
                </div>
              </div>
              <div className="flex-1 p-4">
                <div className="text-gray-300 text-sm mb-4">I can help you build amazing things!</div>
                <div className="text-white text-sm text-right mb-4">Create a React login form</div>
                <div className="text-gray-300 text-sm">Sure, here is the code:</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything you need</h2>
            <p className="text-xl text-gray-500">A complete development environment powered by AI</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:border-blue-600 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get started today</h2>
          <p className="text-xl text-gray-400 mb-10">Download X3Code for free</p>
          <a href="https://github.com/Sync-Pro/x3code-releases/raw/master/X3Code%20Setup%201.0.0.exe" target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700">
            <VscCode /> Download for Windows
          </a>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <VscCode className="text-blue-600" />
            <span className="font-semibold">X3Code</span>
            <span className="text-gray-500">The best way to code with AI</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Sync-Pro/x3code-landing" className="text-gray-500 hover:text-blue-600">GitHub</a>
            <a href="https://discord.com" className="text-gray-500 hover:text-blue-600">Community</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
