document.getElementById('startBtn').addEventListener('click', async function() {
    const btn = this;
    const status = document.getElementById('status');
    
    btn.disabled = true;
    status.textContent = "Starting bots...";
    
    try {
        const fnlb = new FNLB();
        
        // Your exposed API token (not recommended for production)
        await fnlb.start({
            apiToken: 'DGfCBefvjOU-UORpSFBh8gbArVEGkKK5xb-BB7kZk8NfEFj6hiCf8v2Nefu6',
            numberOfShards: 2,
            botsPerShard: 10
        });
        
        status.textContent = "Bots are running! 🚀";
    } catch (error) {
        console.error("Bot startup failed:", error);
        status.textContent = "Error: " + error.message;
        btn.disabled = false;
    }
});