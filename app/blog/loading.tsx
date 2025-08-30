export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="space-y-8 w-full max-w-4xl">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-sm animate-pulse"
          >
            <div className="h-8 bg-purple-600/20 rounded-lg w-3/4 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-purple-600/20 rounded w-5/6"></div>
              <div className="h-4 bg-purple-600/20 rounded w-4/6"></div>
            </div>
            <div className="mt-6 flex gap-3">
              {[1, 2, 3].map((j) => (
                <div
                  key={j}
                  className="h-6 w-16 bg-purple-600/20 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
