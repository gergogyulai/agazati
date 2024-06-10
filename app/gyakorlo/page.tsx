import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { gyakorlo } from "@/config/vizsgak"
import { Button } from "@/components/ui/button"
import DoneButton from "@/components/done-button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Gyakorló feladatok 
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
            Az éles feladatokhoz hasonló jellegű feladatok gyakorláshoz.
        </p>
      </div>
      <section className="flex flex-col">
        {gyakorlo.map((vizsga, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
            <CardTitle className="flex h-6 items-center justify-between">
                <div>
                  {vizsga.title}
                </div>
                <div>
                  <DoneButton id={vizsga.id}/>
                </div>
              </CardTitle>
              <CardDescription>
                <Link target="_blank" href={vizsga.doc}>
                  <span className="text-blue-500 underline">Feladatlap</span>
                </Link>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold">Forrás kód: </p>
              {vizsga.files.map((file, fileIndex) => (
                <div key={fileIndex} className="mb-2 flex items-center justify-between opacity-80">
                  <span>{file.title} (.zip)</span>
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