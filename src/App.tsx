import  { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, DollarSign, TrendingUp, Target, Star, Mail, User, Phone, Sparkles, Shield, ArrowRight } from 'lucide-react';

const EbookFinancasLP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setTimeout(() => {
      alert('📧 Ebook enviado para seu email!\n\nVerifique sua caixa de entrada (e spam também).');
      setIsSubmitted(false);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '' });
    }, 1500);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToForm = () => {
    // document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <DollarSign className="absolute top-1/4 left-1/12 w-8 h-8 text-yellow-400/30 animate-bounce" style={{animationDelay: '0s'}} />
          <TrendingUp className="absolute top-3/4 right-1/12 w-8 h-8 text-green-400/30 animate-bounce" style={{animationDelay: '2s'}} />
          <Target className="absolute top-1/2 left-1/6 w-8 h-8 text-blue-400/30 animate-bounce" style={{animationDelay: '4s'}} />
          <Sparkles className="absolute top-1/3 right-1/4 w-8 h-8 text-purple-400/30 animate-bounce" style={{animationDelay: '1s'}} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-white space-y-8">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-sm px-4 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                EBOOK GRATUITO
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Liberdade
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                    Financeira
                  </span>
                  <br />
                  em 30 Dias
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Descubra os segredos que os milionários usam para multiplicar seu dinheiro e construir riqueza duradoura
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  'Método testado por +10.000 pessoas',
                  'Estratégias práticas e aplicáveis',
                  'Resultados em 30 dias ou menos'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                QUERO MEU EBOOK GRÁTIS
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Lead Form */}
            <Card id="lead-form" className="bg-white/95 backdrop-blur-lg border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Baixe GRÁTIS Agora!
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Insira seus dados e receba o ebook no seu email em segundos
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-10 py-6 text-base border-2 focus:border-purple-500 transition-colors"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu melhor email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 py-6 text-base border-2 focus:border-purple-500 transition-colors"
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Seu WhatsApp (opcional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 py-6 text-base border-2 focus:border-purple-500 transition-colors"
                    />
                  </div>
                  
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-6 text-lg font-bold uppercase tracking-wide transition-all duration-300 ${
                      isSubmitted 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'
                    } text-white transform hover:scale-105 hover:shadow-lg`}
                  >
                    {isSubmitting ? 'ENVIANDO...' : isSubmitted ? 'EBOOK ENVIADO! ✓' : 'QUERO MEU EBOOK GRÁTIS'}
                  </Button>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4" />
                  <span>Seus dados estão 100% seguros conosco</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              O que você vai aprender
            </h2>
            <p className="text-xl text-gray-600">
              Conteúdo exclusivo que vai transformar sua vida financeira
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Multiplicar sua Renda',
                description: 'Estratégias comprovadas para aumentar seus ganhos mensais em até 300% usando técnicas de investimento inteligente',
                gradient: 'from-green-400 to-blue-500'
              },
              {
                icon: TrendingUp,
                title: 'Controle Total das Finanças',
                description: 'Sistema completo para organizar, controlar e otimizar cada centavo que entra e sai da sua conta',
                gradient: 'from-purple-400 to-pink-500'
              },
              {
                icon: Target,
                title: 'Plano de Liberdade',
                description: 'Método passo-a-passo para criar sua independência financeira e nunca mais se preocupar com dinheiro',
                gradient: 'from-yellow-400 to-orange-500'
              }
            ].map((benefit, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              O que dizem nossos leitores
            </h2>
            <p className="text-xl text-purple-100">
              Mais de 10.000 pessoas já transformaram suas vidas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Em apenas 20 dias aplicando o método, consegui quitar minhas dívidas e ainda sobrou dinheiro para investir. Incrível!",
                author: "Maria Silva",
                role: "Empresária"
              },
              {
                text: "Nunca pensei que seria tão simples organizar minhas finanças. Agora tenho controle total do meu dinheiro.",
                author: "João Santos",
                role: "Engenheiro"
              },
              {
                text: "O ebook mudou minha vida financeira completamente. Recomendo para todos que querem prosperar!",
                author: "Ana Costa",
                role: "Professora"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold">
                    <div>{testimonial.author}</div>
                    <div className="text-sm text-white/70">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Não perca esta oportunidade!
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Milhares de pessoas já transformaram suas vidas financeiras com este ebook. Seja a próxima história de sucesso!
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse"
          >
            BAIXAR EBOOK GRATUITO AGORA
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EbookFinancasLP;