"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Globe,
  Server,
  Play,
  Settings,
  Activity,
  Clock,
  ExternalLink,
  MoreVertical
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Deployment {
  environment: "development" | "production";
  status: "active" | "deploying" | "inactive" | "error";
  url?: string;
  lastDeployedAt?: string;
}

interface Project {
  id: string;
  name: string;
  type: "frontend" | "backend";
  deployments: Deployment[];
}

interface ProjectCardProps {
  project: Project;
  onDeploy: (projectId: string, environment: "development" | "production") => void;
}

export function ProjectCard({ project, onDeploy }: ProjectCardProps) {
  const [selectedEnv, setSelectedEnv] = useState<"development" | "production">("development");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-secondary text-secondary-foreground";
      case "deploying":
        return "bg-accent text-accent-foreground";
      case "error":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Activity className="w-3 h-3" />;
      case "deploying":
        return <Clock className="w-3 h-3 animate-spin" />;
      default:
        return <Activity className="w-3 h-3" />;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${project.type === "frontend" ? "bg-primary/10" : "bg-secondary/10"
            }`}>
            {project.type === "frontend" ? (
              <Globe className="w-6 h-6 text-primary" />
            ) : (
              <Server className="w-6 h-6 text-secondary" />
            )}
          </div>
          <div>
            <h3 className="mb-1">{project.name}</h3>
            <Badge variant="outline" className="capitalize">
              {project.type}
            </Badge>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Delete Project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-3">
        {/* Environment Selector */}
        <div className="flex gap-2 bg-muted/50 rounded-lg p-1">
          <button
            onClick={() => setSelectedEnv("development")}
            className={`flex-1 px-3 py-2 rounded-md transition-all ${selectedEnv === "development"
                ? "bg-card shadow-sm"
                : "hover:bg-card/50"
              }`}
          >
            Development
          </button>
          <button
            onClick={() => setSelectedEnv("production")}
            className={`flex-1 px-3 py-2 rounded-md transition-all ${selectedEnv === "production"
                ? "bg-card shadow-sm"
                : "hover:bg-card/50"
              }`}
          >
            Production
          </button>
        </div>

        {/* Deployment Info */}
        {project.deployments.map((deployment) => {
          if (deployment.environment === selectedEnv) {
            return (
              <div key={deployment.environment} className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge className={getStatusColor(deployment.status)}>
                    {getStatusIcon(deployment.status)}
                    <span className="ml-1 capitalize">{deployment.status}</span>
                  </Badge>
                  {deployment.lastDeployedAt && (
                    <span className="text-muted-foreground text-sm">
                      {deployment.lastDeployedAt}
                    </span>
                  )}
                </div>

                {deployment.url && deployment.status === "active" && (
                  <a
                    href={deployment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {deployment.url}
                  </a>
                )}

                <Button
                  onClick={() => onDeploy(project.id, selectedEnv)}
                  disabled={deployment.status === "deploying"}
                  className="w-full"
                  variant={deployment.status === "active" ? "outline" : "default"}
                >
                  <Play className="w-4 h-4 mr-2" />
                  {deployment.status === "deploying"
                    ? "Deploying..."
                    : deployment.status === "active"
                      ? "Redeploy"
                      : "Deploy"}
                </Button>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
