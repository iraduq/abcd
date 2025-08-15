import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Contactează-mă</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ești gata să începi următorul proiect? Hai să discutăm cum putem
            colabora pentru a da viață ideilor tale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informații de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Ia legătura cu mine</h3>
              <p className="text-muted-foreground mb-8">
                Sunt mereu deschis să discut despre noi oportunități, proiecte
                creative sau pur și simplu despre tehnologie și dezvoltare.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 surface card-hover flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">
                    raduivan2003@yahoo.ro
                  </div>
                </div>
              </Card>

              <Card className="p-6 surface card-hover flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Telefon</div>
                  <div className="text-muted-foreground">+40 740 406 739</div>
                </div>
              </Card>

              <Card className="p-6 surface card-hover flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Locație</div>
                  <div className="text-muted-foreground">Suceava</div>
                </div>
              </Card>
            </div>

            {/* Linkuri sociale */}
            <div>
              <h4 className="font-semibold mb-4">Urmărește-mă</h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.open("https://github.com/iraduq", "_blank")
                  }
                >
                  <Github className="h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ivanradu/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Formular de contact */}
          <Card className="p-8 surface">
            <h3 className="text-2xl font-bold mb-6">Trimite un mesaj</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Prenume
                  </label>
                  <Input placeholder="Ion" className="bg-background" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nume</label>
                  <Input placeholder="Popescu" className="bg-background" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="ion.popescu@exemplu.com"
                  className="bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subiect
                </label>
                <Input
                  placeholder="Solicitare proiect"
                  className="bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mesaj</label>
                <Textarea
                  placeholder="Povestește-mi despre proiectul tău..."
                  rows={6}
                  className="bg-background resize-none"
                />
              </div>

              <Button className="w-full btn-hero group">
                Trimite mesaj
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
