import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CardProps {
  title: string;
  content: string;
  imageSource: Image; // Ajoute un type approprié pour la source de l'image
  title2: string;
  content2: string
}

const Card: React.FC<CardProps> = ({ title, content, title2, content2}) => {
  return (
    <View style={styles.card}>
      <Image source={require("../assets/Gifts.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <Text style={styles.title}>{title2}</Text>
        <Text style={styles.content}>{content2}</Text> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // Permet d'aligner les éléments horizontalement
    borderWidth: 0,
    borderRadius: 30,
    borderColor: '#ddd',
    padding: 16,
    margin: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    height: 168,
    width: 350,
  },
  image: {
    width: 130, // Ajuste la largeur de l'image selon tes besoins
    height: 120, // Ajuste la hauteur de l'image selon tes besoins
    marginRight: 16, // Marge à droite de l'image pour l'éloigner du texte
    alignSelf: 'center',
    borderRadius: 30,
  },
  textContainer: {
    flex: 1, // Permet au conteneur de texte de prendre tout l'espace disponible
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    marginTop: 8,
    fontSize: 12,
  },
});

export default Card;
