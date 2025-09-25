import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Building2, Shield, Users, ArrowRight, BookOpen, Gavel, FileText, Award, Phone, Mail, MapPin, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import advocateOffice from "@/assets/lawyer-office-interior.png";
import { useState } from "react";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-legal-bg">
      {/* Enhanced Professional Header with Navigation */}
      <header className="bg-gradient-justice shadow-elegant sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Scale className="h-9 w-9 text-justice-gold animate-pulse-slow" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-justice-gold rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary-foreground">Babu Advocates</h1>
                <p className="text-xs text-justice-gold font-medium">Professional Legal Services</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <Button variant="nav" size="sm" className="px-4">
                Home
              </Button>
              <Button 
                variant="nav" 
                size="sm" 
                className="px-4"
                onClick={() => document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' })}
              >
                About Us
              </Button>
              <Button 
                variant="nav" 
                size="sm" 
                className="px-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
              <div className="ml-4 pl-4 border-l border-primary-foreground/20">
                <span className="text-sm text-justice-gold font-semibold">
                  🏛️ Secure Case Management Platform
                </span>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <Button 
              variant="nav" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20 animate-fade-in">
              <nav className="flex flex-col space-y-2 mt-4">
                <Button variant="nav" size="sm" className="justify-start">
                  Home
                </Button>
                <Button 
                  variant="nav" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => {
                    document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  About Us
                </Button>
                <Button 
                  variant="nav" 
                  size="sm" 
                  className="justify-start"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact Us
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section with Law Elements - Landing Page Design */}
      <section className="relative py-32 overflow-hidden min-h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        
        {/* Floating Legal Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Gavel className="absolute top-20 left-10 h-16 w-16 text-justice-gold/20 animate-float-slow" />
          <BookOpen className="absolute top-40 right-20 h-12 w-12 text-court-purple/20 animate-float-reverse" />
          <FileText className="absolute bottom-40 left-20 h-14 w-14 text-legal-deep-blue/20 animate-pulse-slow" />
          <Award className="absolute bottom-20 right-10 h-10 w-10 text-prestige-amber/20 animate-spin-slow" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Central Legal Icons */}
            <div className="mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-4 bg-gradient-prestige p-6 rounded-2xl mb-8 shadow-elegant">
                <Scale className="h-16 w-16 text-legal-deep-blue animate-3d-text" />
                <Gavel className="h-16 w-16 text-legal-deep-blue" />
                <BookOpen className="h-16 w-16 text-legal-deep-blue" />
              </div>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-7xl font-bold text-foreground mb-6 animate-slide-up">
              <span className="bg-gradient-justice bg-clip-text text-transparent animate-shimmer block mb-4">
                Secure Case Management
              </span>
              <span className="text-primary animate-glow-text">
                Between Advocates & Banks
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-2xl text-muted-foreground mb-20 leading-relaxed max-w-4xl mx-auto animate-fade-in">
              A professional platform designed to streamline communication and case 
              management between legal advocates and banking institutions with 
              enterprise-grade security and compliance standards.
            </p>
            
            {/* Action Cards */}
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Advocate Portal Card */}
              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-500 border-primary/30 hover:border-justice-gold/50 hover:scale-105 group relative overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-justice opacity-5 group-hover:opacity-10 transition-opacity"></div>
                <CardContent className="relative z-10 text-center">
                  <div className="mx-auto mb-8 relative">
                    <div className="p-8 bg-gradient-law-firm rounded-full w-fit shadow-glow mx-auto">
                      <Scale className="h-20 w-20 text-justice-gold group-hover:animate-spin-3s" />
                    </div>
                    <div className="absolute -top-3 -right-3 p-3 bg-justice-gold rounded-full animate-pulse">
                      <Gavel className="h-8 w-8 text-legal-deep-blue" />
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-primary group-hover:text-justice-gold transition-colors">
                    Advocate Portal
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Access your legal cases, manage client communications, and track case progress 
                    with professional legal tools
                  </p>
                  <Link to="/advocate-login">
                    <Button variant="advocate" size="lg" className="w-full text-xl py-4 hover:bg-gradient-justice">
                      Enter Portal
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Banking Portal Card */}
              <Card className="bg-gradient-card shadow-elegant hover:shadow-glow transition-all duration-500 border-accent/30 hover:border-prestige-amber/50 hover:scale-105 group relative overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-prestige opacity-5 group-hover:opacity-10 transition-opacity"></div>
                <CardContent className="relative z-10 text-center">
                  <div className="mx-auto mb-8 relative">
                    <div className="p-8 bg-gradient-corporate rounded-full w-fit shadow-glow mx-auto">
                      <Building2 className="h-20 w-20 text-prestige-amber group-hover:animate-spin-3s" />
                    </div>
                    <div className="absolute -top-3 -right-3 p-3 bg-prestige-amber rounded-full animate-pulse">
                      <Shield className="h-8 w-8 text-legal-deep-blue" />
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-accent group-hover:text-prestige-amber transition-colors">
                    Banking Portal
                  </h3>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Manage legal documentation, coordinate case workflows, and ensure 
                    compliance with banking regulations
                  </p>
                  <Link to="/bank-login">
                    <Button variant="bank" size="lg" className="w-full text-xl py-4 hover:bg-gradient-prestige">
                      Enter Portal
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with Legal Elements */}
      <section className="py-20 bg-gradient-legal-bg relative overflow-hidden">
        {/* Background Law Elements */}
        <div className="absolute inset-0 opacity-5">
          <Scale className="absolute top-10 left-10 h-32 w-32 text-justice-gold animate-spin-slow" />
          <Gavel className="absolute bottom-10 right-10 h-28 w-28 text-court-purple animate-float-slow" />
          <BookOpen className="absolute top-1/2 left-1/4 h-24 w-24 text-legal-deep-blue animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <Scale className="h-8 w-8 text-justice-gold" />
              <span className="text-justice-gold font-semibold">PROFESSIONAL EXCELLENCE</span>
              <Scale className="h-8 w-8 text-justice-gold" />
            </div>
            <h3 className="text-5xl font-bold text-foreground mb-6">
              Why Choose Our 
              <span className="text-transparent bg-gradient-justice bg-clip-text"> Legal Platform?</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built specifically for the legal and banking industry with security, compliance, 
              and professional excellence at its core.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Enterprise Security */}
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="mx-auto mb-6 relative">
                <div className="p-6 bg-gradient-law-firm rounded-full w-fit shadow-elegant group-hover:shadow-glow transition-all">
                  <Shield className="h-12 w-12 text-justice-gold group-hover:animate-spin-3s" />
                </div>
                <div className="absolute -top-2 -right-2 p-1 bg-justice-gold rounded-full animate-pulse">
                  <Award className="h-4 w-4 text-legal-deep-blue" />
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-legal-deep-blue">Enterprise Security</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Bank-grade encryption, multi-factor authentication, and security protocols 
                designed to protect sensitive legal data and client confidentiality.
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="w-2 h-2 bg-justice-gold rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-court-purple rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-legal-deep-blue rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Seamless Collaboration */}
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="mx-auto mb-6 relative">
                <div className="p-6 bg-gradient-prestige rounded-full w-fit shadow-elegant group-hover:shadow-glow transition-all">
                  <Users className="h-12 w-12 text-legal-deep-blue group-hover:animate-spin-3s" />
                </div>
                <div className="absolute -top-2 -right-2 p-1 bg-prestige-amber rounded-full animate-pulse">
                  <FileText className="h-4 w-4 text-legal-deep-blue" />
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-court-purple">Seamless Collaboration</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Streamlined communication workflows, real-time document sharing, 
                and integrated case management between advocates and banking professionals.
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="w-2 h-2 bg-prestige-amber rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-justice-gold rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-court-purple rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Compliance Ready */}
            <div className="text-center group hover:scale-105 transition-all duration-300">
              <div className="mx-auto mb-6 relative">
                <div className="p-6 bg-gradient-justice rounded-full w-fit shadow-elegant group-hover:shadow-glow transition-all">
                  <Scale className="h-12 w-12 text-prestige-amber group-hover:animate-spin-3s" />
                </div>
                <div className="absolute -top-2 -right-2 p-1 bg-law-emerald rounded-full animate-pulse">
                  <Gavel className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-law-emerald">Compliance Ready</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Built to meet legal and financial industry compliance requirements, 
                with audit trails, regulatory reporting, and industry-standard protocols.
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <div className="w-2 h-2 bg-law-emerald rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-legal-deep-blue rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-justice-gold rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Additional Legal Credentials Section */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-8 p-8 bg-gradient-card rounded-2xl shadow-elegant">
              <div className="flex items-center gap-3">
                <Award className="h-8 w-8 text-justice-gold" />
                <span className="text-lg font-semibold text-legal-deep-blue">Bar Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-court-purple" />
                <span className="text-lg font-semibold text-legal-deep-blue">ISO Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <Gavel className="h-8 w-8 text-law-emerald" />
                <span className="text-lg font-semibold text-legal-deep-blue">Court Approved</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-prestige-amber" />
                <span className="text-lg font-semibold text-legal-deep-blue">Legal Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section with Professional Image */}
      <section id="about-us" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="h-8 w-8 text-justice-gold" />
                <span className="text-justice-gold font-semibold uppercase tracking-wider">About Our Firm</span>
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Trusted Legal Expertise for 
                <span className="text-transparent bg-gradient-justice bg-clip-text"> Modern Banking</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With decades of combined experience in banking law and financial regulations, 
                Babu Advocates provides comprehensive legal solutions that bridge the gap 
                between traditional legal practice and modern digital banking requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Gavel className="h-6 w-6 text-justice-gold" />
                  <span className="text-lg font-medium">25+ Years Legal Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-court-purple" />
                  <span className="text-lg font-medium">Banking Law Specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-law-emerald" />
                  <span className="text-lg font-medium">Industry Recognition</span>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-justice rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-elegant group-hover:shadow-glow transition-all duration-300">
                <img 
                  src="https://iyizrpyjtkmpefaqzeth.supabase.co/storage/v1/object/sign/Images/babu.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZjhhMGM2OC01YTdkLTQ4NmYtOWVlMC02NmI0MTJjZjRlMGUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvYmFidS5qcGciLCJpYXQiOjE3NTg3OTk5NjUsImV4cCI6MjIzMTgzOTk2NX0.XVseaufwvaIWrCS803wdnchMx4LTxiyflrrHnl7nCS0"
                  alt="Professional law office interior with law books"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section id="contact" className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Phone className="h-8 w-8 text-justice-gold animate-pulse" />
              <span className="text-justice-gold font-semibold uppercase tracking-wider">Get In Touch</span>
              <Mail className="h-8 w-8 text-justice-gold animate-pulse" />
            </div>
            <h3 className="text-4xl font-bold text-primary-foreground mb-4">
              Ready to Secure Your Legal Matters?
            </h3>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Contact our experienced legal team for professional consultation and case management services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
              <Phone className="h-12 w-12 text-justice-gold mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-primary-foreground mb-2">Call Us</h4>
              <p className="text-primary-foreground/80">+919842274742</p>
            </div>
            
            <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
              <Mail className="h-12 w-12 text-justice-gold mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-primary-foreground mb-2">Email Us</h4>
              <p className="text-primary-foreground/80">legaldoctors@gmail.com</p>
            </div>
            
            <div className="text-center p-6 bg-primary-foreground/10 rounded-xl">
              <MapPin className="h-12 w-12 text-justice-gold mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-primary-foreground mb-2">Visit Us</h4>
              <p className="text-primary-foreground/80">Plot No 25E, Thiruvalluvar St, behind Arulmalar School, Managiri, Madurai, Tamil Nadu 625020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Small Footer */}
      <footer className="bg-gradient-justice py-8 border-t-2 border-justice-gold/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-justice-gold rounded-lg">
                  <Scale className="h-8 w-8 text-legal-deep-blue" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary-foreground">Babu Advocates</span>
                  <p className="text-justice-gold text-sm">Professional Legal Services</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Providing comprehensive legal solutions for banking and financial institutions 
                with expertise, integrity, and professional excellence.
              </p>
              <div className="flex items-center gap-4">
                <Award className="h-5 w-5 text-justice-gold" />
                <span className="text-primary-foreground/80 text-sm">Bar Council Certified</span>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-justice-gold" />
                  <span className="text-primary-foreground/80 text-sm">+919842274742</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-justice-gold" />
                  <span className="text-primary-foreground/80 text-sm">legaldoctors@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-justice-gold" />
                  <span className="text-primary-foreground/80 text-sm">Plot No 25E, Thiruvalluvar St, behind Arulmalar School, Managiri, Madurai, Tamil Nadu 625020</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <Scale className="h-5 w-5 text-justice-gold animate-pulse" />
                <span className="text-primary-foreground/80">
                  Secure Case Management Platform • Professional Legal Services
                </span>
              </div>
              <div className="text-primary-foreground/60 text-sm">
                © 2025 Babu Advocates • Powered by Techverse Infotech Private Limited
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;