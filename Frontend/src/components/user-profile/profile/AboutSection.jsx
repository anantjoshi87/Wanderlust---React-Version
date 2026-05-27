import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TwitterIcon from "../../../assets/Twitter.svg";
import InstagramIcon from "../../../assets/Instagram.svg";
import { Globe } from "lucide-react";
import React from "react";

const Twitter = (props) => <img src={TwitterIcon} alt="Twitter" {...props} />;

const Instagram = (props) => (
  <img src={InstagramIcon} alt="Instagram" {...props} />
);

const AboutSection = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hi, I'm Sarah! I'm an interior designer and avid traveler based in
            San Francisco. I love creating beautiful, welcoming spaces for
            guests to enjoy. When I'm not hosting, you can find me exploring
            local coffee shops or hiking in Marin County.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
            >
              <Globe className="w-4 h-4" /> sarahdesigns.com
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutSection;
