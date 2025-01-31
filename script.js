document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.getElementById("manifesto-text");
    const manifestoText = `
> This is my manifesto.  
> My thoughts.  
> My rant.  
> My rage.  

> The internet sucks.  

> Yes, I use Discord, but I think people should return to forums, IRC, and decentralised communities instead of being trapped in a handful of corporate platforms. As I got older, I realised that the modern internet isn’t what it used to be... everything is centralised... controlled.  

> In school Instagram, Snapchat, and TikTok were everywhere. Almost everyone used them. People even questioned me for not having an Instagram, saying things like, “Why don’t you have it? You’re so old for not using it.” But those platforms never meant anything to me. They felt more like storefronts for curated lives than places for real connection or creativity. They always say the grass is greener on social media anyway.  

> Some might point out that I still use Facebook, Reddit and Discord. Fair enough. But those were decisions I made long before I truly understood the downsides of mainstream social media. Now I use them more out of necessity than choice. Discord is where most of my friends and communities are, making it hard to leave. Facebook? A compromise for family. If I could, I’d leave both behind entirely. And Reddit? There is no one else to hand my communities over to that I can trust.  

> The biggest problem with these platforms isn’t just control, it’s preservation. A Discord server shutting down can erase years of discussions and knowledge. A social media algorithm tweak can make entire communities invisible overnight. Even if you spend years building an audience, you don’t actually own it; you’re at the mercy of whatever changes the company decides to make.  

> That’s why I try to encourage for personal websites and decentralised communities. Platforms like Neocities, GitHub Pages, and old-school forums give people true ownership over their content to some extent. They allow for creativity beyond what’s possible in a Twitter post or a Discord message. They also resist the fast-paced, throwaway nature of modern social media where something you post today is irrelevant by next week.  

> I know not everyone is willing to move away from these platforms entirely. Convenience is real, and change is hard. But at the very least, we should encourage people to archive their work outside of these walled gardens. A blog post can be read years later. A Discord message vanishes into the void.  

> I don’t expect the internet to go back to what it was. But we can carve out small spaces that still hold onto that spirit: places where creativity, discussion, and connection aren’t dictated by algorithms or corporate interests.  

> The old internet isn’t dead. We just have to build it again.  
`;

    let index = 0;

    function typeWriter() {
        if (index < manifestoText.length) {
            textContainer.innerHTML += manifestoText.charAt(index);
            index++;
            setTimeout(typeWriter, Math.random() * 100 + 50); // Simulate real typing
        }
    }

    setTimeout(typeWriter, 500);
});
