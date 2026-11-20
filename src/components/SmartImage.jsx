import { useState } from 'react';

export default function SmartImage({
  src, alt, className = '', imgClassName = '', priority = false, sizes,
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={'relative overflow-hidden bg-sand ' + className}>
      {!failed ? (
        <img
          src={src} alt={alt} sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchpriority={priority ? 'high' : undefined}
          onError={() => setFailed(true)}
          className={'h-full w-full object-cover ' + imgClassName}
        />
      ) : (
        <div
          role="img" aria-label={alt}
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sand via-ivory to-stone/60"
        >
          <span className="max-w-[80%] text-center font-display text-xs uppercase tracking-[0.34em] text-brown/60">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
