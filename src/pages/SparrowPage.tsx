export const SparrowPage = () => {
    console.log("attempting sparrow page");
    return (
        <div style={{ height: "100vh" }}>
            <iframe
                title="sparrow"
                src="https://www.youtube.com/embed/mnXQdMRi63E?autoplay=1&start=63&controls=0"
                frameBorder="0"
                allowFullScreen
                style={{
                    display: "block" /* force the iframe to display as block */,
                    height: "100%" /* assign 100% height */,
                    width: "100%",
                    border: "none"
                }}
            ></iframe>
        </div>
    );
};
