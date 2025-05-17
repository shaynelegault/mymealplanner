import Image from "next/image";

export default function Home() {
  return (
    <div className="landing-root">
    <div className="landing-hero">
      <h1 className="landing-title">Tired of last-minute meal decisions?</h1>
      <p className="landing-subtitle">
      My Meal Planner helps you quickly build personalized meal plans in seconds. 
      </p>
      <p className="landing-subtitle">
      Whether you're cooking for one or for a family, we make meal planning fast, simple, and delicious.
      </p>
      <button className="landing-btn">Get My Weekly Meal Plan</button>
    </div>
    <div className="landing-features">
      <div className="feature">
        <div className="feature-icon feature-icon-blue">+</div>
        <h2>Quick Planning</h2>
        <p>Build your weekly meals in seconds with our smart algorithm.</p>
      </div>
      <div className="feature">
        <div className="feature-icon feature-icon-green">✔</div>
        <h2>Easy Recipes</h2>
        <p>Get simple, delicious recipes that fit your dietary needs.</p>
      </div>
      <div className="feature">
        <div className="feature-icon feature-icon-purple">△</div>
        <h2>Smart Shopping</h2>
        <p>Get grocery lists and save time at the store.</p>
      </div>
    </div>
    <footer className="landing-footer">
      © {new Date().getFullYear()} My Meal Planner. All rights reserved.
    </footer>
  </div>
  );
}
