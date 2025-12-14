import { useState } from 'react';
import { Lock, User, LayoutDashboard, Bell, Image, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login (in production, use proper authentication)
    if (credentials.username && credentials.password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center p-4">
        <Card variant="elevated" className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-secondary" />
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>Sunrise Academy Administration Panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className="pl-10"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="pl-10"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>
              <Button type="submit" variant="maroon" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Admin Header */}
      <header className="bg-card border-b border-border">
        <div className="container-custom mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-foreground">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">Sunrise Academy</p>
            </div>
          </div>
          <Button variant="ghost" onClick={() => setIsLoggedIn(false)}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Admin Content */}
      <main className="container-custom mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Students</p>
                  <p className="text-3xl font-bold text-foreground font-heading">523</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Notices</p>
                  <p className="text-3xl font-bold text-foreground font-heading">8</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Gallery Images</p>
                  <p className="text-3xl font-bold text-foreground font-heading">45</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Image className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Notice Management */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-secondary" />
                Notice Management
              </CardTitle>
              <CardDescription>Create and manage school notices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Notice management functionality will be implemented here. You can add, edit, and delete school notices.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  + Add New Notice
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Gallery Management */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="w-5 h-5 text-primary" />
                Gallery Management
              </CardTitle>
              <CardDescription>Upload and manage gallery images</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Gallery management functionality will be implemented here. You can upload, organize, and delete images.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  + Upload Images
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;