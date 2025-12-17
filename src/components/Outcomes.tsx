import { Card, CardContent } from "@/components/ui/card";

const Outcomes = () => {
  const stats = [
    {
      number: "12+",
      label: "Years of Trust",
      description: "Building India's premier education community"
    },
    {
      number: "Zero",
      label: "CAC for Talent",
      description: "Leveraging earned brand authority"
    },
    {
      number: "100%",
      label: "AI-Native",
      description: "Next-generation certified operators"
    },
    {
      number: "Real",
      label: "Enterprise Impact",
      description: "Deployed solutions in production workflows"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Measurable Impact, Lasting Outcomes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our unique flywheel model creates sustainable value for universities, enterprises, and talent. 
            From attention to deployment, every touchpoint drives measurable results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-card">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                The Enterprise Shift is Here
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                The market has matured from experimental demos to deployed workflows. Indian enterprises 
                now demand secure, locally-compliant AI copilots that integrate seamlessly into existing operations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Budgets are shifting from proof-of-concept experiments to operational AI that delivers 
                measurable outcomes. Organisations require both the technology and the talent to govern it effectively.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
