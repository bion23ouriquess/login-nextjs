"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { ArrowLeft } from "lucide-react"

export function CardRegister() {
    const router = useRouter();
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />
                <CardTitle className="text-center">Faça seu cadastro aqui!</CardTitle>
                <CardDescription className="text-center">
                    Cadastre-se no nosso site! Coloque seu nome, cpf, email e defina sua senha para concluir o cadastro.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-2">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">E-mail:</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="exemplo@email.com"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Nome:</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Exemplo Júnior"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="senha">Senha:</Label>
                        <Input
                            id="senha"
                            type="text"
                            placeholder="*********"
                            required
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full cursor-pointer">
                    Cadastrar
                </Button>
                {/* <Button type="submit" className="bg-gray-500 w-full cursor-pointer" onClick={() => router.back()}>
                    Voltar
                </Button> */}
            </CardFooter>
        </Card>
    );
}
