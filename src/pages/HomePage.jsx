import { FeatureItem } from "../components/FeatureItem";
import { Hero } from "../components/Hero";
import SecurityIcon from "../img/icon-security.png";
import MoneyIcon from "../img/icon-money.png";
import ChatIcon from "../img/icon-chat.png";

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 class="sr-only">Features</h2>
        <FeatureItem
          icon={ChatIcon}
          alt="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          icon={MoneyIcon}
          alt="Money Icon"
          title="More savings means higher rates"
          description=" The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          icon={SecurityIcon}
          alt="Security Icon"
          title="Security you can trust"
          description=" We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
};
