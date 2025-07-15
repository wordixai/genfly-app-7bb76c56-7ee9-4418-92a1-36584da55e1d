export type Language = 'spanish' | 'french' | 'german' | 'italian' | 'portuguese' | 'english';

export interface Translation {
  text: string;
  phonetic: string;
}

export interface TravelPhrase {
  id: string;
  category: string;
  english: string;
  essential: boolean;
  translations: Record<Language, Translation>;
}

export const languages: Record<Language, { name: string; code: string; flag: string }> = {
  english: { name: 'English', code: 'en-US', flag: '🇺🇸' },
  spanish: { name: 'Spanish', code: 'es-ES', flag: '🇪🇸' },
  french: { name: 'French', code: 'fr-FR', flag: '🇫🇷' },
  german: { name: 'German', code: 'de-DE', flag: '🇩🇪' },
  italian: { name: 'Italian', code: 'it-IT', flag: '🇮🇹' },
  portuguese: { name: 'Portuguese', code: 'pt-PT', flag: '🇵🇹' },
};

export const travelPhrases: TravelPhrase[] = [
  // Greetings
  {
    id: '1',
    category: 'greetings',
    english: 'Hello',
    essential: true,
    translations: {
      english: { text: 'Hello', phonetic: 'həˈloʊ' },
      spanish: { text: 'Hola', phonetic: 'OH-lah' },
      french: { text: 'Bonjour', phonetic: 'bon-ZHOOR' },
      german: { text: 'Hallo', phonetic: 'HAH-loh' },
      italian: { text: 'Ciao', phonetic: 'CHAH-oh' },
      portuguese: { text: 'Olá', phonetic: 'oh-LAH' },
    },
  },
  {
    id: '2',
    category: 'greetings',
    english: 'Thank you',
    essential: true,
    translations: {
      english: { text: 'Thank you', phonetic: 'THANGK yoo' },
      spanish: { text: 'Gracias', phonetic: 'GRAH-see-ahs' },
      french: { text: 'Merci', phonetic: 'mer-SEE' },
      german: { text: 'Danke', phonetic: 'DAHN-keh' },
      italian: { text: 'Grazie', phonetic: 'GRAH-tsee-eh' },
      portuguese: { text: 'Obrigado', phonetic: 'oh-bree-GAH-doh' },
    },
  },
  {
    id: '3',
    category: 'greetings',
    english: 'Excuse me',
    essential: true,
    translations: {
      english: { text: 'Excuse me', phonetic: 'ik-SKYOOZ mee' },
      spanish: { text: 'Perdón', phonetic: 'per-DOHN' },
      french: { text: 'Excusez-moi', phonetic: 'ek-skew-zay-MWAH' },
      german: { text: 'Entschuldigung', phonetic: 'ent-SHOOL-dee-goong' },
      italian: { text: 'Scusi', phonetic: 'SKOO-zee' },
      portuguese: { text: 'Com licença', phonetic: 'kom lee-SEN-sah' },
    },
  },

  // Navigation
  {
    id: '4',
    category: 'navigation',
    english: 'Where is...?',
    essential: true,
    translations: {
      english: { text: 'Where is...?', phonetic: 'WAIR iz' },
      spanish: { text: '¿Dónde está...?', phonetic: 'DOHN-deh eh-STAH' },
      french: { text: 'Où est...?', phonetic: 'oo eh' },
      german: { text: 'Wo ist...?', phonetic: 'voh ist' },
      italian: { text: 'Dove è...?', phonetic: 'DOH-veh eh' },
      portuguese: { text: 'Onde fica...?', phonetic: 'ON-deh FEE-kah' },
    },
  },
  {
    id: '5',
    category: 'navigation',
    english: 'How do I get to...?',
    essential: true,
    translations: {
      english: { text: 'How do I get to...?', phonetic: 'HOW doo ahy GET too' },
      spanish: { text: '¿Cómo llego a...?', phonetic: 'KOH-moh YEH-goh ah' },
      french: { text: 'Comment aller à...?', phonetic: 'koh-mahn tah-LAY ah' },
      german: { text: 'Wie komme ich zu...?', phonetic: 'vee KOH-meh ikh tsoo' },
      italian: { text: 'Come arrivare a...?', phonetic: 'KOH-meh ah-ree-VAH-reh ah' },
      portuguese: { text: 'Como chego a...?', phonetic: 'KOH-moh SHEH-goh ah' },
    },
  },

  // Food & Drink
  {
    id: '6',
    category: 'food',
    english: 'I would like to order',
    essential: true,
    translations: {
      english: { text: 'I would like to order', phonetic: 'ahy wood LAHYK too OR-der' },
      spanish: { text: 'Me gustaría pedir', phonetic: 'meh goo-stah-REE-ah peh-DEER' },
      french: { text: 'Je voudrais commander', phonetic: 'zhuh voo-DREH koh-mahn-DAY' },
      german: { text: 'Ich möchte bestellen', phonetic: 'ikh MUKH-teh beh-SHTEL-len' },
      italian: { text: 'Vorrei ordinare', phonetic: 'vor-RAY or-dee-NAH-reh' },
      portuguese: { text: 'Gostaria de pedir', phonetic: 'goh-stah-REE-ah deh peh-DEER' },
    },
  },
  {
    id: '7',
    category: 'food',
    english: 'The check, please',
    essential: true,
    translations: {
      english: { text: 'The check, please', phonetic: 'thuh CHEK pleez' },
      spanish: { text: 'La cuenta, por favor', phonetic: 'lah KWEN-tah por fah-VOR' },
      french: { text: "L'addition, s'il vous plaît", phonetic: 'lah-dee-SYON seel voo PLEH' },
      german: { text: 'Die Rechnung, bitte', phonetic: 'dee REKH-noong BIT-teh' },
      italian: { text: 'Il conto, per favore', phonetic: 'eel KON-toh per fah-VOH-reh' },
      portuguese: { text: 'A conta, por favor', phonetic: 'ah KON-tah por fah-VOR' },
    },
  },

  // Emergency
  {
    id: '8',
    category: 'emergency',
    english: 'Help!',
    essential: true,
    translations: {
      english: { text: 'Help!', phonetic: 'HELP' },
      spanish: { text: '¡Socorro!', phonetic: 'soh-KOH-roh' },
      french: { text: 'Au secours!', phonetic: 'oh sk-KOOR' },
      german: { text: 'Hilfe!', phonetic: 'HIL-feh' },
      italian: { text: 'Aiuto!', phonetic: 'ah-YOO-toh' },
      portuguese: { text: 'Socorro!', phonetic: 'soh-KOH-roh' },
    },
  },
  {
    id: '9',
    category: 'emergency',
    english: 'Call the police',
    essential: true,
    translations: {
      english: { text: 'Call the police', phonetic: 'KAWL thuh pə-LEES' },
      spanish: { text: 'Llama a la policía', phonetic: 'YAH-mah ah lah poh-lee-SEE-ah' },
      french: { text: 'Appelez la police', phonetic: 'ah-play lah poh-LEES' },
      german: { text: 'Rufen Sie die Polizei', phonetic: 'ROO-fen zee dee poh-lee-TSAHY' },
      italian: { text: 'Chiamate la polizia', phonetic: 'kee-ah-MAH-teh lah poh-lee-TSEE-ah' },
      portuguese: { text: 'Chame a polícia', phonetic: 'SHAH-meh ah poh-LEE-see-ah' },
    },
  },

  // Hotel
  {
    id: '10',
    category: 'hotel',
    english: 'Do you have any rooms available?',
    essential: true,
    translations: {
      english: { text: 'Do you have any rooms available?', phonetic: 'doo yoo hav EH-nee roomz ə-VAY-lə-bəl' },
      spanish: { text: '¿Tienen habitaciones disponibles?', phonetic: 'tee-EH-nen ah-bee-tah-see-OH-nes dees-poh-NEE-bles' },
      french: { text: 'Avez-vous des chambres libres?', phonetic: 'ah-vay voo day SHAM-brə LEE-brə' },
      german: { text: 'Haben Sie freie Zimmer?', phonetic: 'HAH-ben zee FRAY-eh TSIM-mer' },
      italian: { text: 'Avete camere disponibili?', phonetic: 'ah-VEH-teh KAH-meh-reh dees-poh-NEE-bee-lee' },
      portuguese: { text: 'Têm quartos disponíveis?', phonetic: 'tayn KWAR-tohs dees-poh-NEE-vays' },
    },
  },

  // Transportation
  {
    id: '11',
    category: 'transportation',
    english: 'How much does it cost?',
    essential: true,
    translations: {
      english: { text: 'How much does it cost?', phonetic: 'HOW muhch duhz it KAWST' },
      spanish: { text: '¿Cuánto cuesta?', phonetic: 'KWAN-toh KWEH-stah' },
      french: { text: 'Combien ça coûte?', phonetic: 'kom-bee-AN sah KOOT' },
      german: { text: 'Was kostet das?', phonetic: 'vahs KOS-tet dahs' },
      italian: { text: 'Quanto costa?', phonetic: 'KWAN-toh KOS-tah' },
      portuguese: { text: 'Quanto custa?', phonetic: 'KWAN-toh KOOS-tah' },
    },
  },
  {
    id: '12',
    category: 'transportation',
    english: 'Where is the train station?',
    essential: false,
    translations: {
      english: { text: 'Where is the train station?', phonetic: 'WAIR iz thuh TRAYN STAY-shən' },
      spanish: { text: '¿Dónde está la estación de tren?', phonetic: 'DOHN-deh eh-STAH lah eh-stah-see-OHN deh tren' },
      french: { text: 'Où est la gare?', phonetic: 'oo eh lah GAHR' },
      german: { text: 'Wo ist der Bahnhof?', phonetic: 'voh ist der BAHN-hohf' },
      italian: { text: 'Dov\'è la stazione?', phonetic: 'doh-VEH lah stah-tsee-OH-neh' },
      portuguese: { text: 'Onde fica a estação de comboio?', phonetic: 'ON-deh FEE-kah ah eh-stah-SAHN deh kom-BOY-oh' },
    },
  },

  // Shopping
  {
    id: '13',
    category: 'shopping',
    english: 'How much is this?',
    essential: true,
    translations: {
      english: { text: 'How much is this?', phonetic: 'HOW muhch iz THIS' },
      spanish: { text: '¿Cuánto cuesta esto?', phonetic: 'KWAN-toh KWEH-stah EH-stoh' },
      french: { text: 'Combien coûte ceci?', phonetic: 'kom-bee-AN koot sə-SEE' },
      german: { text: 'Was kostet das?', phonetic: 'vahs KOS-tet dahs' },
      italian: { text: 'Quanto costa questo?', phonetic: 'KWAN-toh KOS-tah KWEH-stoh' },
      portuguese: { text: 'Quanto custa isto?', phonetic: 'KWAN-toh KOOS-tah ISH-toh' },
    },
  },

  // Basic Needs
  {
    id: '14',
    category: 'basic',
    english: 'Do you speak English?',
    essential: true,
    translations: {
      english: { text: 'Do you speak English?', phonetic: 'doo yoo SPEEK ING-glish' },
      spanish: { text: '¿Habla inglés?', phonetic: 'AH-blah een-GLAYS' },
      french: { text: 'Parlez-vous anglais?', phonetic: 'par-lay voo ahn-GLEH' },
      german: { text: 'Sprechen Sie Englisch?', phonetic: 'SHPREKH-en zee ENG-lish' },
      italian: { text: 'Parla inglese?', phonetic: 'PAR-lah een-GLEH-zeh' },
      portuguese: { text: 'Fala inglês?', phonetic: 'FAH-lah een-GLAYSH' },
    },
  },
  {
    id: '15',
    category: 'basic',
    english: 'I don\'t understand',
    essential: true,
    translations: {
      english: { text: 'I don\'t understand', phonetic: 'ahy DOHNT uhn-der-STAND' },
      spanish: { text: 'No entiendo', phonetic: 'noh en-tee-EN-doh' },
      french: { text: 'Je ne comprends pas', phonetic: 'zhuh nuh kom-prahn PAH' },
      german: { text: 'Ich verstehe nicht', phonetic: 'ikh fer-SHTAY-eh nikht' },
      italian: { text: 'Non capisco', phonetic: 'non kah-PEES-koh' },
      portuguese: { text: 'Não entendo', phonetic: 'nahn en-TEN-doh' },
    },
  },
];