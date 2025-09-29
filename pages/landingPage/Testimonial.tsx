import React, { useEffect, useMemo, useRef, useState } from 'react';
import TitleH1 from '@/components/ui/TitleH1';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  body: string;
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return '';
  const first = parts[0]?.[0] ?? '';
  const second = parts.length > 1 ? parts[1]?.[0] ?? '' : (parts.length > 2 ? parts[parts.length - 1]?.[0] ?? '' : '');
  return (first + second).toUpperCase();
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ms. Roohee Khan',
    role: 'Lead Learning & Organizational Development',
    company: 'ACG Worldwide',
    body:
      'Working with Innoserv was a real pleasure. It is always wonderful when a provider listens to our needs, develops the training module around those needs and fine tunes the training to ensure that it is fit for purpose. The trainer was extremely professional, knowledgeable and kept the participants engaged at all times. The participants enjoyed the training and have given outstanding feedback for the training programme.',
  },
  {
    id: 2,
    name: 'Mr. Manoj Saxena & Mr. Deepak Maheshwari',
    role: 'GM Business Excellence & HR Team Lead',
    company: 'Progressive Infotech Pvt Ltd',
    body:
      'Thanks for all support during COVID Period, our overall experience dealing with InnoServ is quite good due to your prompt response and understanding our exact expectations and help us identify the right Trainer. We look forward to your support going forward.',
  },
  {
    id: 3,
    name: 'Girish Nair',
    role: 'Associate | People Service',
    company: 'Opteamix',
    body:
      'We really appreciate your service and quick responses from the beginning for all the training request. We have always received great feedbacks from the participants, and the team leads coordinated with the training. As usual you have shared the best trainer for our training request. Once again thanks for all the services you have offered and sure we will reach out to InnoServ when we have any future training requests.',
  },
  {
    id: 4,
    name: 'Ms. Prerna Khanolkar',
    role: 'Sr. Associate L&D',
    company: 'Cactus Communications',
    body:
      "We’ve been partnering with InnoServ for more than 6+ months and they’ve proven to be a reliable L&D partner for all our technical requirements. They are our first point of contact for any MS Excel or MS Suite trainings. The depth of knowledge and delivery of their trainers is high quality and are always received well by our participants. InnoServ’s team is very proactive and passionate in what they do, they have always done a good job with our requirements and have ensured that our participants are left with a great learning experience after every program.",
  },
  {
    id: 5,
    name: 'Ms. Vidya Mhetre',
    role: 'HR Executive',
    company: 'M Tech Innovations Pvt Ltd',
    body:
      'It was a very wonderful session through InnoServ. Trainer had leadership traits and taught us about life goals, how to be motivated in work and be assertive. Thank you for your time given to our employees. They were very happy with training which they had gone through.',
  },
  {
    id: 6,
    name: 'Ms. Sangeetha Paneerselvam',
    role: 'Office Manager',
    company: 'Calypso Technology',
    body:
      'We wanted to say thanks for providing a good trainer for Self Defence session and all participants enjoyed the session and trainer did a very good job. And, thanks for arranging a wonderful session on Desk Based Yoga and Meditation program. We have got tremendous response from employees. Looking forward to have more such sessions from Innoserv.',
  },
  {
    id: 7,
    name: 'Anil Agarwal',
    role: 'L & D Manager',
    company: 'Stridely Solutions',
    body:
      'It was a pleasure working with you for this training assignment, and we extend our gratitude for your unwavering support. Your assistance in facilitating the trainer change based on feedback was especially valuable. We genuinely appreciate your dedication and coordination.',
  },
];

const CARD_WIDTH_PX = 360; // base card width used for scroll calculations
const SCROLL_SPEED_CARD_FACTOR = 0.3; // 70% of a card per second
const SCROLL_SPEED_PX_PER_SEC = CARD_WIDTH_PX * SCROLL_SPEED_CARD_FACTOR;

const TestimonialCarousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Duplicate list for seamless loop
  const loopItems = useMemo(() => [...testimonials, ...testimonials], []);

  useEffect(() => {
    let rafId: number;
    const el = containerRef.current;
    if (!el) return;

    let lastTs: number | null = null;
    const halfWidth = () => el.scrollWidth / 2;

    const step = (ts: number) => {
      if (lastTs === null) lastTs = ts;
      const deltaMs = ts - lastTs;
      lastTs = ts;

      if (!isHovering) {
        const deltaPx = (deltaMs / 1000) * SCROLL_SPEED_PX_PER_SEC;
        el.scrollLeft += deltaPx;
        const half = halfWidth();
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half; // seamless wrap
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isHovering]);

  return (
    <section className="relative max-w-full mx-auto bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <TitleH1
          title="What our Clients say!"
          description="Real stories from real people. Discover how our solutions have transformed organizations and empowered teams to achieve remarkable results."
          titleClassName="text-left"
          descriptionClassName="text-left max-w-3xl"
          disableDefaultPadding
        />

          <div
            ref={containerRef}
            className="relative overflow-hidden "
          >
              {/* track */}
              <div className="flex gap-6 p-6 md:p-10" style={{ width: 'max-content' }}>
              {loopItems.map((t, idx) => (
                <article
                  key={`${t.id}-${idx}`}
                  className="flex-none w-[260px] sm:w-[300px] md:w-[340px]"
                  style={{ minWidth: CARD_WIDTH_PX }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                    <div className="relative h-full rounded-2xl bg-white/90 backdrop-blur-md ring-1 ring-gray-200/70 shadow-lg px-7 py-7 md:px-9 md:py-9 hover:shadow-2xl hover:-translate-y-1 hover:cursor-pointer transition-all duration-300">

                    {/* avatar / initials */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-semibold">
                        {getInitials(t.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 truncate">{t.name}</p>
                        <p className="text-xs text-gray-600 truncate">{t.role}</p>
                        <p className="text-xs text-gray-500 truncate">{t.company}</p>
                      </div>
                    </div>

                      <blockquote className="text-sm md:text-[15px] leading-relaxed text-gray-700">
                      “{t.body}”
                    </blockquote>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* helper hint */}
          <p className="mt-4 text-center text-sm text-gray-500">Hover to pause • Scroll to explore</p>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
