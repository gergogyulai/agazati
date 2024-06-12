export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center pt-8">
      <article className="container prose max-w-screen-md p-4 dark:prose-invert">
        {children}
      </article>
    </div>
  )
}