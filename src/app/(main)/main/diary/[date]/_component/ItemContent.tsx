"use client";

import React, { useState, useRef, useEffect } from "react";

export default function ItemContent({ content }: { content: string }) {
  const [isRequireExpand, setIsRequireExpand] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayContent, setDisplayContent] = useState(content);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && !isExpanded) {
      let currentContent = content;
      contentRef.current.innerText = currentContent;

      while (
        contentRef.current.scrollHeight > 85 &&
        currentContent.length > 0
      ) {
        setIsRequireExpand(true);
        currentContent = currentContent.slice(0, -1);
        contentRef.current.innerText = `${currentContent}...`;
      }
      setDisplayContent(contentRef.current.innerText);
    } else {
      setDisplayContent(content);
    }
  }, [content, isExpanded]);

  return (
    <div>
      <div
        ref={contentRef}
        className="text-body3-rg text-textDefault"
        style={{ maxHeight: isExpanded ? "none" : "85px", overflow: "hidden" }}
      >
        {displayContent}
      </div>
      {isRequireExpand && (
        <button
          className="text-body3-rg text-textSecondary"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "줄이기" : "더보기"}
        </button>
      )}
    </div>
  );
}
