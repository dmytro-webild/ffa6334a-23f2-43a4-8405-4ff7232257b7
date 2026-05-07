"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, Users, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="large"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Why Us",          id: "features"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="BALLIAN CAFE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "glowing-orb"}}
      logoText="BALLIAN CAFE & RESTAURANT"
      description="Experience the royal taste in the heart of Raniganj Bazar. Luxury dining, premium atmosphere, and unforgettable flavors."
      buttons={[
        {
          text: "Call Now",          href: "tel:07358579662"},
        {
          text: "View Location",          href: "https://maps.app.goo.gl/Wb4rbCYVA1CjzAcu8"},
      ]}
      imageSrc="https://img.freepik.com/free-photo/gourmet-seared-duck-breast-with-roasted-vegetables-rich-sauce_84443-72273.jpg?_wi=1"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      textboxLayout="default"
      useInvertedBackground={true}
      animationType="slide-up"
      features={[
        {
          title: "Premium Ambience",          description: "Our cafe offers a luxurious black and gold aesthetic, perfect for relaxing or meetings.",          phoneOne: {
            imageSrc: "https://img.freepik.com/free-photo/restaurant-private-room-with-table-14-persons-wooden-ceiling-brick-walls-fireplace_140725-8452.jpg",            imageAlt: "delicious cafe food photography"
          },
          phoneTwo: {
            imageSrc: "https://img.freepik.com/free-photo/young-friends-enjoying-time-together_23-2148395394.jpg",            imageAlt: "delicious cafe food photography"
          }
        },
        {
          title: "Delicious Food",          description: "Handcrafted meals, premium coffee, and refreshing beverages for every palate.",          phoneOne: {
            imageSrc: "https://img.freepik.com/free-photo/gourmet-seared-duck-breast-with-roasted-vegetables-rich-sauce_84443-72273.jpg?_wi=2",            imageAlt: "delicious cafe food photography"
          },
          phoneTwo: {
            imageSrc: "https://img.freepik.com/free-photo/table-set-dinning-table_1339-3406.jpg",            imageAlt: "delicious cafe food photography"
          }
        },
        {
          title: "Perfect Venue",          description: "An ideal place for friends, families, and special celebrations.",          phoneOne: {
            imageSrc: "https://img.freepik.com/free-photo/cheerful-young-girl-with-dark-hair-beret-classic-beige-trench-coat-sitting-table-city-cafe-terrace-smiling-having-cheesecake-tea-breakfast_197531-24446.jpg",            imageAlt: "delicious cafe food photography"
          },
          phoneTwo: {
            imageSrc: "https://img.freepik.com/free-photo/side-view-baked-fish-fillet-garnished-with-vegetables-spices-sauce-plate_140725-11497.jpg",            imageAlt: "delicious cafe food photography"
          }
        }
      ]}
      showStepNumbers={false}
      title="Why Visit Us"
      description="We blend luxury with taste to create the perfect dining experience for every occasion."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          brand: "Signature Favorites",          name: "Signature Burger",          price: "₹299",          rating: 5,
          reviewCount: "120",          imageSrc: "https://img.freepik.com/free-photo/slice-medovic-cake-white-plate_114579-17175.jpg"},
        {
          id: "2",          brand: "Recommended",          name: "Premium Coffee",          price: "₹149",          rating: 5,
          reviewCount: "85",          imageSrc: "https://img.freepik.com/free-photo/apple-cocktail-with-flowers-hand_140725-407.jpg"},
        {
          id: "3",          brand: "Healthy",          name: "Fresh Garden Salad",          price: "₹199",          rating: 4,
          reviewCount: "45",          imageSrc: "https://img.freepik.com/free-photo/tuna-salad-with-lettuce-olives-corn-tomatoes-top-view_114579-8289.jpg"},
        {
          id: "4",          brand: "Signature Favorites",          name: "Choco Fudge Cake",          price: "₹179",          rating: 5,
          reviewCount: "60",          imageSrc: "https://img.freepik.com/free-photo/fried-lamb-topped-with-vanilla-ice-cream-placed-lipstick-perfume_140725-2520.jpg"},
        {
          id: "5",          brand: "Recommended",          name: "Creamy Pasta",          price: "₹249",          rating: 4,
          reviewCount: "95",          imageSrc: "https://img.freepik.com/free-photo/chicken-breast-topped-with-fried-vegetables_140725-2712.jpg"},
        {
          id: "6",          brand: "Recommended",          name: "Exotic Mocktail",          price: "₹199",          rating: 5,
          reviewCount: "70",          imageSrc: "https://img.freepik.com/free-photo/glass-milky-cocktail-garnished-with-olive-apple-coffee-beans_140725-4853.jpg"},
      ]}
      title="Royal Menu"
      description="Discover our curated categories, from signature favorites to recommended refreshments."
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardOne
      animationType="scale-rotate"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "1000+",          title: "Happy Guests",          description: "Served with pride",          icon: Users,
        },
        {
          id: "m2",          value: "50+",          title: "Menu Items",          description: "Variety of flavors",          icon: Utensils,
        },
        {
          id: "m3",          value: "5",          title: "Years Experience",          description: "Culinary expertise",          icon: Award,
        },
      ]}
      title="Our Milestone"
      description="Serving thousands of happy guests with premium taste."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      members={[
        {
          id: "tm1",          name: "Rahul Kumar",          role: "Head Chef",          imageSrc: "https://img.freepik.com/free-photo/woman-with-laptop-pastry_23-2147625123.jpg"},
        {
          id: "tm2",          name: "Anita Devi",          role: "Pastry Expert",          imageSrc: "https://img.freepik.com/free-photo/young-cute-female-posing-indoor_344912-962.jpg"},
        {
          id: "tm3",          name: "Vikram Singh",          role: "Beverage Specialist",          imageSrc: "https://img.freepik.com/free-photo/laughing-couple-love-romantic-dinner_23-2148025321.jpg"},
      ]}
      title="Meet The Chefs"
      description="The masters behind your favorite Royal taste."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sita Devi",          role: "Local Resident",          testimonial: "The premium ambience and food taste are unmatched in Raniganj.",          imageSrc: "https://img.freepik.com/free-photo/young-happy-businesswoman-eating-while-using-desktop-pc-office_637285-5457.jpg"},
        {
          id: "2",          name: "Amit Kumar",          role: "Regular Guest",          testimonial: "Excellent service and the best coffee I've had in a long time.",          imageSrc: "https://img.freepik.com/free-photo/front-view-smiley-man-with-delicious-food_23-2150168075.jpg"},
        {
          id: "3",          name: "Pooja Singh",          role: "Food Blogger",          testimonial: "The Royal Dining experience is truly special and worth visiting.",          imageSrc: "https://img.freepik.com/free-photo/happy-couple-paying-bill-after-lunch-bar-man-is-using-smart-phone-contactless-payment_637285-631.jpg"},
        {
          id: "4",          name: "Rahul Verma",          role: "Business Owner",          testimonial: "Great place for meetings with excellent coffee.",          imageSrc: "https://img.freepik.com/free-photo/thrilled-confident-manager-business-attire-celebrates-victorious-milestone_482257-111932.jpg"},
        {
          id: "5",          name: "Sunita Das",          role: "Socialite",          testimonial: "Love the black and gold aesthetic, so chic and luxurious.",          imageSrc: "https://img.freepik.com/free-photo/young-woman-drinking-iced-coffee_23-2149624074.jpg"},
      ]}
      title="Customer Reviews"
      description="What our lovely patrons say about us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Do you accept table bookings?",          content: "Yes, we highly recommend booking in advance for weekend visits."},
        {
          id: "q2",          title: "Do you provide home delivery?",          content: "Yes, we are now online and offer direct order services."},
        {
          id: "q3",          title: "Is parking available?",          content: "Yes, ample parking space is available near Central Bank."},
      ]}
      title="Common Questions"
      description="Got questions? We have answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="Visit Us"
      title="Plan Your Royal Dining"
      description="Located near Central Bank, Raniganj Bazar. Come experience the taste."
      buttons={[
        {
          text: "Call Now",          href: "tel:07358579662"},
        {
          text: "WhatsApp Us",          href: "https://wa.me/917358579662"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="BALLIAN CAFE"
      columns={[
        {
          title: "Menu",          items: [
            {
              label: "Coffee",              href: "#menu"},
            {
              label: "Food",              href: "#menu"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Call: 07358579662",              href: "tel:07358579662"},
            {
              label: "Map Location",              href: "https://maps.app.goo.gl/Wb4rbCYVA1CjzAcu8"},
          ],
        },
      ]}
      copyrightText="© 2024 Ballian Cafe & Restaurant. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}