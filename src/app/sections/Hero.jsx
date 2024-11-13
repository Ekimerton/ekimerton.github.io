import { useEffect, useState } from "react";
import Script from "next/script";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client
    setIsClient(true);
  }, []);

  return (
    <div className="bg-stone-200 dark:bg-stone-900 w-full">
      <div
        className="max-w-4xl mx-auto h-[80vh] max-sm:h-[600px]"
        id="profile-section"
      >
        {/* Include the Spline Viewer script */}
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.38/build/spline-viewer.js"
        />

        {/* Conditionally render the Spline Viewer on the client side */}
        {isClient && (
          <spline-viewer
            hint
            loading-anim-type="spinner-small-dark"
            url="https://prod.spline.design/NsTX9b6WEMH6XkF1/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          ></spline-viewer>
        )}
      </div>
    </div>
  );
}
