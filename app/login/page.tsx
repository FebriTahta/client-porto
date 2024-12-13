"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useSearchParams,
  //  useRouter 
  } from "next/navigation";  // Import useRouter dan useSearchParams

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams(); // Ambil query params dari URL
  // const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL_DEV + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) throw new Error("Login failed. Please check your credentials.");
  
      const data = await response.json();
      const token = data.data;
  
      // Simpan token di cookie
      document.cookie = `jwtToken=${token}; path=/`;

      // Ambil URL redirect dari parameter URL (misalnya /login?redirect=%2Fprofile)
      const redirectUrl = searchParams.get("redirect") || "/"; // Default ke home jika redirect tidak ada
      const decodedRedirectUrl = decodeURIComponent(redirectUrl); // Decode URL
       
      //  Redirect ke URL yang didekode
       window.location.href = decodedRedirectUrl;
       

    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <section className="flex items-center justify-center h-screen">
        <form onSubmit={handleLogin}>
        <Card className="w-[350px]">
            <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Access your account by logging in</CardDescription>
            </CardHeader>
            <CardContent>
            
                <div className="space-y-4">
                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
            
            
            </CardContent>
            <CardFooter className="mt-4">
                <Button
                    type="submit"
                    disabled={isLoading}
                    className={`rounded-md ml-auto ${isLoading ? "opacity-50 cursor-not-allowed" : ""}` }
                >
                    {isLoading ? "Logging in..." : "Login"}
                </Button>
            </CardFooter>
        </Card>
        </form>
    </section>
  );
};

export default LoginPage;
