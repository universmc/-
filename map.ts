interface CarteTempsEspace {
    timestamp: number; // Timestamp de la carte
  position: { // Position de la carte dans l'espace
  x: number;
      y: number;
      z: number;
    };
    contenu: string; // Contenu de la carte
  }
  
  class CartesTempsEspace {
    private cartes: CarteTempsEspace[];
  
    constructor(
  ) {
      this.cartes = [];
    }
  
    ajouterCarte(carte: CarteTempsEspace): void {
      this.cartes.push(carte);
    }
  
    recupererCarte(timestamp: number): CarteTempsEspace | undefined {
      return this.cartes.find(carte => carte.timestamp === timestamp);
    }
  }
  