import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
  };

  return (
    <div className={`min-h-screen pt-20 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold mb-12 text-center">Contact</h1>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <Input id="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <Textarea id="message" required className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;