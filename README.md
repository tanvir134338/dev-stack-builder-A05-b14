 ⚡ Dev Stack

 Build your ideal development stack — explore, compare, and choose the technologies that fit your next project.

Dev Stack is a responsive React application that helps developers explore modern development technologies and create their own personalized technology stack.

---

 🚀 Features

- 🔍 **Explore Technologies** — Browse frontend, backend, database, language, styling, DevOps, and tools.
- 🧩 **Build Your Stack** — Add technologies to your personal development stack.
- 🗑️ **Manage Your Stack** — Remove individual technologies or clear the entire stack.
- ⭐ **Technology Details** — View category, difficulty level, rating, badge, and description.
- 📱 **Fully Responsive** — Works smoothly across desktop, tablet, and mobile devices.
- 🔔 **Toast Notifications** — Get instant feedback when adding or removing technologies.
- ⚡ **JSON Based Data** — Technology information is loaded dynamically from a JSON file.

---

 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| ⚛️ React | Building the user interface |
| 🔷 TypeScript | Type-safe development |
| 🎨 Tailwind CSS | Styling and responsive design |
| ✨ React Icons | UI icons |
| 🔔 React Toastify | Toast notifications |
| ⚡ Vite | Development and build tool |

---

 📂 Project Structure

```text
src/
├── assets/
├── Componets/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TechnologyCard.tsx
│   ├── YourStack.tsx
│   └── Footer.tsx
├── Types/
│   └── technologiestype.ts
├── App.tsx
├── index.css
└── main.tsx

public/
└── technologies.json


💡 How It Works
1.Technology data is loaded from technologies.json.
2.Technologies are displayed as responsive cards.
3.Users can add technologies to Your Stack.
4.Already selected technologies are marked as added.
5.Selected technologies can be removed individually or all at once.
6.Toast notifications provide feedback for stack actions.

---

📚 React Questions & Answers
1. What is JSX, and why do we use it?

ANS: JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to understand because we can describe the UI directly inside our component.

---

2. What is the difference between props and state?

ANS: Props are used to pass data from a parent component to a child component. Props are read-only.

State is data managed inside a component. When state changes, React updates the UI.

For example, this project uses props to pass technology data and functions between components, while state is used to manage the selected stack.

---

3. What is useState and where do you use it?

ANS: useState is a React Hook used to store and update data inside a component.

In this project, it is used for:

=>Selected technologies
=>Technology data
=>Loading state
=>Mobile menu state

---

4. What is useEffect and why do we need it for JSON data?

ANS: useEffect is a React Hook used for handling side effects.

In this project, useEffect is used to fetch the technology data from technologies.json when the application loads.

This keeps the technology data separate from the component code.

---

5. Why do we need a unique key when rendering a list?

ANS: React uses a key to identify individual items in a list.

A unique key helps React understand which item has changed, been added, or removed, allowing it to update the UI efficiently.

For example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />))}

  ---

6. What is conditional rendering?

ANS: Conditional rendering means displaying different UI based on a condition.

For example, in this project, if the stack is empty, a message is displayed:

{stack.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  <YourStack stack={stack} />
)}

When technologies are selected, the selected technology list is displayed instead.

---

7. How do you pass data from parent to child and child to parent?

ANS: Data can be passed from a parent to a child using props.

For example, App passes technology, stack, and onAddToStack to TechnologyCard.

To communicate from child to parent, the parent can pass a function as a prop. The child calls that function when an action occurs.

For example, TechnologyCard calls onAddToStack() when the user clicks Add to Stack, allowing the parent component to update the stack.

---

🌐 Live Demo

🚀 Live Website: https://dev-stack-builder-2026.netlify.app

---

⭐ If you like this project, consider giving it a star!