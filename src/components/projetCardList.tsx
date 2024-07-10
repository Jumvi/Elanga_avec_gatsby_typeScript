import React, { useEffect, useState } from 'react';
import { Projet, apiResponseProject } from '../server.js/type';
import { fetchDataProject } from '../server.js/ajax';
import './projetCardLists.css';

const ProjetCard = () => {
  const [projects, setProjects] = useState<Projet[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Projet[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response: Projet[] = await fetchDataProject();
        if (response) {
          setProjects(response);
          setFilteredProjects(response);
        } else {
          console.log('Échec lors de la récupération des données');
        }
      } catch (error) {
        // console.log(error);
      }
    };

    fetchProjects();
  }, []);

  const filterProjectByCategory = (category: string) => {
    setSelectedCategory(category);

    if (category) {
      const filtered = projects.filter((p) => p.categorie === category);
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  };

  return (
    <div>
      <h1 className='title-h1'>Découvrer nos différents projets choisis pour vous</h1>
      <div className='all-btn'>
        <h2>filtrer</h2>
        <button onClick={() => filterProjectByCategory('agricole')}>Agricole</button>
        <button onClick={() => filterProjectByCategory('agroalimentaire')}>Agroalimentaire</button>
        <button onClick={() => filterProjectByCategory('')}>Tous</button>
      </div>
      <div className='all-card'>
        {filteredProjects.map((cat) => (
          
          <div key={cat.id} className='card'>
            <h2>{cat.titre}</h2>
            <p className='first-child'>Description: {cat.description.length > 200.? cat.description.slice(0,200) + '...':cat.description}</p>
            <p>Localisation: {cat.localisation}</p>
            <p>Durée: {cat.duree}</p>
            <div className='flex'>
              <p>Budget: {cat.budget}</p>
              <p>Total Reçu: {cat.totalRecu}</p>
              <p>Récompense: {cat.recompense}</p>
            </div>
            <img src={cat.image ? `http://localhost:3001/${cat.image}` : ''} alt={cat.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjetCard;
