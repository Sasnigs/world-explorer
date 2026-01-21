export default function PageContainer({ children }) {
  return (
    <main className="min-h-screen overflow-x-hidden px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </main>
  )
}
