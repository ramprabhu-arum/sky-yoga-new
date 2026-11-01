# Simplified Kundalini Yoga North America (SKY NA) — Project Memory & Running Notes

> **Document Status**: Live & Continuously Updated  
> **Repository**: [ramprabhu-arum/sky-yoga-new](https://github.com/ramprabhu-arum/sky-yoga-new)  
> **Current Phase**: Phase 1 — Static Site & Core Interactive Experience  
> **Design References**: apple.com, drjoedispenza.com, artofliving.org, kundaliniyoga.edu.in, vethathiri.edu.in

---

## 1. Guiding Principles & Design Philosophy
* **Crisp Content & Purpose-Driven User Journeys**: Clean visual hierarchy, uncluttered typography, clear calls-to-action (CTA) for beginners and seasoned seekers alike.
* **Modern Aesthetic with Spiritual Reverence**: Warm organic palette (e.g. terracotta `#D27D56`, warm alabaster `#F5F2ED`, soft sage accents), inspired by Apple's minimalist elegance and Dr. Joe Dispenza's scientifically backed presentation.
* **Inclusivity & Accessibility**: Science-backed secular presentation suitable for western, young, and multi-generational seekers aged 8 to 80.

---

## 2. Information Architecture (Phase 1)

```
Top Navigation:
[ SKY NA Logo ]   Home  |  Mission  |  Adults  |  Kids  |  Contact Us   [ 🔍 Search ]  [ Get Started CTA ]
```

### Tab 1: Home
* **Hero Carousel (5 Themes/Pillars)**:
  1. *Power of Exercise* (Simplified Physical Exercises)
  2. *Power of Meditation* (Kundalini awakening & Alpha brainwaves)
  3. *Power of Kayakalpa* (Anti-aging & vitality)
  4. *Power of Transformation* (Introspection & emotional mastery)
  5. *Power of Community Service* (World Peace through Individual Peace)
* **Introductory Section ("Simple Practices. Profound Transformation.")**:
  * Formal introduction to SKY NA & Yogiraj Vethathiri Maharishi.
  * System overview: Safe, teacher-guided awakening, gentle bio-magnetic stabilization.
  * Multimedia feature: Video placeholder for Murali Sir / Krish Murali Easwar.
  * Key selling points: Beginner to advanced pathways, online & in-person options, 8 to 80 age range.
* **Featured Programs (Adults)**:
  1. Foundation Course – Men & Women (Online) | $60 / person
  2. In-Center Foundation Course | Contact center for fee details
  3. Kaya Kalpa – Registration Open for next session | $35 / person
  4. Certificate Program (1 Year) | Reg June to Aug | $300 / yr
  5. Diploma Program (1 Year) | Reg June to Aug | $300 / yr
  6. Advance Diploma Program (2 Years) | Reg June to Aug | $300 / yr
  7. Custom Help CTA: "Not finding what you are looking for?" -> Connect via Contact Us / WhatsApp.
* **Featured Programs (Kids & Youth, Ages 5–18)**:
  1. Yoga Bears (Elementary | Online | $300 / yr | Registration Open)
  2. Mind-Rangers (Middle School | Online | $300 / yr | Registration Open)
  3. Young Masters (High School | Online | $300 / yr | Reg Closed May–Aug)
  4. SKY Yoga School (In-Person: Dallas / Bay Area | $300 / yr | Registration Closed)
* **Testimonials**:
  * Diverse cross-section: Men, women, youth, western/Caucasian practitioners, multi-generational families.
  * 10–12 written testimonials with portraits and transformative stories.
  * Video testimonials queued for Phase 2.

### Tab 2: Mission
* **Hero Banner**: Maharishi's portrait with quote: *"We're here to remember how unlimited we truly are."*
* **SKY NA Mission & Vision**:
  * Vision of inner peace as the foundation for outer peace.
  * Commitment to establishing the **U.S. Temple of Consciousness**.
* **3 Dimension Cards**:
  * *For Your Body*: Improve strength, flexibility, and overall physical health.
  * *For Your Mind*: Find calm, focus, and manage stress in daily life.
  * *For Your Community*: Connect, grow, and uplift the yoga community.
* **Multi-Tiered Impact**:
  * Impact on Individuals
  * Impact on Kids
  * Impact on Communities
  * Impact on the World (*"World Peace Through Individual Peace"*)
* **Giving**: Donate to SKY NA button (Integration with Zeffy platform).
* **Global Lineage & Roots**:
  * 60+ Years history, 2,500+ Centers worldwide, 1M+ practitioners, UN ECOSOC consultative status.
  * Aliyar Temple of Consciousness retreat & residential learning invitation.
* **Proof & Scientific Connections**:
  * Brainwave modulation (Beta 14–30 Hz to Alpha 8–13 Hz and Theta).
  * Video connections (Dr. Nassim Haramein & modern physics parallels, NA-based teacher vignettes).

### Tab 3: Adults
* **Learning Pipeline Architecture**:
  * *Level 1 (Seeker)*: Foundation Course (Center or Online).
  * *Level 2 (Practitioner)*: Certification Track (1-Yr Certificate, 1-Yr Diploma, 2-Yr Adv Diploma) OR Transformation Track (KK 1 -> KK 2 -> KK 3 -> 1st Saturday quarterly sadhana).
  * *Level 3 (Spiritual Service Volunteer)*: Divine Wisdom / Theory of Non-Duality & Teacher Training.
  * *Adhoc Online Workshops*.
* **Interactive Service Offering Details**:
  * Deep dive modal/cards for each offering with curriculum breakdown, prerequisites, and registration actions.

### Tab 4: Kids (SKY Yoga School)
* **Year-Round Yoga School**:
  * Elementary (Yoga Bears)
  * Middle School (Mind-Rangers)
  * High School (Young Masters)
  * In-Person Centers (Dallas & SF Bay Area studios)
* **Adhoc Pilot Programs**: Short-format introductory courses.
* **Holistic Youth Benefits**: Concentration, emotional self-regulation, reduced screen strain, moral values.

### Tab 5: Contact Us
* **Center Directory & Search**:
  * Art of Living / Sadguru style locator with search filter by City, State, or Region (USA & Canada).
  * Center details: Location address, coordinator names, phone, email, weekly schedule, offerings badges (In-person Foundation, Kids, Weekly Practice, Spiritual Guidance).
* **Interactive Inquiries & Support**:
  * Feedback & question form.
  * WhatsApp chat connection.
  * "Can't find a local center?" online registration pathway.

---

## 3. Stakeholder Roster & Task Ownership Matrix

| Stakeholder | Responsibility / Assigned Action Items | Status |
|:---|:---|:---|
| **Ram** | Web architecture, UI/UX implementation, image curation, prototypes | Active |
| **Jhansi** | Draft content from kundaliniyoga.edu.in & vethathiri.edu.in; Best practice research for support inquiry flow | In Progress |
| **Murali Sir** | Intro video generation (voice + visuals / Krish Murali Easwar backup); History of SKY NA text; Adults Foundation Pipeline guidance; Testimonial coordination (Jill & Patricia) | Pending |
| **Ravi Sir** | Mission impact write-ups; Zeffy donation links; Center GDL email strategy; Legal image/video consent agreements; SMART trainers coordination | Pending |
| **Meena & Puvi** | Kids program curriculum validation, SMART trainers coordination, testimonials | In Progress |

---

## 4. Technical Stack & Architecture Decisions

* **Framework**: React 19 + TypeScript + Vite 8
* **Styling**: Tailwind CSS v4 with custom warm earth-tone palette:
  * Primary: Terracotta `#D27D56` (hover `#B8653F`)
  * Surface: Warm Alabaster `#F5F2ED`, Card Cream `#FDFBF7`, Sage `#E8EDE7`
  * Text: Deep Charcoal `#2D2825`, Subdued `#6E6E73`
* **Icons**: `lucide-react`
* **State Management**: React state hooks with centralized modal orchestration in `App.tsx`
* **Build Tooling**: Node.js v22.15.1, Vite, TypeScript

---

## 5. Parking Lot & Future Phases

* [ ] **Phase 2**: Student Portal & Video Testimonials Archive
* [ ] **Phase 3**: Adults Learning Portal (course materials, tracked practices)
* [ ] **Phase 4**: Masters & Teachers Portal (initiation records, center management)
* [ ] **Research Section**: Dedicated repository of published peer-reviewed medical papers on SKY Yoga
* [ ] **Automations**: Zapier / NI10 WhatsApp integration for automated inquiry routing and student onboarding

---

## 6. Implementation Progress Log

* **Phase 1 Setup (Completed)**:
  * Cloned repository `sky-yoga-new`.
  * Configured npm environment for Node v22.15.1 (`npm install --legacy-peer-deps`).
  * Verified build pipeline (`npm run build`) and TypeScript type-checker (`npm run lint`).
  * Created `PROJECT_MEMORY.md` to persist requirements, decisions, and progress.

* **Responsive pass (2026-10-07)**:
  * Added Playwright audits (`npm run audit:responsive` / `npm run audit:modals`; needs `npm run dev` on :3000). They check 5 pages x 6 widths (320-1440) for overflow/clipped content, and 4 modals x 4 viewports (incl. 667x375 landscape).
  * Fixed: Kids hero forced 720px width on phones (`aspect-[21/9]` + `min-h`); Home hero slides sized to content and clipped text/CTAs on phones (slides now `w-full`); Adults course tabs hid behind an invisible horizontal scroll (now wrap); Contact center list nested-scroll only on `lg`; Registration and Search modals now cap to `dvh` and scroll; form fields 16px on phones to stop iOS focus-zoom; global `img/video/svg max-width` and `overflow-wrap` safeguards.
  * Decision: no horizontal-scroll tab strips on mobile (discoverability). Use wrapping.
  * Result: 0 failures across all audits.
