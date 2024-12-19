export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Suzanne Collins</h3>
            <p className="text-muted-foreground">
              Official website of the bestselling author of The Hunger Games trilogy.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Books</h4>
            <ul className="space-y-2">
              {['The Hunger Games', 'Catching Fire', 'Mockingjay', 'The Ballad of Songbirds and Snakes'].map((book) => (
                <li key={book}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {book}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'News', 'Events', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              {['Twitter', 'Instagram', 'Facebook', 'YouTube'].map((social) => (
                <li key={social}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Suzanne Collins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};