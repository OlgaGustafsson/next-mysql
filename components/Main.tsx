export default function Main({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        
        <main 
        className="h-full min-h-[calc(100ch-6rem)] 
        w-screen bg-teal-900 flex justify-center"
        >
          <div 
          className="w-full max-w-screen-lg 
          bg-teal-900 flex justify-center"
          >
            {children}
          </div>
        </main>
    )}