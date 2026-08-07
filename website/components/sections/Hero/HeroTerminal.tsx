export default function HeroTerminal() {
  return (
    <div className="flex justify-center">

      <div className="w-[540px] overflow-hidden rounded-2xl border border-zinc-800 bg-[#18181B] shadow-2xl">

        {/* Barra */}

        <div className="flex items-center gap-3 border-b border-zinc-800 px-5 py-4">

          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>

          <span className="ml-4 text-zinc-400">
            terminal
          </span>

        </div>

        {/* Contenido */}

        <div className="space-y-6 p-8 font-mono text-lg">

          <div>

            <p className="text-zinc-400">$ whoami</p>

            <p className="mt-3 text-white font-semibold">
              Lucía Ramírez
            </p>

          </div>

          <div>

            <p className="text-zinc-400">$ skills</p>

            <div className="mt-3 space-y-2 text-green-400">

              <p>✓ Software Development</p>
              <p>✓ Automation</p>
              <p>✓ Databases</p>
              <p>✓ APIs</p>

            </div>

          </div>

          <div>

            <p className="text-zinc-400">$ status</p>

            <p className="mt-3 text-white">
              Available for freelance projects
            </p>

          </div>

          <p className="text-zinc-400">$ <span className="animate-pulse">|</span></p>

        </div>

      </div>

    </div>
  );
}