import Script from "next/script";

export default function Hero() {
  return (
    <div className="flex justify-center items-center bg-neutral-100 dark:bg-neutral-950 p-4 pt-3 sm:px-8">
      {/* Include the Spline Viewer script using next/script */}
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.38/build/spline-viewer.js"
        strategy="lazyOnload"
      />

      <div className="bg-neutral-50 dark:bg-neutral-900 w-full rounded-lg ">
        <div
          className="max-w-3xl mx-auto h-[540px] max-sm:h-[440px]"
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
