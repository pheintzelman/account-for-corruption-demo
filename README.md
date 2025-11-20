# Account for Corruption

**Version 0.3.0 – November 13, 2025**  
[View full changelog →](/frontend/src/referenceData/changelog/en.json)

Account for Corruption is a **nonpartisan platform** for voter and leader pledges against corruption.  
It unifies public commitments, tracks support, and creates transparency — helping citizens and influencers push for accountable government.

---

## Why the Value is High

### 🧾 Direct Accountability

- Politicians signing pledges creates a **public, trackable record** of ethical commitments.
- Goes beyond tracking votes or campaign promises — holds politicians personally accountable in real time.

### 🗳️ Voter Empowerment

- Constituents can pledge **not to vote for unethical politicians**, giving voters a direct, measurable influence.
- **District-level aggregation** makes pressure tangible and actionable.

### ⚖️ Non-Partisan Appeal

- Framing around **ethics, transparency, and public interest** avoids ideological barriers.
- Issues like **Epstein files, corporate influence, and quid pro quo** resonate across party lines.

### ⚙️ Scalable and Lean

- The MVP can launch with **self-service pledges**, pending verification, and basic dashboards.
- Volunteers can manage manual review and constituent outreach at first.

### 📢 Media & Public Engagement

- Publicized inconsistencies, badges, and district maps are **highly shareable**, increasing attention without paid ads.

---

## 🧭 Demo Roadmap Overview

### Current Focus

> **Next up (v0.3.0):** Add conditions to pledges and voter details.  
> Weekly updates are continuing through early November 2025.

---

## 🧱 Demo 1.0 Roadmap

<details>
<summary><strong>Demo 0.1.0</strong> – October 8, 2025</summary>

### Major

- [x] Create a user in IndexedDB
- [x] Make pledge page and show it for the user type after user creation
- [x] Save pledge
- [x] Add user details for influencers
- [x] Display pledges on the home page
- [x] Add user details for politicians
- [x] Create login page
- [x] Create pledge manager page
- [x] Create profile page

### Minor

- [x] Refactor userRole to exclude user
- [x] Make other input components
- [x] Single DB
- [x] Handle cookie expiration
- [x] Better loading across pages
- [x] Fix start/you auto route
- [x] Persist user in local storage during create flow
- [x] Thank-you for signing page

### Bugs

- [x] Fix count bug on thank-you page

</details>

---

<details>
<summary><strong>Demo 0.1.1</strong> – October 19, 2025</summary>

### Minor

- [x] Add politicians seed data
- [x] Demo page with DB seeding

</details>

---

<details>
<summary><strong>Demo 0.2.0</strong> – October 29, 2025</summary>

### Major

- [x] Mission (page)

### Bugs

- [x] Fix signed sorting bug on pledge feed
- [x] Order signed pledges by signed date
- [x] Fix long titles
- [x] Fix feed colors
- [x] Fix pledge page menu (when not in starting flow)
- [x] Pledge edit language

</details>

---

<details open>
<summary><strong>Demo 0.3.0</strong> – November 13, 2025</summary>

### Demo 0.3.0

#### Major

- [x] Add condition to signing

#### Minor

- [x] Start a changelog and better versioning
- [x] Feature flag system (UI only),
- [x] Clean up console log
- [x] Make a password input component

#### Bugs

- [x] Fix pledge generation to not skip pledges

</details>

---

---

<details>
<summary><strong>Demo 0.3.1</strong> – November 19, 2025</summary>

### Demo 0.3.1

#### Minor

- [x] Added readme to demo repo

</details>

---

## 🔮 Upcoming Roadmap

---

### Demo 0.4.0

#### Major

- [ ] Add voter details
- [ ] Add fake inbox to support email flows

#### Minor

---

### Demo 1.1 and Beyond

- [ ] Create account page (editing details)
- [ ] Verification flow for politicians (placeholder)
- [ ] Stats
- [ ] Verification links for email
- [ ] Add Spanish language support
- [ ] Make responsive

---

## 🧱 After Demo (Future Ideas)

- [ ] Image avatars
- [ ] District lookup

---

## 🧰 TODO

1. [ ] Make duplicate user creation fail
2. [ ] Save draft on check
3. [ ] Clean local storage on logout
4. [ ] Add program for influencers
5. [ ] Commit button on “Our Mission” page
6. [ ] Pledge feed filters and paging
7. [ ] Profile cleanup
8. [ ] About page (group)
9. [ ] Add README to the demo
10. [ ] Better instructions in account creataion
11. [ ] Create/draft new pledge
12. [ ] Refactor political position design
13. [ ] save audit records for user details... on signing
14. [ ] refactor saveSignedPledge too much logic in db layer
15. [ ] Add user details for government workers
16. [ ] demo auto login feature

---

## 🐞 Bugs

1. [ ] Redirect to login when token is expired (not home)

---

### 💡 Notes

- Weekly demo updates are targeting **Fridays**.
- Versioning and changelog data are now stored in:  
  `/frontend/src/referenceData/changelog/en.json`
