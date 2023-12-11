"use client";

export const popupCenter = (url: string, title: string, callback: () => void = () => {}) => {
  const dualScreenLeft = window.screenLeft ?? window.screenX;
  const dualScreenTop = window.screenTop ?? window.screenY;

  const width =
    window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;

  const height =
    window.innerHeight ??
    document.documentElement.clientHeight ??
    screen.height;

  const systemZoom = width / window.screen.availWidth;

  const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
  const top = (height - 550) / 2 / systemZoom + dualScreenTop;

  const newWindow = window.open(
    url,
    title,
    `width=${500 / systemZoom},height=${550 / systemZoom
    },top=${top},left=${left}`
  );
  newWindow?.focus();

  window.addEventListener("message", (event: MessageEvent) => {
    if (event.origin === process.env.NEXT_PUBLIC_FRONTEND_URL as string) {
      const { event: eventName } = event.data;
      if (eventName === "close") {
        console.log("close event is occurred!");
        callback();
      }
    }
  });
};