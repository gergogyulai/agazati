import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Cheatsheetek 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Az alábbiakban megtalálod az általam készített cheatsheeteket. Fontos tudni, hogy ezek a segédletek nem tartalmaznak minden információt, csak azokat a dolgokat, amiket én fontosnak tartok.
        </p>
      </div>
      <section className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="flex h-64 flex-col items-center justify-center">
            <CardHeader>
              <CardTitle>Webfejlesztés</CardTitle>
              <CardDescription>HTML, CSS, JavaScript</CardDescription>
            </CardHeader>
            <Link href={"/cheatsheet/webfejlesztes"}><Button>Megnyitás</Button></Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex h-64 flex-col items-center justify-center">
            <CardHeader>
              <CardTitle>Python</CardTitle>
              <CardDescription>Python programozás</CardDescription>
            </CardHeader>
            <Link href={"/cheatsheet/python"}><Button>Megnyitás</Button></Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex h-64 flex-col items-center justify-center">
            <CardHeader>
              <CardTitle>Hálózatok</CardTitle>
              <CardDescription>Cisco Packet Tracer</CardDescription>
            </CardHeader>
            <Link href={"/cheatsheet/halozatok"}><Button>Megnyitás</Button></Link>
          </CardContent>
        </Card>
      </section>
      <div className="flex flex-col gap-2 text-center text-muted-foreground">
      <p>
        Minden információ az én saját álláspontomat tükrözi, és nem feltétlenül helytálló. (Vedd úgy hogy mindig igazam van kivéve amikor nem.)
      </p>
      <p className="font-bold">
        Mindenki saját felelősségére használja ezeket az információkat
      </p>
      </div>
    </section>
  );
}