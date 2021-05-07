# My work at the Making and Knowing Project

[Dana Chaillard](https://github.com/danachaillard), Ecole Polytechnique

Summer 2020

I would like to thank everyone at the Project that I had the chance to work with, Pamela H. Smith, Naomi Rosenkranz, Terry Catapano, Roni Kaufman, Matthew Kumar, Gregory Schare and Tianna Helena Uchacz. It was a wonderful experience working with you all.

All my code can be found at: <https://github.com/cu-mkp/manuscript-object/tree/v1.0-danachaillard>. The readme should allow you to get everything running.

My work consisted in three tasks. 

## Word Clouds

The first one was to create word clouds from the categories in the thesaurus. This was done in the file [word_clouds.py](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds.py) using a specific Python package. For each semantic tag, there is a word cloud in the [word cloud file](https://github.com/cu-mkp/manuscript-object/tree/v1.0-danachaillard/word_clouds).

### Animals
![animals-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/animal.png?raw=true)

### Body Parts
![bodyparts-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/body_part.png?raw=true)

### Currencies
![currencies-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/currency.png?raw=true)

### Environments
![environments-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/environment.png?raw=true)

### Materials
![materials-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/material.png?raw=true)

### Measurements
![measurements-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/measurement.png?raw=true)

### Medical
![medical-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/medical.png?raw=true)

### Music
![music-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/music.png?raw=true)

### Personal Names
![personalnames-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/personal_name.png?raw=true)

### Places
![places-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/place.png?raw=true)

### Plants
![plants-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/plant.png?raw=true)

### Professions
![profession-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/profession.png?raw=true)

### Sensory
![sensory-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/sensory.png?raw=true)

### Temporal
![time-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/time.png?raw=true)

### Tools
![tools-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/tool.png?raw=true)

### Weapons (Arms & Armor)
![weapons-wordcloud](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/word_clouds/weapon.png?raw=true)


## Semantic Trees

The second task was to create semantic trees from the vocabulary in the thesaurus. Once again category by category. These were created in the [vocabulary_abstraction.ipiynb](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/vocabulary_abstraction.ipynb) jupyter notebook. The trees are only to be found in the notebook. They were created using wordnet, which is a corpus that can give us the hypernyms of a word. For the the trees, I used only the tagged expressions in the thesaurus that are single words. I also had to clean the data to remove words not in the corpus or where the correct meaning we are looking for is not in the corpus.

A sample screenshot for Animals is provided below. To see all trees, visit [vocabulary_abstraction.ipiynb](https://github.com/cu-mkp/manuscript-object/blob/v1.0-danachaillard/vocabulary_abstraction.ipynb).

![tree-animals](../images/tree-animals.PNG?raw=true)


## Sentence Embeddings Using Machine Learning

The third task was to create sentence embeddings using a machine learning approach. For that, I used a pretrained ELMo model found on tensorflow_hub. ELMo generates a 1024 dimensions vector for each sentence. I then used PCA and t-SNE to reduce these dimensions to 2 and plotted that in an html file. All these files can be found in the [sentence_encode directory](https://github.com/cu-mkp/manuscript-object/tree/v1.0-danachaillard/Sentence_encode). I also created a graph where two categories are plotted in different colors. It is called sentence_encode_dual.


