import { FunctionComponent } from "preact";

export default function Layout({ children }: FunctionComponent) {
  return (
    <main class="min-h-screen flex flex-col bg-gray-100">
      <nav class="p-4 flex items-center justify-center">
        <img src="/logo.svg" alt="ramen-hunter" class="w-12 h-12" />
        <h1 class="text-2xl font-bold font-['Montserrat']">ramen-hunter</h1>
      </nav>
      <div class="p-4 flex-grow">{children}</div>
      <footer class="p-4 flex items-center justify-between">
        <div>
          <span class="font-bold">Powered by</span>
          <span class="font-bold ml-1">
            <a href="https://github.com/yusukebe/ramen-api">Ramen API</a>
          </span>
        </div>
        <div>
          <a href="https://fresh.deno.dev">
            <img
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </div>
      </footer>
    </main>
  );
}
