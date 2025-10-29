import { tweets } from "@/data/portfolio-data";
import { TweetCard, TweetSkeleton } from "@/components/ui/tweetcard";

export default async function Tweets() {
  // Duplicate tweets for seamless infinite scroll
  const duplicatedTweets = [...tweets, ...tweets, ...tweets];
  const CARD_WIDTH = 420; // Natural width for tweet cards
  const CARD_GAP = 24; // 1.5rem = 24px

  return (
    <section id="tweets" className="space-y-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/40">
            {"// Tweets"}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
            Build logs straight from the studio.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-white/60">
          Quick riffs on process, systems, and momentum. No fluff—just the
          play-by-play of keeping delivery sharp.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_30px_80px_-60px_rgba(255,255,255,0.55)]">
        <div 
          className="flex gap-6 animate-scroll items-start"
          style={{
            width: `${duplicatedTweets.length * (CARD_WIDTH + CARD_GAP)}px`,
          }}
        >
          {duplicatedTweets.map((tweet, index) => (
            <div
              key={`${tweet.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <TweetCard
                id={tweet.id}
                className="border border-white/10 bg-white/[0.05] transition hover:border-white/40 hover:bg-white/[0.08] w-full"
                fallback={
                  <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                    <TweetSkeleton className="bg-white/[0.03] border-white/10" />
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
