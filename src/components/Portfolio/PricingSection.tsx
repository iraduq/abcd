import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "Starter",
      price: 150,
      period: "proiect",
      description: "Perfect pentru afaceri mici și startup-uri",
      features: [
        "Design website responsive",
        "Până la 3 pagini",
        "Optimizare SEO de bază",
        "Integrare formular de contact",
        "Livrare în 2 săptămâni",
        "Suport 1 lună",
      ],
      popular: false,
      icon: Star,
    },
    {
      name: "Middle",
      price: 300,
      period: "proiect",
      description: "Ideal pentru afaceri în creștere",
      features: [
        "Website sau aplicație web personalizată",
        "Livrare în 4 săptămâni",
        "Optimizare performanță",
        "Suport 3 luni",
        "Cod sursă inclus",
      ],
      popular: true,
      icon: Zap,
    },
    {
      name: "Enterprise",
      price: 1000,
      period: "proiect",
      description: "Pentru proiecte complexe și consultanță",
      features: [
        "Dezvoltare full-stack",
        "Optimizare performanță",
        "Revizuire cod & mentoring",
        "Timeline flexibil",
        "Suport continuu",
        "Consultanță tehnică",
      ],
      popular: false,
      icon: Check,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Prețuri</span> & Servicii
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prețuri transparente pentru orice dimensiune de proiect. Hai să
            construim ceva uimitor împreună.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.name}
              className={`relative overflow-hidden p-8 surface card-hover ${
                pkg.popular ? "ring-2 ring-primary/50 scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pkg.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold gradient-text">
                    €{pkg.price}
                  </span>
                  <span className="text-muted-foreground">/{pkg.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  pkg.popular
                    ? "btn-hero"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
                variant={pkg.popular ? "default" : "outline"}
              >
                Începe acum
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ai nevoie de ceva personalizat? Hai să discutăm cerințele
            proiectului tău.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
