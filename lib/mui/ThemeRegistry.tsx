'use client';

import * as React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';

function createEmotionCache() {
  const cache = createCache({ key: 'css', prepend: true });
  cache.compat = true;
  return cache;
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [cache] = React.useState(createEmotionCache);

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      // We must inline the critical CSS from Emotion's cache
      dangerouslySetInnerHTML={{ __html: Object.values(cache.inserted).join(' ') }}
    />
  ));

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
