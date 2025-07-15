import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Volume2, Search, Globe } from 'lucide-react';
import { travelPhrases, languages, type Language } from '@/lib/travelData';

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('spanish');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const filteredPhrases = travelPhrases.filter(phrase => {
    const matchesSearch = phrase.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         phrase.translations[selectedLanguage].text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || phrase.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(travelPhrases.map(p => p.category)))];

  const playAudio = useCallback(async (text: string, language: Language, phraseId: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis not supported in your browser');
      return;
    }

    setIsPlaying(phraseId);
    
    const utterance = new SpeechSynthesisUtterance(text);
    const langCode = languages[language].code;
    utterance.lang = langCode;
    utterance.rate = 0.8;
    utterance.pitch = 1;
    
    utterance.onend = () => setIsPlaying(null);
    utterance.onerror = () => setIsPlaying(null);
    
    speechSynthesis.speak(utterance);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
            <Globe className="h-10 w-10 text-blue-600" />
            Travel Phrase Translator
          </h1>
          <p className="text-xl text-gray-600">Learn essential travel phrases with audio pronunciation</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Controls */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Language & Search
              </CardTitle>
              <CardDescription>
                Select a language and search for phrases
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Target Language</label>
                  <Select value={selectedLanguage} onValueChange={(value: Language) => setSelectedLanguage(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(languages).map(([key, lang]) => (
                        <SelectItem key={key} value={key}>
                          {lang.flag} {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Search Phrases</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search phrases..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Phrases */}
          <div className="grid gap-4">
            {filteredPhrases.map((phrase) => (
              <Card key={phrase.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{phrase.category}</Badge>
                        {phrase.essential && <Badge variant="default">Essential</Badge>}
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-lg font-semibold text-gray-900">{phrase.english}</p>
                          <p className="text-sm text-gray-500">English</p>
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-xl font-semibold text-blue-900">
                            {phrase.translations[selectedLanguage].text}
                          </p>
                          <p className="text-sm text-blue-600 mt-1">
                            {phrase.translations[selectedLanguage].phonetic}
                          </p>
                          <p className="text-xs text-blue-500 mt-1">
                            {languages[selectedLanguage].name}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 md:ml-4">
                      <Button
                        onClick={() => playAudio(phrase.english, 'english' as Language, `${phrase.id}-en`)}
                        variant="outline"
                        size="sm"
                        disabled={isPlaying === `${phrase.id}-en`}
                        className="w-full md:w-auto"
                      >
                        <Volume2 className="h-4 w-4 mr-2" />
                        {isPlaying === `${phrase.id}-en` ? 'Playing...' : 'English'}
                      </Button>
                      
                      <Button
                        onClick={() => playAudio(
                          phrase.translations[selectedLanguage].text,
                          selectedLanguage,
                          `${phrase.id}-${selectedLanguage}`
                        )}
                        size="sm"
                        disabled={isPlaying === `${phrase.id}-${selectedLanguage}`}
                        className="w-full md:w-auto"
                      >
                        <Volume2 className="h-4 w-4 mr-2" />
                        {isPlaying === `${phrase.id}-${selectedLanguage}` ? 'Playing...' : languages[selectedLanguage].name}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPhrases.length === 0 && (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">No phrases found matching your search criteria.</p>
              </CardContent>
            </Card>
          )}

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">📱 Features:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Select your target language</li>
                    <li>• Browse by category or search</li>
                    <li>• Click audio buttons to hear pronunciation</li>
                    <li>• Essential phrases are marked</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">💡 Tips:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Use phonetic guides for pronunciation</li>
                    <li>• Practice frequently used phrases first</li>
                    <li>• Listen multiple times for better learning</li>
                    <li>• Focus on essential phrases for basics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;