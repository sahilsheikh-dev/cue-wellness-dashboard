document.addEventListener("DOMContentLoaded", () => {
    // Create the background container
    const bg = document.createElement("div");
    bg.className = "bg-background";

    // Create sparkler container
    const sparklers = document.createElement("div");
    sparklers.className = "sparklers";

    // Generate sparks
    const sparkCount = 500;
    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement("div");
        spark.className = "spark";

        // Random position and animation delay
        spark.style.top = Math.random() * 100 + "%";
        spark.style.left = Math.random() * 100 + "%";
        spark.style.animationDelay = Math.random() * 2 + "s";

        sparklers.appendChild(spark);
    }

    // Append sparklers to background
    bg.appendChild(sparklers);

    // Append background to body
    document.body.appendChild(bg);
});
