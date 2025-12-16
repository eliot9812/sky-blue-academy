import { useState } from 'react';
import { Lock, User, LayoutDashboard, Bell, Image, LogOut, Mail, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-indigo-700 flex items-center justify-center p-4">
        <Card variant="elevated" className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-indigo-700" />
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
              <Button type="submit" className="w-full bg-indigo-700 hover:bg-indigo-800 text-white">
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
      {/* Admin Header - Matching website theme */}
      <header className="bg-indigo-700 shadow-xl">
        <div className="container-custom mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-indigo-700" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-white">Admin Panel</h1>
              <p className="text-xs text-white/80">Sunrise Academy</p>
            </div>
          </div>
          <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => setIsLoggedIn(false)}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Admin Content */}
      <main className="container-custom mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Students</p>
                  <p className="text-3xl font-bold text-foreground font-heading">523</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-700" />
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
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-indigo-700" />
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
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Image className="w-6 h-6 text-indigo-700" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Contact Messages</p>
                  <p className="text-3xl font-bold text-foreground font-heading">12</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-indigo-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Notice, Gallery, Contact */}
        <Tabs defaultValue="notices" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="notices" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notices
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </TabsTrigger>
          </TabsList>

          {/* Notice Management Tab */}
          <TabsContent value="notices">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-indigo-700" />
                  Notice Management
                </CardTitle>
                <CardDescription>Create and manage school notices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg divide-y">
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Annual Sports Day 2024</h4>
                        <p className="text-sm text-muted-foreground">Posted: Dec 10, 2024</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Winter Vacation Notice</h4>
                        <p className="text-sm text-muted-foreground">Posted: Dec 5, 2024</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Parent-Teacher Meeting</h4>
                        <p className="text-sm text-muted-foreground">Posted: Nov 28, 2024</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="destructive" size="sm">Delete</Button>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white">
                    <FileText className="w-4 h-4 mr-2" />
                    Add New Notice
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Management Tab */}
          <TabsContent value="gallery">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5 text-indigo-700" />
                  Gallery Management
                </CardTitle>
                <CardDescription>Upload and manage gallery images</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                      <div key={item} className="relative group">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                          <Image className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <Button variant="destructive" size="sm">Delete</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white">
                    <Image className="w-4 h-4 mr-2" />
                    Upload Images
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Messages Tab */}
          <TabsContent value="contact">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-indigo-700" />
                  Contact Messages
                </CardTitle>
                <CardDescription>View and respond to contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg divide-y">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">John Doe</h4>
                        <span className="text-xs text-muted-foreground">Dec 15, 2024</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">john.doe@email.com</p>
                      <p className="text-sm">Inquiry about admission process for Grade 5...</p>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">Reply</Button>
                        <Button variant="ghost" size="sm">Mark as Read</Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Jane Smith</h4>
                        <span className="text-xs text-muted-foreground">Dec 14, 2024</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">jane.smith@email.com</p>
                      <p className="text-sm">Question about school transport facilities...</p>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">Reply</Button>
                        <Button variant="ghost" size="sm">Mark as Read</Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Robert Johnson</h4>
                        <span className="text-xs text-muted-foreground">Dec 12, 2024</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">robert.j@email.com</p>
                      <p className="text-sm">Feedback about the recent annual day event...</p>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">Reply</Button>
                        <Button variant="ghost" size="sm">Mark as Read</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPanel;
