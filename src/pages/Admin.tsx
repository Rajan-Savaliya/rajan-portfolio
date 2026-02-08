import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, EyeOff, Download, Copy, Check, ChevronRight, FileJson, AlertCircle, Edit3, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import portfolioData from "@/data/portfolio";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "changeme";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = typeof sections[number]["id"];

export function Admin() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({ title: "Access granted", description: "Welcome to the admin panel." });
    } else {
      toast({ title: "Access denied", description: "Incorrect password.", variant: "destructive" });
    }
  };

  const getSectionData = (sectionId: SectionId) => {
    const data: Record<SectionId, unknown> = {
      hero: portfolioData.hero,
      about: portfolioData.about,
      skills: portfolioData.skills,
      experience: portfolioData.experience,
      projects: portfolioData.projects,
      certifications: portfolioData.certifications,
      contact: portfolioData.contact,
    };
    return data[sectionId];
  };

  const copyToClipboard = (sectionId: SectionId) => {
    const data = getSectionData(sectionId);
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopiedSection(sectionId);
    toast({ title: "Copied!", description: `${sectionId} data copied to clipboard.` });
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const downloadAllData = () => {
    const blob = new Blob([JSON.stringify(portfolioData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-data.json";
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: "Downloaded!", description: "portfolio-data.json saved to your device." });
  };

  const formatJson = (json: unknown) => {
    try {
      return JSON.stringify(json, null, 2);
    } catch {
      return "Invalid JSON";
    }
  };

  const startEditing = (sectionId: SectionId) => {
    const data = getSectionData(sectionId);
    setEditedData(formatJson(data));
    setEditMode(true);
  };

  const cancelEditing = () => {
    setEditMode(false);
    setEditedData("");
  };

  const saveChanges = () => {
    try {
      const parsedData = JSON.parse(editedData);
      // In a real application, this would update the actual data
      // For now, we'll just show a success message
      toast({
        title: "Changes saved!",
        description: `${activeSection} section would be updated. Copy the JSON and update your portfolio.ts file.`
      });
      copyToClipboard(activeSection);
      setEditMode(false);
    } catch (error) {
      toast({
        title: "Invalid JSON",
        description: "Please check your JSON syntax.",
        variant: "destructive"
      });
    }
  };

  // Login gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="glass-card shadow-premium">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-bg flex items-center justify-center">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Admin Access</CardTitle>
              <CardDescription>Enter password to access the admin panel</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full btn-gradient">
                  Unlock
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
              <FileJson className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Portfolio Admin</h1>
              <p className="text-xs text-muted-foreground">Edit your portfolio data</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={downloadAllData} className="gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download All Data</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsAuthenticated(false)}
              className="text-muted-foreground"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Instructions banner */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-start gap-3 text-sm">
            <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              <strong className="text-foreground">How to update your site:</strong> Preview and copy
              the JSON data below, then paste it into <code className="tech-badge mx-1">src/data/portfolio.ts</code>
              to update your website.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <nav className="lg:w-64 flex-shrink-0">
            <div className="glass-card rounded-xl p-2 shadow-premium sticky top-24">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="font-medium">{section.label}</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${
                    activeSection === section.id ? "rotate-90" : ""
                  }`} />
                </button>
              ))}
            </div>
          </nav>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="glass-card shadow-premium">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="capitalize">{activeSection} Section</CardTitle>
                      <CardDescription>
                        Preview and copy the JSON data for this section
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {editMode ? (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={cancelEditing}
                            className="gap-2"
                          >
                            <X className="h-4 w-4" />
                            Cancel
                          </Button>
                          <Button
                            size="sm"
                            onClick={saveChanges}
                            className="gap-2 btn-gradient"
                          >
                            <Save className="h-4 w-4" />
                            Save & Copy
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => startEditing(activeSection)}
                            className="gap-2"
                          >
                            <Edit3 className="h-4 w-4" />
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(activeSection)}
                            className="gap-2"
                          >
                            {copiedSection === activeSection ? (
                              <>
                                <Check className="h-4 w-4" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4" />
                                Copy JSON
                              </>
                            )}
                          </Button>
                        </>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={editMode ? editedData : formatJson(getSectionData(activeSection))}
                      onChange={(e) => editMode && setEditedData(e.target.value)}
                      readOnly={!editMode}
                      className={`font-mono text-xs h-[500px] resize-none ${
                        editMode ? "bg-background border-primary/50" : "bg-muted/50"
                      }`}
                      placeholder={editMode ? "Edit the JSON data..." : ""}
                    />
                    {editMode && (
                      <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        Make sure your JSON is valid before saving. Changes will be copied to clipboard.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Admin;
