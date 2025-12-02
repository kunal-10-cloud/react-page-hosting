import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Plus, Globe, Server } from "lucide-react";

interface CreateProjectDialogProps {
  onCreateProject: (name: string, type: "frontend" | "backend") => void;
}

export function CreateProjectDialog({ onCreateProject }: CreateProjectDialogProps) {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState<"frontend" | "backend">("frontend");

  const handleCreate = () => {
    if (projectName.trim()) {
      onCreateProject(projectName, projectType);
      setProjectName("");
      setProjectType("frontend");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2">
          <Plus className="w-5 h-5" />
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Set up a new frontend or backend project with automatic deployment
            pipelines.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="project-name">Project Name</Label>
            <Input
              id="project-name"
              placeholder="my-awesome-project"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            />
          </div>

          <div className="space-y-2">
            <Label>Project Type</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setProjectType("frontend")}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                  projectType === "frontend"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Frontend</div>
                  <div className="text-sm text-muted-foreground">Web app</div>
                </div>
              </button>

              <button
                onClick={() => setProjectType("backend")}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                  projectType === "backend"
                    ? "border-secondary bg-secondary/5"
                    : "border-border hover:border-secondary/50"
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Server className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Backend</div>
                  <div className="text-sm text-muted-foreground">API/Server</div>
                </div>
              </button>
            </div>
          </div>

          <Button onClick={handleCreate} className="w-full" disabled={!projectName.trim()}>
            Create Project
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
