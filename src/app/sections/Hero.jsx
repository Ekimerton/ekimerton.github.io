import Script from "next/script";

export default function Hero() {
  return (
    <div className="flex justify-center items-center bg-zinc-100 dark:bg-zinc-950 p-4">
      {/* Include the Spline Viewer script using next/script */}
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.38/build/spline-viewer.js"
        strategy="lazyOnload"
      />

      <div className="bg-zinc-50 dark:bg-zinc-900 w-full max-w-6xl rounded-lg border-2 border-zinc-700/10">
        <div
          className="max-w-4xl mx-auto h-[540px] max-sm:h-[440px]"
          id="profile-section"
        >
          <spline-viewer
            hint
            loading-anim-type="spinner-small-dark"
            url="https://prod.spline.design/NsTX9b6WEMH6XkF1/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          ></spline-viewer>
        </div>
      </div>
    </div>
  );
}
