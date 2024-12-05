'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null); // Mengizinkan null atau string
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL_DEV + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error("Login failed. Please check your credentials.");
        }

        const data = await response.json();
        const token = data.data;

        localStorage.setItem("jwtToken", token);
        router.push("/dashboard");
        // Redirect user
        } catch (err) {

            if (err instanceof Error) {
                setError(err.message); // Tidak ada lagi error pada bagian ini
            } else {
                setError("An unknown error occurred.");
            }
        }
    };

  return (
    <section className="flex xl:py-24 xl:h-[95vh] xl:pt-[140px]  py-12 h-[95vh] bg-white dark:bg-transparent font-[family-name:var(--font-geist-mono)]">
        <div className="container mx-auto flex justify-center items-center h-full">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Organize your content by logging in first</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" placeholder="Type your name or username" value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Type your password" value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={handleLogin} className="ml-auto">Login</Button>
                </CardFooter>
            </Card>
        </div>
    </section>
  )
}

export default Page