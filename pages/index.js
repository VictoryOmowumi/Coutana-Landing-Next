import { Navbar, Hero, Box, Footer, About, Partner, AppSection } from "../components";


export default function Home() {
  return (
    <div class="antialiased bg-gradient-to-r from-[#fef5ff] via-[#eaeafb] to-white">
      <Navbar />
      <Hero />
      <Box />
      <About />
      <AppSection />
      <Partner />
      <Footer />
    </div>
  );
}
