---
title: 'Elemental Fracture - Marla Server 2.0 Update'
description: 'Quality of life and technical improvements for Marla in Discord.'
authors: [doobs]
tags: [qol, discord]
---

Hey everyone, Doobs here!  
Man, what a ride this has been. Before we get into the meat of it, let me first say: I know, I know. I said six hours. Turns out, when you rip out the plumbing and start replacing it, sometimes you find a few extra leaks along the way. But after what felt like an endless cycle of fixing one thing only to break another, I’m happy to report that everything is up and running better than ever. This update is a **big deal** - in fact, it's so big, I'm past the Nitro limit. We’ve overhauled the infrastructure, tightened up security, improved server efficiency, and added some much-needed automation. Oh, and I threw in a few quality-of-life back-end improvements to make my life a little easier. 

<!-- truncate -->

## **New Features & Enhancements**  
### **1. Say Hello to Marla 2.0**  
Marla has been fully integrated into the system! She’s still a work in progress (aren’t we all?), but I think it's time to officially call this version 2.0 complete! If you’ve got ideas for new features or tweaks, let me know. She’s here to make life easier, and I want to keep improving her based on what **you** need.  
### **2. Sentinel: Online.**  
This one’s for our staff but also the foundation for what's to come (no spoilers, sorry, you'll just need to keep reading!) The long-awaited **Sentinel System** is now live and is officially the backbone of how we track players and manage server access. This system brings a much-needed level of structure and oversight, making things fairer and more transparent for everyone.  
Here’s what it does:  
- **Player Activity Logging** – Tracks first connections and maintains a history of logins.  
- **Access Control** – Gives admins a structured way to manage permissions and restrictions.  
- **Secure Action Logging** – Ensures all interactions are recorded, keeping things accountable and above board.  
For the privacy-conscious among you, here’s exactly what is being collected:  
- **Username** (from when you first started Spellbreak)  
- **IP Address**  
- **Initial Connection Timestamp**  
That’s it. No personal messages, no secret tracking of your other browsing habits (I don’t care how many hours you spend on YouTube watching conspiracy videos). Now, for the second question: *“Is this data at risk?”* The honest answer? **Yes**. Every online interaction carries some level of risk, whether it’s a game, your bank, or social media. The only truly safe data is data that stored offline or doesn’t exist. That said, I’ve put safeguards in place to minimize exposure: 
- **Encryption** – All collected data is encrypted.  
- **Limited Access** – Only accounts with **elevated privileges** (and an RSA token) can access it.  
- **Root/Sudo Protections** – Decrypting anything requires full root/sudo privileges, meaning no one is casually snooping around.  
One minor annoyance, though: if you change your username, you might run into connection issues. We can manually adjust this in Sentinel, but to avoid headaches, I’d recommend sticking with a consistent name. I know that cramps the style of you serial name-changers, and for that, I apologize. But hey, at least your identity crisis is secure!
### **3. No Windows, No Creditcard, No Bullsh--**  
This one is **huge**. After what felt like an eternity of dealing with Windows’ nonsense, **we have officially migrated everything to Linux** using Wine, and configured to operate within a set of Docker containers. No more Windows Virtual Machines slowing us down. No more random crashes because Windows decided it was time for an update **right now**, or Pink Marla decided she didn't like something!  
So, anyway, server bla-bla, whatever - what does this actually mean for you?  
- **No More Windows Overhead** – Windows VMs used to hog system resources, causing performance issues. That’s a thing of the past.  
- **Better Performance** – Linux is significantly more efficient, meaning lower system strain and smoother gameplay.  
- **Greater Stability** – Fewer crashes, better uptime, and an overall smoother experience.  
- **Faster Updates & Maintenance** – Without Windows getting in the way, I can push updates, fixes, and optimizations more quickly.  
But here’s where it gets really exciting. This shift means we now have **way** more flexibility when it comes to server deployment. We can:  
- Spin up **Public Test Beta (PTB) servers** without shutting anything else down.  
- Deploy **servers from any past balance patch cycle**, including **vanilla Spellbreak**.  
- Automate a ton of maintenance tasks, reducing manual intervention.  
- Offer this setup to **international community partners** on request.
This isn’t just a win for Elemental Fracture. It’s a win for the **entire** Spellbreak community.  
### **4. Improved Match Tracking System**  
The days of waiting for the server list to scroll endlessly just to see who was online are over.  
The **Match Tracker Mod** is back, fully reintegrated, and better than ever. Now, match data is updated in real-time on Discord. The system shows five match states:  
- **Starting Up** – The game server is loading.  
- **Waiting for Players** – The server is open and accepting connections.  
- **Waiting to Start** – The match countdown is underway.  
- **Started** – The game is in progress (sorry, no late joiners).  
- **Ended** – The match is over (or something broke).  
This makes it much easier to see who’s playing in real-time but some other cool things too. Like, I’d also love some input on this: should Marla ping certain roles when enough people are online? If ten or more players are in Solos, should she notify `@Battle Royale` to help fill up the match? There’s a lot of potential with this, so let me know what you think.  
## **Looking Ahead**  
The next big project? **The Launcher.** Right now, getting set up can be a bit of a pain, especially if you’re not super tech-savvy. I want to make the experience as simple and seamless as possible. And while I have a *ton* of ideas, I can’t do this all on my own. If you’re interested in helping out, reach out.  
Here’s what’s on the roadmap:
1. **No More Manual IP Entry.** I’ve been looking into mapping network packets to specific game modes, so you’d just pick a mode and automatically connect—no need to type in an IP.
2. **Authentication & Tracking System.** I want to build a system that ties player progress or even ELO to your Sentinel profile. This would open the door for more competitive gameplay, matchmaking improvements, and even tournament events.  

If you run into issues, have feedback, or just want to tell me how much you love (or hate) the changes, or if you think I’ve yapped too much, let me know. Thank you for always being the greatest part of Elemental Fracture, and as always, I'm excited for what’s next!

<!-- truncate -->

