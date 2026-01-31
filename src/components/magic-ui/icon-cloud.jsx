"use client";

import { useEffect, useMemo, useState, memo, useCallback } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  });
};

const IconCloud = memo(function IconCloud({
  iconSlugs = [],
  imageArray,
}) {
  const [data, setData] = useState(null);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize slugs to prevent unnecessary refetches
  const slugsKey = useMemo(() => iconSlugs.join(","), [iconSlugs]);

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [slugsKey]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    const theme = mounted ? resolvedTheme : "light";

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light")
    );
  }, [data, resolvedTheme, mounted]);

  if (!mounted) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Cloud {...cloudProps}>
      <>
        {renderedIcons}
        {imageArray &&
          imageArray.length > 0 &&
          imageArray.map((image, index) => (
            <a key={index} href="#" onClick={(e) => e.preventDefault()}>
              <img height="42" width="42" alt="Icon" src={image} loading="lazy" />
            </a>
          ))}
      </>
    </Cloud>
  );
});

export default IconCloud;
