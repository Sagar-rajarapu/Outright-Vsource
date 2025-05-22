import React, { useState, useEffect, useRef } from 'react';
import AnimateOnScroll from '../AnimateOnScroll';

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      id: 1,
      value: 100000,
      suffix: '+',
      label: 'Students Placed',
      icon: 'https://cdn-icons-gif.flaticon.com/6454/6454106.gif',
    },
    {
      id: 2,
      value: 200,
      suffix: '+',
      label: 'University Partners',
      icon: 'https://cdn-icons-gif.flaticon.com/15370/15370761.gif',
    },
    {
      id: 3,
      value: 15,
      suffix: '+',
      label: 'Countries',
      icon: 'https://cdn-icons-gif.flaticon.com/15747/15747340.gif',
    },
    {
      id: 4,
      value: 98,
      suffix: '%',
      label: 'Success Rate',
      icon: 'https://cdn-icons-gif.flaticon.com/16104/16104273.gif',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const useCounter = (end: number, start = 0, duration = 2000) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }, [end, start, duration, isVisible]);

    return count;
  };

  return (
    <section ref={sectionRef} className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const counts = stats.map(s => useCounter(s.value));
            const count = counts[index];

            return (
              <AnimateOnScroll key={stat.id} delay={stat.id * 100}>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-16 h-16 md:w-20 md:h-20 pointer-events-none"
                    />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {count}
                    {stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
