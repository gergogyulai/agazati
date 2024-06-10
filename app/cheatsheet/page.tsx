import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { gyakorlo } from "@/config/vizsgak";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

export default function IndexPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <section className="grid grid-flow-row grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
