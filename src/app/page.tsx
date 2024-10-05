import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 sm:p-20">
      <main className="flex flex-col items-center text-center gap-8">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="WingzDev logo"
              width={80}
              height={38}
              priority
            />
          </div>
          <p className="text-2xl font-semibold">
            WingzDev Team Retirement Notice
          </p>
          <p>
            We regret to inform you that the WingzDev team is no longer active.
            Our journey has come to an end, and we have made the difficult
            decision to retire our services. We want to express our heartfelt
            gratitude to all our customers who have been with us throughout this
            incredible journey. Your support and trust have meant the world to
            us. As previously communicated, all of our customers have been
            notified about this retirement. We appreciate your understanding
            during this transition.
          </p>
          <p>
            Thank you for being a part of the WingzDev story. We wish you all
            the best in your future endeavors.
          </p>
          <div className="mt-4 pt-4 border-t border-neutral-800">
            <div>
              <p className="text-base font-semibold">Dileepa Bandara</p>
              <p className="text-sm">Founder & Developer at WingzDev</p>
              <p className="text-sm">31 December 2023</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
