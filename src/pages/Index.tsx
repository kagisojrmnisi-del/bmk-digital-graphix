
import React, { useEffect, useState } from "react";

const WA = "27721221061";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const IMG = "https://i.postimg.cc/GhzmZRPd/IMG-20261101-WA5324.jpg";

const VERSES: [string, string][] = [
  ["Psalm 46:1", "God is our refuge and strength, a very present help in trouble."],
  ["Jeremiah 29:11", "For I know the plans I have for you, plans to prosper you and not to harm you."],
  ["Philippians 4:13", "I can do all things through Christ who strengthens me."],
  ["Proverbs 3:5-6", "Trust in the LORD with all your heart; he will make your paths straight."],
  ["Joshua 1:9", "Be strong and courageous; do not be afraid, for the LORD is with you."],
  ["Psalm 23:1", "The LORD is my shepherd; I shall not want."],
  ["Isaiah 40:31", "Those who wait on the LORD shall renew their strength."],
  ["Romans 8:28", "All things work together for good for those who love God."],
  ["Matthew 6:33", "Seek first the kingdom of God and his righteousness."],
  ["Psalm 118:24", "This is the day the LORD has made; let us rejoice and be glad in it."],
  ["Proverbs 16:3", "Commit your work to the LORD, and your plans will be established."],
  ["Colossians 3:23", "Whatever you do, work heartily, as for the Lord and not for men."],
  ["Psalm 37:4", "Delight yourself in the LORD, and he will give you the desires of your heart."],
  ["Deuteronomy 31:6", "Be strong and courageous. The LORD your God goes with you."],
  ["Isaiah 41:10", "Fear not, for I am with you; I will strengthen you and help you."],
  ["Psalm 27:1", "The LORD is my light and my salvation; whom shall I fear?"],
  ["Matthew 11:28", "Come to me, all who labor and are heavy laden, and I will give you rest."],
  ["John 3:16", "For God so loved the world that he gave his only Son."],
  ["Proverbs 22:1", "A good name is more desirable than great riches."],
  ["Psalm 121:1-2", "I lift up my eyes to the hills. My help comes from the LORD."],
  ["Hebrews 11:1", "Faith is the assurance of things hoped for, the conviction of things not seen."],
  ["2 Timothy 1:7", "God did not give us a spirit of fear, but of power, love and self-control."],
  ["Psalm 90:17", "Let the favour of the Lord our God be upon us; establish the work of our hands."],
  ["Proverbs 13:4", "The soul of the diligent shall be made rich."],
  ["Ecclesiastes 9:10", "Whatever your hand finds to do, do it with your might."],
  ["Galatians 6:9", "Let us not grow weary in doing good, for in due season we will reap."],
  ["Matthew 5:16", "Let your light shine before others, so that they may see your good works."],
  ["Psalm 34:8", "Taste and see that the LORD is good; blessed is the one who takes refuge in him."],
  ["1 Corinthians 10:31", "Whether you eat or drink, do all to the glory of God."],
  ["Isaiah 26:3", "You keep him in perfect peace whose mind is stayed on you."],
  ["Psalm 100:4", "Enter his gates with thanksgiving and his courts with praise."],
  ["Revelation 3:8", "I have set before you an open door, which no one is able to shut."],
  ["Proverbs 18:16", "A gift opens the way and brings the giver before the great."],
  ["Psalm 150:6", "Let everything that has breath praise the LORD."],
  ["Lamentations 3:22-23", "Great is your faithfulness; his mercies are new every morning."],
  ["Micah 6:8", "Do justice, love kindness, and walk humbly with your God."],
  ["John 14:6", "I am the way, the truth, and the life."],
  ["Psalm 139:14", "I praise you, for I am fearfully and wonderfully made."],
  ["Proverbs 3:9-10", "Honor the LORD with your wealth and with the firstfruits of all your produce."],
  ["Numbers 6:24-26", "The LORD bless you and keep you; the LORD make his face shine upon you."],
];

const SERVICES: [string, string][] = [
  ["Valentine Cards", "R40+"], ["Lobola Invitation", "R150+"], ["Junior Diploma", "R50+"],
  ["School Calendar", "R120+"], ["Social Media Posts", "R30+"], ["Posters & Flyers", "R40+"],
  ["Business Cards", "R150+"], ["Labels & Stickers", "R100+"], ["Magazine Design", "R500+"],
  ["Certificates", "R45+"], ["Banners", "R350+"], ["Logo Design", "R250+"],
  ["Calendars", "R80+"], ["Invitation Cards", "R80+"], ["Book Covers", "R300+"],
  ["School Prospectus", "R800+"], ["Letterheads", "R120+"], ["Invoices & Receipts", "R150+"],
  ["Photo Editing", "R30+"], ["Wedding Invitations", "R200+"], ["Funeral Programs", "R80+"],
  ["Photo Restoration", "R100+"], ["Get A Quote", "FREE"], ["App Development", "R2500+"],
];

const HOURS = "Mon–Fri 07h00–17h00 · Sat 07h30–15h00";
const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

function gabrielReply(q: string): string {
  const t = q.toLowerCase();
  if (/verse|bible|scripture|god|psalm|pray|word/.test(t)) {
    const [ref, text] = pick(VERSES);
    return `${ref} — "${text}"`;
  }
  if (/hour|open|close|time/.test(t)) return `We are open ${HOURS}.`;
  if (/contact|call|phone|whatsapp|email|address|where|location/.test(t))
    return "WhatsApp 0721221061 · Calls 0793751170 / 0660687463 / 0796792644 · bmkdigitalgraphix1@gmail.com · Mkhuhlu, free delivery.";
  const match = SERVICES.find(([n]) =>
    n.toLowerCase().split(/\s+|&/).some((w) => w.length > 3 && t.includes(w))
  );
  if (match) return `${match[0]}: ${match[1]}`;
  if (/price|cost|how much|service|rand|quote|\br\d/.test(t))
    return SERVICES.map(([n, p], i) => `${i + 1}. ${n} — ${p}`).join("\n");
  return "Ask me about our 24 services and prices, a Bible verse, our contact details or opening hours.";
}

const GOLD_GRAD = "linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #FFD700 100%)";
const card: React.CSSProperties = {
  background: "#0a0a0a",
  border: "1px solid rgba(212,175,55,0.45)",
  borderRadius: 16,
  padding: 18,
  boxShadow: "0 0 18px rgba(255,215,0,0.12)",
};
const glow: React.CSSProperties = {
  color: "#FFD700",
  textShadow: "0 0 8px rgba(255,215,0,0.8), 0 0 22px rgba(212,175,55,0.5)",
};
const btn: React.CSSProperties = {
  flex: 1,
  padding: "12px 10px",
  borderRadius: 12,
  border: "1px solid #D4AF37",
  background: GOLD_GRAD,
  color: "#000",
  fontWeight: 700,
  textAlign: "center",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: 14,
};

const Logo = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-label="BMK Diamond B logo">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FFD700" />
        <stop offset="1" stopColor="#D4AF37" />
      </linearGradient>
    </defs>
    <polygon points="50,4 96,50 50,96 4,50" fill="none" stroke="url(#g)" strokeWidth="4" />
    <polygon points="50,14 86,50 50,86 14,50" fill="#000" stroke="#D4AF37" strokeWidth="1.5" />
    <text x="50" y="66" textAnchor="middle" fontSize="44" fontWeight="800" fontFamily="Georgia, serif" fill="url(#g)">B</text>
  </svg>
);

type Tab = "home" | "services" | "orders" | "contact" | "profile";
type Msg = { from: "user" | "ai"; text: string };

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState<Tab>("home");
  const [verseIdx, setVerseIdx] = useState(0);
  const [selected, setSelected] = useState<[string, string] | null>(null);
  const [aiOpen, setAiOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("gabriel_chat_log") || "null");
      if (Array.isArray(saved) && saved.length) return saved;
    } catch {}
    return [{ from: "ai", text: "Hi, I am Gabriel. Ask me about prices, a Bible verse, contact details or hours." }];
  });

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    try { localStorage.setItem("gabriel_chat_log", JSON.stringify(msgs)); } catch {}
  }, [msgs]);

  const downloadChat = () => {
    const stamp = new Date().toLocaleString("en-ZA");
    const text = [`Gabriel AI chat recording - ${stamp}`, "", ...msgs.map((m) => `[${m.from === "user" ? "You" : "Gabriel"}] ${m.text}`)].join("\n");
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `gabriel-chat-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearChat = () => {
    setMsgs([{ from: "ai", text: "Chat cleared. Ask me about prices, a Bible verse, contact details or hours." }]);
  };

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setMsgs((m) => [...m, { from: "user", text: q }, { from: "ai", text: gabrielReply(q) }]);
    setInput("");
  };

  if (!loaded) {
    return (
      <div style={{ minHeight: "100vh", background: "#000", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22 }}>
        <style>{`@keyframes pulse{0%,100%{filter:drop-shadow(0 0 10px #FFD700)}50%{filter:drop-shadow(0 0 30px #FFD700)}}@keyframes bar{from{width:0}to{width:100%}}`}</style>
        <div style={{ width: 150, height: 150, animation: "pulse 1.6s ease-in-out infinite", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Logo size={150} />
        </div>
        <div style={{ ...glow, fontWeight: 700, letterSpacing: 2, textAlign: "center", fontSize: 16, padding: "0 20px" }}>
          BMK DIGITAL GRAPHIX HOLDINGS
        </div>
        <div style={{ width: 200, height: 4, background: "#1a1a1a", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ height: "100%", background: GOLD_GRAD, animation: "bar 2.5s linear forwards" }} />
        </div>
      </div>
    );
  }

  const [vRef, vText] = VERSES[verseIdx];

  const navItems: { id: Tab; label: string; icon: string }[] = [
    { id: "home", label: "Home", icon: "⌂" },
    { id: "services", label: "Services", icon: "✦" },
    { id: "orders", label: "Orders", icon: "☰" },
    { id: "contact", label: "Contact", icon: "✆" },
    { id: "profile", label: "Profile", icon: "◉" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#F5F0E1", fontFamily: "system-ui, -apple-system, sans-serif", WebkitTapHighlightColor: "transparent" }}>
      <style>{`*{-webkit-tap-highlight-color:transparent}@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}.fade{animation:fadeUp .4s ease}`}</style>

      <div style={{ maxWidth: 480, margin: "0 auto", paddingBottom: 100 }}>
        {/* Sticky header */}
        <header style={{ position: "sticky", top: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(212,175,55,0.4)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Logo size={36} />
            <div style={{ ...glow, fontSize: 12, fontWeight: 700, lineHeight: 1.2 }}>BMK DIGITAL<br />GRAPHIX</div>
          </div>
          <button onClick={() => setAiOpen(true)} style={{ ...btn, flex: "none", padding: "8px 12px", fontSize: 13 }}>Gabriel AI</button>
        </header>

        <main className="fade" key={tab} style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
          {tab === "home" && (
            <>
              <section style={{ ...card, textAlign: "center" }}>
                <div style={{ ...glow, fontSize: 22, fontWeight: 800, lineHeight: 1.3 }}>Welcome to BMK DIGITAL GRAPHIX</div>
                <p style={{ color: "#bfb58a", fontSize: 14, margin: "8px 0 0" }}>Premium design, print and app development · Mkhuhlu, Mpumalanga</p>
              </section>

              <section onClick={() => setVerseIdx((i) => (i + 1) % VERSES.length)} style={{ ...card, cursor: "pointer", minHeight: 150 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#D4AF37", marginBottom: 8 }}>
                  <span>Verse of the moment</span>
                  <span>{verseIdx + 1}/40</span>
                </div>
                <div style={{ ...glow, fontSize: 18, fontWeight: 700 }}>{vRef}</div>
                <p style={{ fontSize: 15, lineHeight: 1.5, margin: "8px 0 0", color: "#F5F0E1" }}>"{vText}"</p>
                <div style={{ fontSize: 11, color: "#8a7f55", marginTop: 10 }}>Tap to see the next verse</div>
              </section>

              <div style={{ border: "2px solid #D4AF37", borderRadius: 16, overflow: "hidden", boxShadow: "0 0 24px rgba(255,215,0,0.25)" }}>
                <img src={IMG} alt="BMK Holdings building" style={{ width: "100%", display: "block", aspectRatio: "4 / 3", objectFit: "cover" }} />
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button onClick={() => setTab("services")} style={btn}>View All 24 Services</button>
                <button onClick={() => setTab("contact")} style={{ ...btn, background: "transparent", color: "#FFD700" }}>Contact Us</button>
              </div>
            </>
          )}

          {tab === "services" && (
            <>
              <h2 style={{ ...glow, margin: 0, fontSize: 22 }}>Our 24 Services</h2>
              <p style={{ color: "#bfb58a", fontSize: 13, margin: "-8px 0 0" }}>Tap a service to order via WhatsApp.</p>
              {SERVICES.map(([name, price], i) => (
                <button key={name} onClick={() => setSelected([name, price])} style={{ ...card, display: "flex", alignItems: "center", gap: 12, textAlign: "left", color: "#F5F0E1", cursor: "pointer", width: "100%", font: "inherit" }}>
                  <span style={{ width: 30, height: 30, borderRadius: "50%", border: "1px solid #D4AF37", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#FFD700", flex: "none" }}>{i + 1}</span>
                  <span style={{ flex: 1, fontWeight: 600 }}>{name}</span>
                  <span style={{ ...glow, fontWeight: 800 }}>{price}</span>
                </button>
              ))}
            </>
          )}

          {tab === "orders" && (
            <section style={{ ...card, textAlign: "center", padding: 30 }}>
              <div style={{ ...glow, fontSize: 20, fontWeight: 700 }}>No orders yet</div>
              <p style={{ color: "#bfb58a", fontSize: 14 }}>Your orders will appear here. Order any service and we will confirm on WhatsApp.</p>
              <button onClick={() => setTab("services")} style={btn}>Browse Services</button>
            </section>
          )}

          {tab === "contact" && (
            <>
              <h2 style={{ ...glow, margin: 0, fontSize: 22 }}>Contact Us</h2>
              <section style={card}>
                <Row label="WhatsApp" value="0721221061" />
                <Row label="Calls" value="0793751170 · 0660687463 · 0796792644" />
                <Row label="Email" value="bmkdigitalgraphix1@gmail.com" />
                <Row label="Location" value="Mkhuhlu, Mpumalanga · Free delivery" />
                <Row label="Hours" value={HOURS} />
              </section>
              <div style={{ display: "flex", gap: 12 }}>
                <a href={waLink("Hello BMK Digital Graphix")} target="_blank" rel="noreferrer" style={btn}>WhatsApp</a>
                <a href="tel:+27793751170" style={{ ...btn, background: "transparent", color: "#FFD700" }}>Call</a>
              </div>
            </>
          )}

          {tab === "profile" && (
            <section style={{ ...card, textAlign: "center", padding: 30 }}>
              <div style={{ margin: "0 auto 12px", width: 72, height: 72 }}><Logo size={72} /></div>
              <div style={{ ...glow, fontSize: 20, fontWeight: 700 }}>Guest Client</div>
              <p style={{ color: "#bfb58a", fontSize: 14 }}>Sign-in and saved orders are coming soon.</p>
            </section>
          )}
        </main>
      </div>

      {/* Floating WhatsApp */}
      <a href={waLink("Hello BMK Digital Graphix")} target="_blank" rel="noreferrer" aria-label="WhatsApp" style={{ position: "fixed", right: 16, bottom: 86, zIndex: 30, width: 54, height: 54, borderRadius: "50%", background: GOLD_GRAD, color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, textDecoration: "none", boxShadow: "0 0 20px rgba(255,215,0,0.6)" }}>WA</a>

      {/* Bottom nav */}
      <nav style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 25, background: "#000", borderTop: "1px solid rgba(212,175,55,0.5)", boxShadow: "0 -4px 20px rgba(255,215,0,0.1)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", display: "flex", justifyContent: "space-around", padding: "8px 0 env(safe-area-inset-bottom, 8px)" }}>
          {navItems.map((n) => (
            <button key={n.id} onClick={() => setTab(n.id)} style={{ background: "none", border: "none", color: tab === n.id ? "#FFD700" : "#7d7450", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, fontSize: 11, cursor: "pointer", padding: 4, ...(tab === n.id ? { textShadow: "0 0 10px rgba(255,215,0,0.9)" } : {}) }}>
              <span style={{ fontSize: 18 }}>{n.icon}</span>
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Service modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", zIndex: 40, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          <div onClick={(e) => e.stopPropagation()} className="fade" style={{ ...card, width: "100%", maxWidth: 360, textAlign: "center" }}>
            <div style={{ ...glow, fontSize: 20, fontWeight: 800 }}>{selected[0]}</div>
            <div style={{ fontSize: 26, fontWeight: 800, margin: "8px 0 16px", color: "#F5F0E1" }}>{selected[1]}</div>
            <a href={waLink(`Hello BMK, I would like to order: ${selected[0]} (${selected[1]})`)} target="_blank" rel="noreferrer" style={{ ...btn, display: "block" }}>Order via WhatsApp</a>
            <button onClick={() => setSelected(null)} style={{ marginTop: 12, background: "none", border: "none", color: "#D4AF37", cursor: "pointer", fontSize: 14 }}>Close</button>
          </div>
        </div>
      )}

      {/* Gabriel AI panel */}
      {aiOpen && (
        <div onClick={() => setAiOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 50, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ ...card, width: "100%", maxWidth: 480, borderRadius: "20px 20px 0 0", height: "70vh", display: "flex", flexDirection: "column", padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span style={{ ...glow, fontWeight: 800 }}>Gabriel AI</span>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <button onClick={downloadChat} style={{ background: "none", border: "none", color: "#FFD700", fontSize: 13, cursor: "pointer" }}>Save</button>
                <button onClick={clearChat} style={{ background: "none", border: "none", color: "#D4AF37", fontSize: 13, cursor: "pointer" }}>Clear</button>
                <button onClick={() => setAiOpen(false)} style={{ background: "none", border: "none", color: "#D4AF37", fontSize: 14, cursor: "pointer" }}>Close</button>
              </div>
            </div>
            <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
              {msgs.map((m, i) => (
                <div key={i} style={{ alignSelf: m.from === "user" ? "flex-end" : "flex-start", maxWidth: "85%", whiteSpace: "pre-wrap", padding: "10px 12px", borderRadius: 12, fontSize: 14, lineHeight: 1.4, background: m.from === "user" ? "rgba(212,175,55,0.2)" : "#141414", border: "1px solid rgba(212,175,55,0.3)" }}>
                  {m.text}
                </div>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); send(); }} style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask prices, verses, contact…" style={{ flex: 1, background: "#000", color: "#F5F0E1", border: "1px solid #D4AF37", borderRadius: 12, padding: "10px 12px", fontSize: 14, outline: "none" }} />
              <button type="submit" style={{ ...btn, flex: "none", padding: "10px 16px" }}>Send</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div style={{ padding: "10px 0", borderBottom: "1px solid rgba(212,175,55,0.15)" }}>
    <div style={{ fontSize: 11, color: "#D4AF37", textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
    <div style={{ fontSize: 15, marginTop: 2 }}>{value}</div>
  </div>
);

export default Index;
