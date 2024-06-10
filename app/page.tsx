import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { vizsgak } from "@/config/vizsgak"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Korábbi évek vizsgafeladatai 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Az alábbiakban megtalálod az elmúlt évek ágazati alapvizsgáinak feladatait és azokhoz tartozó forrás kódokat.
        </p>
      </div>
      <section className="flex flex-col">
        {vizsgak.map((vizsga, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle>{vizsga.title}</CardTitle>
              <CardDescription>
                <Link href={vizsga.doc}>
                  <span className="text-blue-500 underline">Teljes Feladatlap</span>
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold">Forrás kódok:</p>
              {vizsga.files.map((file, fileIndex) => (
                <div key={fileIndex} className="mb-2 flex items-center justify-between opacity-80">
                  <span>{file.title}</span>
                  <Link href={file.path}>
                    <Button variant={"secondary"}>Letöltés</Button>
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>
    </section>
  )
}