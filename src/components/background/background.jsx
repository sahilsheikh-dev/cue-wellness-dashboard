import React, { useMemo } from "react";
import "../../styles/background/background.css";

const Background = ({ children }) => {
  const sparks = useMemo(() => {
    const sparkCount = 500;
    return Array.from({ length: sparkCount }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));
  }, []);

  return (
    <div className="bg-root">
      <div className="bg-background">
        <div className="sparklers">
          {sparks.map((s) => (
            <div
              key={s.id}
              className="spark"
              style={{ top: s.top, left: s.left, animationDelay: s.delay }}
            />
          ))}
        </div>
      </div>

      {/* Content sits above */}
      <div className="content">{children}</div>
    </div>
  );
};

export default Background;
