import Script from "next/script";

export default function Hero() {
  return (
    <>
      {/* Include the Spline Viewer script using next/script */}
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.38/build/spline-viewer.js"
        strategy="beforeInteractive"
      />

      <div className="bg-stone-200 dark:bg-stone-900 w-full">
        <div
          className="max-w-4xl mx-auto h-[80vh] max-sm:h-[600px]"
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
    </>
  );
}
