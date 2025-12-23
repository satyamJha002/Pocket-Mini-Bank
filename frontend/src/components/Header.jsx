import { Landmark, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 md:py-6 animate-fade-in">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent rounded-xl">
            <Landmark className="w-6 h-6 text-accent-foreground" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              Pocket Bank
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Your finances, simplified
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors relative">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
