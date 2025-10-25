"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Github, Rocket, Terminal, ExternalLink, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Simulated socket connection (replace with actual socket.io in production)
const mockSocket = {
  on: (event: string, callback: Function) => {},
  off: (event: string, callback: Function) => {},
  emit: (event: string, data: string) => {}
};

export default function DeploymentPlatform() {
  const [repoURL, setRepoURL] = useState<string>("");
  const [logs, setLogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [projectId, setProjectId] = useState<string | undefined>();
  const [deployPreviewURL, setDeployPreviewURL] = useState<string | undefined>();
  const [deploymentStatus, setDeploymentStatus] = useState<"idle" | "building" | "success" | "error">("idle");
  const logContainerRef = useRef<HTMLDivElement>(null);

  const isValidURL = useMemo(() => {
    if (!repoURL || repoURL.trim() === "") return { valid: false, error: null };
    const regex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/([^\/]+)(?:\/)?$/;
    const isValid = regex.test(repoURL);
    return { 
      valid: isValid, 
      error: isValid ? null : "Please enter a valid GitHub repository URL" 
    };
  }, [repoURL]);

  const handleClickDeploy = useCallback(async () => {
    setLoading(true);
    setDeploymentStatus("building");
    setLogs([]);
    
    try {
      // Simulated deployment - replace with actual API call
      // const { data } = await axios.post(`http://localhost:9000/project`, {
      //   gitURL: repoURL,
      //   slug: projectId,
      // });
      
      // Mock deployment process
      const mockProjectSlug = `project-${Date.now()}`;
      const mockURL = `https://${mockProjectSlug}.deploy.app`;
      
      setProjectId(mockProjectSlug);
      
      // Simulate log messages
      const mockLogs = [
        "Cloning repository...",
        "Installing dependencies...",
        "Building project...",
        "Optimizing assets...",
        "Deploying to CDN...",
        "Deployment successful!"
      ];
      
      for (let i = 0; i < mockLogs.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setLogs(prev => [...prev, mockLogs[i]]);
        logContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }
      
      setDeployPreviewURL(mockURL);
      setDeploymentStatus("success");
      setLoading(false);
      
    } catch (error) {
      setDeploymentStatus("error");
      setLogs(prev => [...prev, "Deployment failed. Please try again."]);
      setLoading(false);
    }
  }, [repoURL, projectId]);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl shadow-lg">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">DeployFlow</h1>
          </div>
          <p className="text-slate-300 text-lg">Deploy your GitHub repositories instantly</p>
        </div>

        {/* Main Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
          {/* Input Section */}
          <div className="p-8">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              GitHub Repository URL
            </label>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Github className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  disabled={loading}
                  value={repoURL}
                  onChange={(e) => setRepoURL(e.target.value)}
                  type="url"
                  placeholder="https://github.com/username/repository"
                  className="pl-12 h-14 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl text-lg"
                />
                {!isValidURL.valid && repoURL && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{isValidURL.error}</span>
                  </div>
                )}
              </div>
              <Button
                onClick={handleClickDeploy}
                disabled={!isValidURL.valid || loading}
                className="h-14 px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Deploying...
                  </>
                ) : (
                  <>
                    <Rocket className="w-5 h-5 mr-2" />
                    Deploy
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Status Banner */}
          {deploymentStatus !== "idle" && (
            <div className={`px-8 py-4 border-t border-b border-slate-700/50 ${
              deploymentStatus === "success" ? "bg-green-500/10" :
              deploymentStatus === "error" ? "bg-red-500/10" :
              "bg-blue-500/10"
            }`}>
              <div className="flex items-center gap-3">
                {deploymentStatus === "building" && (
                  <>
                    <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                    <span className="text-blue-300 font-medium">Building your project...</span>
                  </>
                )}
                {deploymentStatus === "success" && (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-green-300 font-medium">Deployment successful!</span>
                  </>
                )}
                {deploymentStatus === "error" && (
                  <>
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-red-300 font-medium">Deployment failed</span>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Preview URL Section */}
          {deployPreviewURL && (
            <div className="px-8 py-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Your project is live at:</p>
                  <a
                    href={deployPreviewURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-mono text-lg flex items-center gap-2 transition-colors"
                  >
                    {deployPreviewURL}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <Button
                  onClick={() => window.open(deployPreviewURL, "_blank")}
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                >
                  Open Site
                </Button>
              </div>
            </div>
          )}

          {/* Logs Section */}
          {logs.length > 0 && (
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-green-400" />
                <h3 className="text-white font-semibold text-lg">Build Logs</h3>
              </div>
              <div
                ref={logContainerRef}
                className="bg-slate-950 rounded-xl p-6 h-80 overflow-y-auto border border-slate-800 shadow-inner"
              >
                <div className="font-mono text-sm space-y-1">
                  {logs.map((log, i) => (
                    <div
                      key={i}
                      className="text-green-400 flex items-start gap-3 animate-in fade-in slide-in-from-left-2 duration-300"
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <span className="text-slate-600 select-none">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-slate-500">›</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-slate-400 text-sm">
          <p>Built with ❤️ for developers who ship fast</p>
        </div>
      </div>
    </main>
  );
}